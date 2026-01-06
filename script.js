document.addEventListener('DOMContentLoaded', function() {
    // Check if marked.js is loaded properly
    if (typeof marked === 'undefined') {
        console.error('marked.js library is not loaded');
        document.getElementById('markdown-content').innerHTML = '<div class="error">Error: Markdown parser library not loaded</div>';
        return;
    }
    
    // Check if marked.parse is available
    if (typeof marked.parse !== 'function') {
        console.error('marked.parse is not a function');
        document.getElementById('markdown-content').innerHTML = '<div class="error">Error: Markdown parser function not available</div>';
        return;
    }
    
    // Log marked.js version and info
    console.log('marked.js loaded:', typeof marked);
    console.log('marked.parse available:', typeof marked.parse);
    console.log('marked version:', marked.version || 'unknown');
    
    // Define the sections and their corresponding files in the specified order
    const sections = [
        {
            name: 'Python',
            files: ['Python1.md', 'Python2.md']
        },
        {
            name: 'Java',
            files: ['Java1.md', 'Java2.md']
        },
        {
            name: 'C#',
            files: ['C#1.md', 'C#2.md']
        },
        {
            name: 'Software Engineering',
            files: ['Soft1.md', 'Soft2.md']
        },
        {
            name: 'Data Structures & Algorithms',
            files: ['DSA1.md']
        },
        {
            name: 'Database Management Systems',
            files: ['DBMS1.md', 'DBMS2.md']
        },
        {
            name: 'Internet & Web',
            files: ['Int1.md', 'Int2.md']
        },
        {
            name: 'Computer Networks',
            files: ['Networks1.md', 'Networks2.md']
        },
        {
            name: 'OSI Model',
            files: ['OSI1.md', 'OSI2.md']
        },
        {
            name: 'System Design',
            files: ['System1.md', 'System2.md', 'System3.md']
        },
        {
            name: 'Linux',
            files: ['Linux1.md', 'Linux2.md']
        }
    ];

    // Hide loading indicator
    document.getElementById('loading-toc').style.display = 'none';
    
    // Generate the table of contents
    generateTableOfContents(sections);

    // Add event listeners to section titles for expanding/collapsing
    addSectionEventListeners();

    // Add event listeners to page links
    addPageEventListeners();
    
    // Add event listener for the Save as PDF button
    document.getElementById('save-pdf-btn').addEventListener('click', generatePDF);
});

/**
 * generatePDFFallback
 */
