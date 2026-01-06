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
 * Improved fallback markdown to HTML converter
 */
function fallbackMarkdownToHtml(markdown) {
    if (typeof markdown !== 'string') {
        console.error('fallbackMarkdownToHtml received non-string input:', typeof markdown);
        return '<div class="error">Invalid content type</div>';
    }
    
    try {
        let html = markdown;
        
        // Step 1: Protect code blocks from further processing
        const codeBlocks = [];
        html = html.replace(/```(\w+)?\s*\n([\s\S]*?)```/gm, function(match, lang, code) {
            const index = codeBlocks.length;
            const language = lang || '';
            codeBlocks.push({ lang: language, code: code });
            return `__CODEBLOCK_${index}__`;
        });
        
        // Step 2: Protect inline code
        const inlineCodes = [];
        html = html.replace(/`([^`]+)`/g, function(match, code) {
            const index = inlineCodes.length;
            inlineCodes.push(code);
            return `__INLINECODE_${index}__`;
        });
        
        // Step 3: Convert headers (must be at start of line)
        html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
        html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
        html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
        html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
        
        // Step 4: Convert bold and italic (non-greedy)
        html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
        
        // Step 5: Convert links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
        
        // Step 6: Convert ordered lists
        html = html.replace(/^\d+\.\s+(.+)$/gm, '<___OLI___>$1</___OLI___>');
        html = html.replace(/(<___OLI___>[\s\S]+?<\/___OLI___>\s*)+/g, function(match) {
            return '<ol>' + match.replace(/<___OLI___>/g, '<li>').replace(/<\/___OLI___>/g, '</li>') + '</ol>';
        });
        
        // Step 7: Convert unordered lists
        html = html.replace(/^[-*+]\s+(.+)$/gm, '<___ULI___>$1</___ULI___>');
        html = html.replace(/(<___ULI___>[\s\S]+?<\/___ULI___>\s*)+/g, function(match) {
            return '<ul>' + match.replace(/<___ULI___>/g, '<li>').replace(/<\/___ULI___>/g, '</li>') + '</ul>';
        });
        
        // Step 8: Convert blockquotes
        html = html.replace(/^>\s+(.+)$/gm, '<blockquote>$1</blockquote>');
        html = html.replace(/(<blockquote>[\s\S]+?<\/blockquote>\s*)+/g, function(match) {
            return '<blockquote>' + match.replace(/<\/?blockquote>/g, '') + '</blockquote>';
        });
        
        // Step 9: Convert horizontal rules
        html = html.replace(/^[-*_]{3,}$/gm, '<hr>');
        
        // Step 10: Convert paragraphs (split by double newlines)
        const sections = html.split(/\n\n+/);
        html = sections.map(section => {
            section = section.trim();
            if (!section) return '';
            
            // Don't wrap already formatted elements
            if (section.match(/^<(h[1-6]|ul|ol|pre|blockquote|hr|table)/i)) {
                return section;
            }
            
            // Wrap in paragraph
            return '<p>' + section.replace(/\n/g, '<br>') + '</p>';
        }).join('\n');
        
        // Step 11: Restore inline code
        inlineCodes.forEach((code, index) => {
            html = html.replace(`__INLINECODE_${index}__`, `<code>${escapeHtml(code)}</code>`);
        });
        
        // Step 12: Restore code blocks
        codeBlocks.forEach((block, index) => {
            const langClass = block.lang ? ` class="language-${block.lang}"` : '';
            const langAttr = block.lang ? ` data-language="${block.lang}"` : '';
            const escapedCode = escapeHtml(block.code.trim());
            html = html.replace(`__CODEBLOCK_${index}__`, 
                `<pre${langAttr}><code${langClass}>${escapedCode}</code></pre>`);
        });
        
        // Step 13: Final cleanup
        html = html.replace(/<p>\s*<\/p>/g, '');
        html = html.replace(/<p>(<h[1-6]>)/g, '$1');
        html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1');
        html = html.replace(/<p>(<(?:ul|ol|pre|blockquote|hr)>)/g, '$1');
        html = html.replace(/(<\/(?:ul|ol|pre|blockquote)>)<\/p>/g, '$1');
        html = html.replace(/<br>\s*<\/p>/g, '</p>');
        
        return html;
    } catch (error) {
        console.error('Fallback markdown conversion failed:', error);
        return '<div class="error">Content conversion failed: ' + error.message + '</div>';
    }
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
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
 * Main markdown file loader - uses fallback parser by default
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
            
            // Use fallback parser directly to avoid marked.js issues
            console.log('Using fallback markdown parser...');
            const html = fallbackMarkdownToHtml(text);
            
            // Validate output
            if (!html || html.trim() === '' || html.includes('[object Object]')) {
                throw new Error('Parsing produced invalid output');
            }
            
            console.log('✓ Fallback parser successful');
            console.log('HTML length:', html.length);
            
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
