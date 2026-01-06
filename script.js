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

    // Load the first file by default (optional)
    // If you want to start with a specific file, uncomment and modify this line
    // loadMarkdownFile(sections[0].files[0]);
});

/**
 * generatePDFFallback
 * -------------------
 * Alternative PDF generation for Markdown content.
 * Uses a robust approach with html2pdf to create a printable PDF.
 *
 * Steps:
 * 1. Check if content is loaded and valid.
 * 2. Clone the content to avoid modifying the live DOM.
 * 3. Remove unwanted elements like table of contents (TOC) or welcome messages.
 * 4. Fix styling for visibility.
 * 5. Append the clone to a hidden container in the DOM.
 * 6. Use html2pdf to generate and download a PDF.
 * 7. Clean up temporary DOM elements after generation.
 *
 * Dependencies:
 * - html2pdf.js (https://github.com/eKoopmans/html2pdf)
 */
function generatePDFFallback() {
    // 1. Select the Markdown content container
    const contentDiv = document.getElementById('markdown-content');

    // 2. Validate content
    if (!contentDiv || contentDiv.children.length === 0 || contentDiv.querySelector('.welcome-message')) {
        alert('Please load a document before generating a PDF.');
        return;
    }

    const currentFile = contentDiv.getAttribute('data-current-file') || 'document';
    const fileName = currentFile.replace(/\.md$/, '.pdf');

    console.log('Generating PDF for:', currentFile);

    // 3. Clone the content to avoid modifying live DOM
    const clone = contentDiv.cloneNode(true);

    // 4. Remove elements that should not appear in PDF
    const pageTOC = clone.querySelector('.page-toc');
    if (pageTOC) pageTOC.remove();

    const welcomeMessage = clone.querySelector('.welcome-message');
    if (welcomeMessage) welcomeMessage.remove();

    // 5. Fix styles on all elements to ensure visibility in PDF
    clone.querySelectorAll('*').forEach(el => {
        if (el.style) {
            el.style.display = '';
            el.style.visibility = 'visible';
            el.style.opacity = '1';
            el.style.backgroundColor = '';
            el.style.color = '';
        }
    });

    // 6. Create a hidden container to hold the clone
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = '-9999px';
    container.style.top = '0';
    container.appendChild(clone);
    document.body.appendChild(container);

    // 7. Configure html2pdf options
    const options = {
        margin: 10,                        // Page margins in mm
        filename: fileName,                 // Output file name
        image: { type: 'jpeg', quality: 0.98 }, // Image quality for screenshots
        html2canvas: {
            scale: 2,                      // Higher scale for better quality
            backgroundColor: '#ffffff',    // White background
        },
        jsPDF: {
            unit: 'mm',                     // Units in millimeters
            format: 'a4',                   // A4 paper size
            orientation: 'portrait'         // Portrait orientation
        }
    };

    // 8. Generate the PDF from the cloned content
    html2pdf()
        .set(options)
        .from(clone)
        .save()
        .finally(() => {
            // 9. Cleanup temporary elements
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
 * @param {Array} sections - Array of section objects with name and files properties
 */
function generateTableOfContents(sections) {
    const tocList = document.getElementById('toc-list');
    
    sections.forEach((section, sectionIndex) => {
        // Create section list item
        const sectionLi = document.createElement('li');
        
        // Create section title
        const sectionTitle = document.createElement('span');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = section.name;
        sectionTitle.setAttribute('data-section', sectionIndex);
        sectionLi.appendChild(sectionTitle);
        
        // Create pages list for this section
        const pagesList = document.createElement('ul');
        pagesList.className = 'section-pages';
        
        // Add each page to the pages list
        section.files.forEach((file, fileIndex) => {
            const pageLi = document.createElement('li');
            const pageLink = document.createElement('a');
            pageLink.className = 'page-link';
            pageLink.href = '#';
            pageLink.textContent = getPageName(file);
            pageLink.setAttribute('data-file', file);
            pageLink.setAttribute('data-section', sectionIndex);
            pageLink.setAttribute('data-page', fileIndex);
            
            // We'll use the addPageEventListeners function instead of inline event handlers
            // to ensure consistent behavior across all page links
            
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
            const sectionIndex = this.getAttribute('data-section');
            const pagesList = this.nextElementSibling;
            
            // Close all other section pages lists
            document.querySelectorAll('.section-pages').forEach(list => {
                if (list !== pagesList) {
                    list.classList.remove('active');
                }
            });
            
            // Toggle the active class to show/hide the pages list
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
            
            // Get the file from data attribute
            const file = this.getAttribute('data-file');
            
            // Load the markdown content
            loadMarkdownFile(file);
            
            // Update active state
            document.querySelectorAll('.page-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

/**
 * Extracts a readable page name from the file name
 * @param {string} fileName - The file name
 * @returns {string} - A readable page name
 */
function getPageName(fileName) {
    // Remove file extension
    let name = fileName.replace(/\.md$/, '');
    
    // Extract the number part (1.0, 2, 3, etc.)
    const match = name.match(/^([\d\.]+)\s*(.*)$/);
    
    if (match) {
        const number = match[1];
        const title = match[2].trim();
        
        // If there's a title part, use it with the number
        if (title) {
            return `${title} - Part ${number}`;
        } else {
            // If there's only a number, use a generic name
            return `Part ${number}`;
        }
    }
    
    // If the pattern doesn't match, return the original name
    return name;
}

/**
 * Fallback markdown to HTML converter when marked.js fails
 * @param {string} markdown - The markdown text to convert
 * @returns {string} - The converted HTML
 */
function fallbackMarkdownToHtml(markdown) {
    if (typeof markdown !== 'string') {
        console.error('fallbackMarkdownToHtml received non-string input:', typeof markdown);
        return '<div class="error">Invalid content type</div>';
    }
    
    try {
        let html = markdown;
        
        // Convert headers
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        
        // Convert bold and italic
        html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
        html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');
        
        // Convert code blocks with language support
        html = html.replace(/```(\w+)?\n?([\s\S]*?)```/gim, function(match, lang, code) {
            const language = lang ? lang.replace(/^-/, '') : ''; // Remove leading dash if present
            const langClass = language ? ` class="language-${language}"` : '';
            const langAttr = language ? ` data-language="${language}"` : '';
            return `<pre${langAttr}><code${langClass}>${code.trim()}</code></pre>`;
        });
        html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');
        
        // Convert tables
        html = html.replace(/^\|(.+)\|$/gim, function(match, content) {
            return '<tr><td>' + content.split('|').map(cell => cell.trim()).filter(cell => cell !== '').join('</td><td>') + '</td></tr>';
        });
        
        // Wrap table rows in table structure
        html = html.replace(/(<tr>.*<\/tr>\s*)+/g, function(match) {
            // Extract headers from first row if it looks like a header
            const rows = match.match(/<tr>(.*?)<\/tr>/g);
            if (rows && rows.length > 0) {
                const firstRow = rows[0];
                const headerCells = firstRow.match(/<td>(.*?)<\/td>/g);
                
                // Check if this looks like a header row (all cells are typically header-like)
                const isHeader = headerCells && headerCells.every(cell => {
                    const content = cell.replace(/<\/?td>/g, '').trim();
                    return content.length > 0 && content.length < 20; // Simple heuristic
                });
                
                if (isHeader && rows.length > 1) {
                    // Convert first row to header
                    const headerRow = rows[0].replace(/<td>/g, '<th>').replace(/<\/td>/g, '</th>');
                    const bodyRows = rows.slice(1).join('');
                    return '<table><thead>' + headerRow + '</thead><tbody>' + bodyRows + '</tbody></table>';
                } else {
                    // No header, just wrap in table
                    return '<table><tbody>' + match + '</tbody></table>';
                }
            }
            return match;
        });
        
        // Convert links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>');
        
        // Convert lists - handle both * and - bullet points
        html = html.replace(/^[-*] (.*$)/gim, '<li>$1</li>');
        
        // Group consecutive list items together
        html = html.replace(/(<li>.*<\/li>\s*)+/g, function(match) {
            return '<ul>' + match + '</ul>';
        });
        
        // Convert paragraphs - but not inside lists or code blocks
        html = html.replace(/(?<!\<\/li\>)\n\n(?<!\<li\>)/gim, '</p><p>');
        html = '<p>' + html + '</p>';
        
        // Clean up extra tags
        html = html.replace(/<p><\/p>/gim, '');
        html = html.replace(/<p>(<h[1-6]>)/gim, '$1');
        html = html.replace(/(<\/h[1-6]>)<\/p>/gim, '$1');
        html = html.replace(/<p>(<pre>)/gim, '$1');
        html = html.replace(/(<\/pre>)<\/p>/gim, '$1');
        html = html.replace(/<p>(<ul>)/gim, '$1');
        html = html.replace(/(<\/ul>)<\/p>/gim, '$1');
        html = html.replace(/<p>(<li>)/gim, '$1');
        html = html.replace(/(<\/li>)<\/p>/gim, '$1');
        
        return html;
    } catch (error) {
        console.error('Fallback markdown conversion failed:', error);
        return '<div class="error">Content conversion failed: ' + error.message + '</div>';
    }
}

/**
 * Generates a page-specific table of contents from headings
 * @param {HTMLElement} contentDiv - The content div containing the parsed markdown
 */
function generatePageTOC(contentDiv) {
    // Find all headings (h2, h3, h4) in the content
    const headings = contentDiv.querySelectorAll('h2, h3, h4');
    
    // If there are no headings or only one heading, don't create a TOC
    if (headings.length <= 1) return;
    
    // Create TOC container
    const tocDiv = document.createElement('div');
    tocDiv.className = 'page-toc';
    tocDiv.innerHTML = '<h2>Page Contents</h2>';
    
    // Create list for TOC items
    const tocList = document.createElement('ul');
    
    // Process each heading
    headings.forEach((heading, index) => {
        // Skip the first heading if it's an h1 (usually the title)
        if (index === 0 && heading.tagName.toLowerCase() === 'h1') return;
        
        // Add id to the heading if it doesn't have one
        if (!heading.id) {
            heading.id = 'heading-' + index;
        }
        
        // Create list item
        const listItem = document.createElement('li');
        
        // Add appropriate class based on heading level
        if (heading.tagName.toLowerCase() === 'h3') {
            listItem.className = 'toc-h3';
        } else if (heading.tagName.toLowerCase() === 'h4') {
            listItem.className = 'toc-h4';
        }
        
        // Create link
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = heading.textContent;
        
        // Add link to list item
        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });
    
    // Add the list to the TOC container
    tocDiv.appendChild(tocList);
    
    // Insert the TOC at the beginning of the content
    const firstElement = contentDiv.firstChild;
    contentDiv.insertBefore(tocDiv, firstElement);
}

/**
 * Removes emojis from text content
 * @param {string} text - The text to process
 * @returns {string} - Text with emojis removed
 */
function removeEmojis(text) {
    // This regex pattern matches most emoji characters
    return text.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');
}

/**
 * Alternative markdown loader that bypasses marked.js completely
 * @param {string} fileName - The name of the markdown file to load
 */
function loadMarkdownFileDirect(fileName) {
    const contentDiv = document.getElementById('markdown-content');
    const loadingElement = document.getElementById('loading-content');
    
    // Show loading indicator
    contentDiv.style.display = 'none';
    loadingElement.style.display = 'block';
    
    // Properly encode the file name to handle special characters
    const encodedFileName = encodeURIComponent(fileName);
    
    console.log('Using direct markdown loader for:', fileName);
    
    // Fetch the markdown file
    fetch(encodedFileName)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(text => {
            // Validate that we got text and not something else
            if (typeof text !== 'string') {
                throw new Error(`Expected text content but got ${typeof text}`);
            }
            if (text.trim() === '') {
                throw new Error('Empty content received');
            }
            
            // Remove emojis from the markdown content
            const cleanedText = removeEmojis(text);
            
            // Use fallback converter directly
            const html = fallbackMarkdownToHtml(cleanedText);
            
            // Store the current file name as a data attribute for PDF generation
            contentDiv.setAttribute('data-current-file', fileName);
            
            // Display the HTML content
            contentDiv.innerHTML = html;
            
            // Generate page-specific table of contents
            generatePageTOC(contentDiv);
            
            // Hide loading indicator and show content
            loadingElement.style.display = 'none';
            contentDiv.style.display = 'block';
            
            // Scroll to top of content
            contentDiv.scrollTop = 0;
        })
        .catch(error => {
            console.error('Error with direct markdown loader:', error);
            contentDiv.innerHTML = `<div class="error">Error loading content: ${error.message}</div>`;
            contentDiv.style.display = 'block';
            loadingElement.style.display = 'none';
        });
}

/**
 * Loads and displays a markdown file
 * @param {string} fileName - The name of the markdown file to load
 */
function loadMarkdownFile(fileName) {
    const contentDiv = document.getElementById('markdown-content');
    const loadingElement = document.getElementById('loading-content');
    
    // Debug mode - set to true for detailed logging
    const DEBUG_MODE = true;
    
    // Show loading indicator
    contentDiv.style.display = 'none';
    loadingElement.style.display = 'block';
    
    // Properly encode the file name to handle special characters
    const encodedFileName = encodeURIComponent(fileName);
    
    if (DEBUG_MODE) {
        console.log('Loading markdown file:', fileName);
        console.log('Encoded filename:', encodedFileName);
    }
    
    // Fetch the markdown file
    fetch(encodedFileName)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}: ${response.status} ${response.statusText}`);
            }
            // Ensure we're getting text content
            const contentType = response.headers.get('content-type');
            if (contentType && !contentType.includes('text/plain') && !contentType.includes('text/markdown')) {
                console.warn('Unexpected content type:', contentType);
            }
            return response.text();
        })
        .then(text => {
            // Validate that we got text and not something else
            if (typeof text !== 'string') {
                throw new Error(`Expected text content but got ${typeof text}`);
            }
            if (text.trim() === '') {
                throw new Error('Empty content received');
            }
            return text;
        })
        .then(markdown => {
            // Remove emojis from the markdown content
            markdown = removeEmojis(markdown);
            
            // Debug: Check if markdown is valid
            console.log('Markdown content type:', typeof markdown);
            console.log('Markdown content preview:', markdown.substring(0, 100));
            console.log('Markdown content length:', markdown.length);
            
            // Check if content contains [object Object] pattern
            if (markdown.includes('[object Object]')) {
                console.error('Markdown content contains [object Object] - this indicates a parsing issue');
                throw new Error('Invalid markdown content detected');
            }
            
            // Configure marked.js renderer to handle IDs properly
            const renderer = new marked.Renderer();
            
            // Override the heading renderer to handle IDs properly
            renderer.heading = function(text, level) {
                // Handle different input types that marked.js might pass
                let headingText = '';
                
                if (typeof text === 'string') {
                    headingText = text;
                } else if (text && typeof text === 'object') {
                    // Handle object input - try to extract text content
                    console.warn('Heading text is an object:', text);
                    
                    // Check for common properties that might contain text
                    if (text.text) {
                        headingText = text.text;
                    } else if (text.content) {
                        headingText = text.content;
                    } else if (text.value) {
                        headingText = text.value;
                    } else {
                        // Convert object to string representation
                        headingText = String(text);
                    }
                } else {
                    // Handle any other type
                    headingText = String(text || '');
                }
                
                // Ensure we have a string
                if (typeof headingText !== 'string') {
                    headingText = String(headingText || '');
                }
                
                // Extract the text without the ID attribute
                const cleanText = headingText.replace(/\s*\{#.*?\}\s*$/, '');
                
                // Generate an ID from the clean text
                const id = cleanText.toLowerCase().replace(/[^\w]+/g, '-');
                
                return `<h${level} id="${id}">${cleanText}</h${level}>`;
            };
            
            // Override list item renderer to handle both * and - bullets
            renderer.listitem = function(text) {
                return `<li>${text}</li>\n`;
            };
            
            // Override code block renderer to handle language properly
            renderer.code = function(code, language) {
                const lang = language ? language.replace(/^-/, '') : '';
                const langClass = lang ? ` class="language-${lang}"` : '';
                const langAttr = lang ? ` data-language="${lang}"` : '';
                return `<pre${langAttr}><code${langClass}>${code}</code></pre>`;
            };
            
            // Override codespan renderer for inline code
            renderer.codespan = function(code) {
                return `<code>${code}</code>`;
            };
            
            // Parse the markdown to HTML using marked.js with custom renderer
            // Ensure markdown is a string and handle any potential parsing issues
            const markdownString = String(markdown || '');
            let html;
            
            try {
                // Configure marked.js options for better compatibility
                const markedOptions = {
                    renderer: renderer,
                    breaks: true,
                    gfm: true,
                    headerIds: true,
                    mangle: false,
                    sanitize: false
                };
                
                // Try to parse with marked.js
                let parsedHtml = marked.parse(markdownString, markedOptions);
                
                // Validate that html is not [object Object] or invalid
                if (parsedHtml === '[object Object]' || typeof parsedHtml !== 'string') {
                    console.error('Marked.js returned invalid HTML:', parsedHtml);
                    throw new Error('Markdown parser returned invalid content');
                }
                
                // Check if the parsed HTML contains [object Object] pattern
                if (parsedHtml.includes('[object Object]')) {
                    console.error('Parsed HTML contains [object Object] pattern');
                    throw new Error('Markdown parsing produced invalid content');
                }
                
                html = parsedHtml;
            } catch (error) {
                console.error('Error parsing markdown with marked.js:', error);
                
                // If marked.js fails completely, switch to direct loader
                if (error.message.includes('Markdown parser returned invalid content') || 
                    error.message.includes('Markdown parsing produced invalid content')) {
                    console.log('Switching to direct markdown loader...');
                    loadMarkdownFileDirect(fileName);
                    return; // Exit this function to prevent double execution
                }
                
                // Use the comprehensive fallback function
                html = fallbackMarkdownToHtml(markdownString);
                
                // If fallback also fails, show error
                if (html.includes('Content conversion failed')) {
                    html = `<div class="error">Unable to display content: ${error.message}</div>`;
                }
            }
            
            // Store the current file name as a data attribute for PDF generation
            contentDiv.setAttribute('data-current-file', fileName);
            
            // Display the HTML content
            console.log('Final HTML content type:', typeof html);
            console.log('Final HTML content preview:', html.substring(0, 200));
            
            // Additional validation before setting innerHTML
            if (html === '[object Object]' || typeof html !== 'string') {
                console.error('Attempting to set [object Object] as HTML content');
                contentDiv.innerHTML = '<div class="error">Critical Error: Invalid content format detected</div>';
            } else {
                contentDiv.innerHTML = html;
            }
            
            // Generate page-specific table of contents
            generatePageTOC(contentDiv);
            
            // Apply syntax highlighting to code blocks
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);
            });
            
            // Hide loading indicator and show content
            loadingElement.style.display = 'none';
            contentDiv.style.display = 'block';
            
            // Scroll to top of content
            contentDiv.scrollTop = 0;
            
            // Update the current file name for PDF generation
            document.getElementById('markdown-content').setAttribute('data-current-file', fileName);
        })
        .catch(error => {
            console.error('Error loading markdown file:', error);
            
            // Comprehensive error handling
            let errorMessage = 'Error loading content: ' + error.message;
            
            // Check if this is the [object Object] error
            if (error.message.includes('[object Object]') || error.message.includes('Invalid content')) {
                errorMessage = 'Content parsing error: The markdown file could not be properly processed. Please check the file format.';
            }
            
            contentDiv.innerHTML = `<div class="error">${errorMessage}</div>`;
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
    contentDiv.style.padding = '10mm';
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
