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
            files: ['1.0 Java.md', '2 Java.md']
        },
        {
            name: 'C#',
            files: ['1.0 C#.md', '2 C#.md']
        },
        {
            name: 'Software Engineering',
            files: ['1.0 Soft Eng.md', '2 Soft Eng.md']
        },
        {
            name: 'Data Structures & Algorithms',
            files: ['1.0 DSA_Guide.md']
        },
        {
            name: 'Test',
            files: ['test_language_labels.md', 'test_headers_tables.md']
        },
        {
            name: 'Database Management Systems',
            files: ['1.0 DBMS.md', '2 DBMS.md']
        },
        {
            name: 'Internet & Web',
            files: ['1.0 Int & web.md', '2 Int & web.md']
        },
        {
            name: 'Computer Networks',
            files: ['1.0 Computer Networks.md', '2 Computer Networks.md']
        },
        {
            name: 'OSI Model',
            files: ['1.0 OSI.md', '2 OSI.md']
        },
        {
            name: 'System Design',
            files: ['1.0 systm.md', '2 systm.md', '3 System.md']
        },
        {
            name: 'Linux',
            files: ['1.0 linux.md', '2 linux.md']
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
 * Alternative PDF generation using a more robust method
 * Creates a proper HTML document for PDF generation
 */
function generatePDFFallback() {
    const contentDiv = document.getElementById('markdown-content');
    
    // Check if content is loaded
    if (!contentDiv || contentDiv.children.length === 0 || contentDiv.querySelector('.welcome-message')) {
        alert('Please load a document before generating a PDF.');
        return;
    }
    
    const currentFile = contentDiv.getAttribute('data-current-file') || 'document';
    const fileName = currentFile.replace(/\.md$/, '.pdf');
    
    console.log('Using fallback PDF generation for:', currentFile);
    
    // Create a proper HTML document for PDF generation
    const pdfContent = document.createElement('div');
    pdfContent.style.cssText = `
        width: 794px;
        min-height: 1123px;
        background: white;
        color: black;
        padding: 50px;
        font-family: Arial, sans-serif;
        font-size: 12pt;
        line-height: 1.6;
        box-sizing: border-box;
    `;
    
    // Clone the content (without TOC)
    const contentClone = contentDiv.cloneNode(true);
    const pageTOC = contentClone.querySelector('.page-toc');
    if (pageTOC) {
        contentClone.removeChild(pageTOC);
    }
    
    // Fix any styling issues
    const allElements = contentClone.querySelectorAll('*');
    allElements.forEach(el => {
        if (el.style) {
            el.style.display = '';
            el.style.visibility = 'visible';
            el.style.opacity = '1';
            el.style.backgroundColor = '';
            el.style.color = '';
        }
    });
    
    pdfContent.innerHTML = contentClone.innerHTML;
    
    // Create a complete HTML document
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>${currentFile}</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    font-size: 12pt;
                    line-height: 1.6;
                    color: #000;
                    background: #fff;
                }
                h1, h2, h3, h4, h5, h6 {
                    color: #000;
                    margin: 20px 0 10px 0;
                    page-break-after: avoid;
                }
                h1 { font-size: 24pt; }
                h2 { font-size: 20pt; }
                h3 { font-size: 16pt; }
                pre, code {
                    background: #f5f5f5;
                    border: 1px solid #ddd;
                    padding: 10px;
                    font-family: 'Courier New', monospace;
                    font-size: 10pt;
                    page-break-inside: avoid;
                }
                pre { margin: 15px 0; }
                code { padding: 2px 4px; }
                a { color: #0066cc; text-decoration: underline; }
                ul, ol { margin: 10px 0; padding-left: 30px; }
                li { margin: 5px 0; }
                p { margin: 10px 0; }
                blockquote {
                    border-left: 4px solid #ddd;
                    margin: 15px 0;
                    padding-left: 20px;
                    color: #555;
                }
                img { max-width: 100%; height: auto; }
                table {
                    border-collapse: collapse;
                    width: 100%;
                    margin: 15px 0;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background: #f5f5f5;
                    font-weight: bold;
                }
                .page-break { page-break-before: always; }
                .no-break { page-break-inside: avoid; }
            </style>
        </head>
        <body>
            ${pdfContent.innerHTML}
        </body>
        </html>
    `;
    
    // Create a blob and download link
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary iframe to render the HTML for PDF generation
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.left = '-9999px';
    iframe.style.top = '-9999px';
    iframe.style.width = '794px';
    iframe.style.height = '1123px';
    
    document.body.appendChild(iframe);
    
    iframe.onload = function() {
        try {
            // Use html2pdf on the iframe content
            html2pdf()
                .set({
                    margin: 20,
                    filename: fileName,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { 
                        scale: 1,
                        width: 794,
                        height: 1123,
                        windowWidth: 794,
                        backgroundColor: '#ffffff'
                    },
                    jsPDF: { 
                        unit: 'px', 
                        format: [794, 1123], 
                        orientation: 'portrait' 
                    }
                })
                .from(iframe.contentDocument.body)
                .save()
                .then(() => {
                    console.log('PDF generated successfully using fallback method');
                    document.body.removeChild(iframe);
                    URL.revokeObjectURL(url);
                })
                .catch(error => {
                    console.error('Error with fallback PDF generation:', error);
                    document.body.removeChild(iframe);
                    URL.revokeObjectURL(url);
                    alert('Error generating PDF: ' + error.message);
                });
        } catch (error) {
            console.error('Error in iframe onload:', error);
            document.body.removeChild(iframe);
            URL.revokeObjectURL(url);
            alert('Error generating PDF: ' + error.message);
        }
    };
    
    iframe.srcdoc = htmlContent;
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

/**
 * Generates a PDF from the current markdown content
 */
function generatePDF() {
    const contentDiv = document.getElementById('markdown-content');
    
    // Check if content is loaded
    if (!contentDiv || contentDiv.children.length === 0 || contentDiv.querySelector('.welcome-message')) {
        alert('Please load a document before generating a PDF.');
        return;
    }
    
    const currentFile = contentDiv.getAttribute('data-current-file') || 'document';
    const fileName = currentFile.replace(/\.md$/, '.pdf');
    
    console.log('Generating PDF for file:', currentFile);
    console.log('Content div innerHTML:', contentDiv.innerHTML);
    
    // Create a clone of the content to avoid modifying the displayed content
    const contentClone = contentDiv.cloneNode(true);
    
    // Remove the page TOC from the clone to avoid duplication in the PDF
    const pageTOC = contentClone.querySelector('.page-toc');
    if (pageTOC) {
        contentClone.removeChild(pageTOC);
    }
    
    // Make sure all content is visible in the clone
    const allElements = contentClone.querySelectorAll('*');
    allElements.forEach(el => {
        if (el.style) {
            el.style.display = '';
            el.style.visibility = 'visible';
            el.style.opacity = '1';
        }
    });
    
    // Ensure the clone itself is visible and has proper styling for PDF
    contentClone.style.display = 'block';
    contentClone.style.visibility = 'visible';
    contentClone.style.opacity = '1';
    contentClone.style.position = 'relative';
    contentClone.style.width = '100%';
    contentClone.style.maxWidth = 'none';
    contentClone.style.margin = '0';
    contentClone.style.padding = '20px';
    contentClone.style.backgroundColor = 'white';
    contentClone.style.color = 'black';
    
    // Add to body temporarily for debugging
    contentClone.style.position = 'absolute';
    contentClone.style.left = '-9999px';
    contentClone.style.top = '-9999px';
    document.body.appendChild(contentClone);
    
    console.log('Content clone appended to body for debugging');
    console.log('Clone dimensions:', contentClone.offsetWidth, 'x', contentClone.offsetHeight);
    
    // Configure PDF options with better settings
    const options = {
        margin: [15, 15, 15, 15],
        filename: fileName,
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: { 
            scale: 1, 
            logging: true, 
            useCORS: true,
            backgroundColor: '#ffffff',
            width: 794, // A4 width in pixels at 96 DPI
            height: 1123, // A4 height in pixels at 96 DPI
            windowWidth: 794
        },
        jsPDF: { 
            unit: 'px', 
            format: [794, 1123], // A4 size in pixels
            orientation: 'portrait',
            compress: true
        }
    };
    
    // Show a loading message
    const savingMessage = document.createElement('div');
    savingMessage.className = 'saving-message';
    savingMessage.textContent = 'Generating PDF...';
    document.body.appendChild(savingMessage);
    
    // Generate the PDF with better error handling
    html2pdf()
        .set(options)
        .from(contentClone)
        .toPdf()
        .get('pdf')
        .then(function (pdf) {
            console.log('PDF object created successfully');
            console.log('PDF has', pdf.internal.getNumberOfPages(), 'pages');
        })
        .save()
        .then(() => {
            console.log('PDF saved successfully');
            // Remove the temporary clone and loading message
            document.body.removeChild(contentClone);
            document.body.removeChild(savingMessage);
        })
        .catch(error => {
            console.error('Error generating PDF:', error);
            console.error('Error stack:', error.stack);
            // Remove the temporary clone and loading message
            document.body.removeChild(contentClone);
            document.body.removeChild(savingMessage);
            
            // Try the fallback method
            console.log('Trying fallback PDF generation method...');
            generatePDFFallback();
        });
}