function generatePDFFallback() {
    const contentDiv = document.getElementById('markdown-content');

    if (!contentDiv || contentDiv.children.length === 0 || contentDiv.querySelector('.welcome-message')) {
        alert('Please load a document before generating a PDF.');
        return;
    }

    const currentFile = contentDiv.getAttribute('data-current-file') || 'document';
    const fileName = currentFile.replace(/\.md$/, '.pdf');

    console.log('Generating PDF for:', currentFile);

    const clone = contentDiv.cloneNode(true);

    const pageTOC = clone.querySelector('.page-toc');
    if (pageTOC) pageTOC.remove();

    const welcomeMessage = clone.querySelector('.welcome-message');
    if (welcomeMessage) welcomeMessage.remove();

    clone.querySelectorAll('*').forEach(el => {
        if (el.style) {
            el.style.display = '';
            el.style.visibility = 'visible';
            el.style.opacity = '1';
            el.style.backgroundColor = '';
            el.style.color = '';
        }
    });

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = '-9999px';
    container.style.top = '0';
    container.appendChild(clone);
    document.body.appendChild(container);

    const options = {
        margin: 10,
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            backgroundColor: '#ffffff',
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    html2pdf()
        .set(options)
        .from(clone)
        .save()
        .finally(() => {
            document.body.removeChild(container);
            console.log('PDF generated successfully');
        })
        .catch(error => {
            console.error('Error generating PDF:', error);
            alert('An error occurred while generating the PDF. See console for details.');
            document.body.removeChild(container);
        });
}

/**
 * Generates the table of contents based on the sections array
 */
function generateTableOfContents(sections) {
    const tocList = document.getElementById('toc-list');
    
    sections.forEach((section, sectionIndex) => {
        const sectionLi = document.createElement('li');
        
        const sectionTitle = document.createElement('span');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = section.name;
        sectionTitle.setAttribute('data-section', sectionIndex);
        sectionLi.appendChild(sectionTitle);
        
        const pagesList = document.createElement('ul');
        pagesList.className = 'section-pages';
        
        section.files.forEach((file, fileIndex) => {
            const pageLi = document.createElement('li');
            const pageLink = document.createElement('a');
            pageLink.className = 'page-link';
            pageLink.href = '#';
            pageLink.textContent = getPageName(file);
            pageLink.setAttribute('data-file', file);
            pageLink.setAttribute('data-section', sectionIndex);
            pageLink.setAttribute('data-page', fileIndex);
            
            pageLi.appendChild(pageLink);
            pagesList.appendChild(pageLi);
        });
        
        sectionLi.appendChild(pagesList);
        tocList.appendChild(sectionLi);
    });
}

/**
 * Adds click event listeners to section titles for expanding/collapsing
 */
function addSectionEventListeners() {
    document.querySelectorAll('.section-title').forEach(title => {
        title.addEventListener('click', function() {
            const pagesList = this.nextElementSibling;
            
            document.querySelectorAll('.section-pages').forEach(list => {
                if (list !== pagesList) {
                    list.classList.remove('active');
                }
            });
            
            pagesList.classList.toggle('active');
        });
    });
}

/**
 * Adds click event listeners to page links for loading content
 */
function addPageEventListeners() {
    document.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const file = this.getAttribute('data-file');
            
            loadMarkdownFile(file);
            
            document.querySelectorAll('.page-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

/**
 * Extracts a readable page name from the file name
 */
function getPageName(fileName) {
    let name = fileName.replace(/\.md$/, '');
    
    const match = name.match(/^([\d\.]+)\s*(.*)$/);
    
    if (match) {
        const number = match[1];
        const title = match[2].trim();
        
        if (title) {
            return `${title} - Part ${number}`;
        } else {
            return `Part ${number}`;
        }
    }
    
    return name;
}

/**
 * Fallback markdown to HTML converter when marked.js fails
 */
function fallbackMarkdownToHtml(markdown) {
    if (typeof markdown !== 'string') {
        console.error('fallbackMarkdownToHtml received non-string input:', typeof markdown);
        return '<div class="error">Invalid content type</div>';
    }
    
    try {
        let html = markdown;
        
        // Escape HTML entities first to prevent injection
        html = html.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;');
        
        // Convert code blocks FIRST (before other conversions)
        html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, function(match, lang, code) {
            const language = lang ? lang.replace(/^-/, '') : '';
            const langClass = language ? ` class="language-${language}"` : '';
            const langAttr = language ? ` data-language="${language}"` : '';
            return `<pre${langAttr}><code${langClass}>${code.trim()}</code></pre>`;
        });
        
        // Convert inline code
        html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');
        
        // Convert headers
        html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        
        // Convert bold and italic
        html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
        
        // Convert links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>');
        
        // Convert lists - handle both * and - bullet points
        html = html.replace(/^[-*] (.*$)/gim, '<li>$1</li>');
        
        // Group consecutive list items together
        html = html.replace(/(<li>.*?<\/li>\s*)+/g, function(match) {
            return '<ul>' + match + '</ul>';
        });
        
        // Convert line breaks to paragraphs
        const lines = html.split('\n\n');
        html = lines.map(line => {
            line = line.trim();
            if (line && !line.startsWith('<')) {
                return '<p>' + line + '</p>';
            }
            return line;
        }).join('\n');
        
        // Clean up
        html = html.replace(/<p><\/p>/gim, '');
        html = html.replace(/<p>(<[hH][1-6]>)/gim, '$1');
        html = html.replace(/(<\/[hH][1-6]>)<\/p>/gim, '$1');
        html = html.replace(/<p>(<pre>)/gim, '$1');
        html = html.replace(/(<\/pre>)<\/p>/gim, '$1');
        html = html.replace(/<p>(<ul>)/gim, '$1');
        html = html.replace(/(<\/ul>)<\/p>/gim, '$1');
        
        return html;
    } catch (error) {
        console.error('Fallback markdown conversion failed:', error);
        return '<div class="error">Content conversion failed: ' + error.message + '</div>';
    }
}

/**
 * Generates a page-specific table of contents from headings
 */
function generatePageTOC(contentDiv) {
    const headings = contentDiv.querySelectorAll('h2, h3, h4');
    
    if (headings.length <= 1) return;
    
    const tocDiv = document.createElement('div');
    tocDiv.className = 'page-toc';
    tocDiv.innerHTML = '<h2>Page Contents</h2>';
    
    const tocList = document.createElement('ul');
    
    headings.forEach((heading, index) => {
        if (index === 0 && heading.tagName.toLowerCase() === 'h1') return;
        
        if (!heading.id) {
            heading.id = 'heading-' + index;
        }
        
        const listItem = document.createElement('li');
        
        if (heading.tagName.toLowerCase() === 'h3') {
            listItem.className = 'toc-h3';
        } else if (heading.tagName.toLowerCase() === 'h4') {
            listItem.className = 'toc-h4';
        }
        
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = heading.textContent;
        
        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });
    
    tocDiv.appendChild(tocList);
    
    const firstElement = contentDiv.firstChild;
    contentDiv.insertBefore(tocDiv, firstElement);
}

/**
 * Removes emojis from text content
 */
function removeEmojis(text) {
    return text.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');
}

/**
 * Main markdown file loader with enhanced error handling
 */
function loadMarkdownFile(fileName) {
    const contentDiv = document.getElementById('markdown-content');
    const loadingElement = document.getElementById('loading-content');
    
    // Show loading indicator
    contentDiv.style.display = 'none';
    loadingElement.style.display = 'block';
    loadingElement.textContent = `Loading ${fileName}...`;
    
    const encodedFileName = encodeURIComponent(fileName);
    
    console.log('===== LOADING FILE =====');
    console.log('File name:', fileName);
    console.log('Encoded:', encodedFileName);
    
    // Fetch the markdown file
    fetch(encodedFileName)
        .then(response => {
            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);
            console.log('Content-Type:', response.headers.get('content-type'));
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(text => {
            console.log('Raw text received, length:', text.length);
            console.log('First 200 chars:', text.substring(0, 200));
            
            if (!text || text.trim() === '') {
                throw new Error('File is empty');
            }
            
            // Remove emojis
            text = removeEmojis(text);
            
            // Try marked.js first
            let html;
            try {
                console.log('Attempting marked.js parse...');
                
                // Configure marked with safe options
                marked.setOptions({
                    breaks: true,
                    gfm: true,
                    headerIds: true,
                    mangle: false,
                    sanitize: false,
                    pedantic: false
                });
                
                html = marked.parse(text);
                
                // Validate the output
                if (!html || typeof html !== 'string' || html.includes('[object Object]')) {
                    throw new Error('Invalid HTML output from marked.js');
                }
                
                console.log('✓ marked.js successful');
                console.log('HTML length:', html.length);
                console.log('HTML preview:', html.substring(0, 200));
                
            } catch (markedError) {
                console.warn('marked.js failed:', markedError.message);
                console.log('Falling back to custom parser...');
                
                html = fallbackMarkdownToHtml(text);
                console.log('✓ Fallback parser successful');
            }
            
            // Final validation
            if (!html || html.trim() === '') {
                throw new Error('Parsing produced empty output');
            }
            
            // Store filename for PDF generation
            contentDiv.setAttribute('data-current-file', fileName);
            
            // Set the content
            contentDiv.innerHTML = html;
            
            // Generate page TOC
            generatePageTOC(contentDiv);
            
            // Apply syntax highlighting
            contentDiv.querySelectorAll('pre code').forEach((block) => {
                try {
                    hljs.highlightElement(block);
                } catch (hlError) {
                    console.warn('Highlighting failed for block:', hlError);
                }
            });
            
            // Show content
            loadingElement.style.display = 'none';
            contentDiv.style.display = 'block';
            contentDiv.scrollTop = 0;
            
            console.log('===== FILE LOADED SUCCESSFULLY =====\n');
            
        })
        .catch(error => {
            console.error('===== LOADING FAILED =====');
            console.error('Error:', error);
            console.error('Stack:', error.stack);
            
            contentDiv.innerHTML = `
                <div class="error">
                    <h3>Failed to Load: ${fileName}</h3>
                    <p><strong>Error:</strong> ${error.message}</p>
                    <p>Please check:</p>
                    <ul>
                        <li>File exists in the same directory as index.html</li>
                        <li>File name matches exactly (case-sensitive)</li>
                        <li>File is valid UTF-8 text</li>
                        <li>Browser console for additional details</li>
                    </ul>
                </div>
            `;
            contentDiv.style.display = 'block';
            loadingElement.style.display = 'none';
        });
}

function generatePDF() {
    const contentDiv = document.getElementById('markdown-content');
    if (!contentDiv || contentDiv.children.length === 0 || contentDiv.querySelector('.welcome-message')) {
        alert('Please load a document before generating a PDF.');
        return;
    }
    const currentFile = contentDiv.getAttribute('data-current-file') || 'document';
    const fileName = currentFile.replace(/\.md$/, '.pdf');
    const pageTOC = contentDiv.querySelector('.page-toc');
    let originalPageTOCDisplay = null;
    if (pageTOC) {
        originalPageTOCDisplay = pageTOC.style.display;
        pageTOC.style.display = 'none';
    }
    const previousStyle = contentDiv.getAttribute('style') || '';
    contentDiv.style.maxWidth = '210mm';
    contentDiv.style.margin = '0 auto';
    contentDiv.style.padding = '0 10mm 10mm 10mm';
    contentDiv.style.backgroundColor = '#ffffff';
    contentDiv.style.color = '#000000';
    contentDiv.style.boxSizing = 'border-box';
    const options = {
        margin: 10,
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff'
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };
    html2pdf()
        .set(options)
        .from(contentDiv)
        .save()
        .then(() => {
            if (pageTOC) {
                pageTOC.style.display = originalPageTOCDisplay;
            }
            if (previousStyle) {
                contentDiv.setAttribute('style', previousStyle);
            } else {
                contentDiv.removeAttribute('style');
            }
        })
        .catch(error => {
            console.error('Error generating PDF:', error);
            if (pageTOC) {
                pageTOC.style.display = originalPageTOCDisplay;
            }
             if (previousStyle) {
                contentDiv.setAttribute('style', previousStyle);
            } else {
                contentDiv.removeAttribute('style');
            }
            generatePDFFallback();
        });
}
