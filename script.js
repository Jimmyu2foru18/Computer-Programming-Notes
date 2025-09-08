document.addEventListener('DOMContentLoaded', function() {
    // Define the sections and their corresponding files in the specified order
    const sections = [
        {
            name: 'Python',
            files: ['1.0 Python.md', '2 Python.md']
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
 * Loads and displays a markdown file
 * @param {string} fileName - The name of the markdown file to load
 */
function loadMarkdownFile(fileName) {
    const contentDiv = document.getElementById('markdown-content');
    const loadingElement = document.getElementById('loading-content');
    
    // Show loading indicator
    contentDiv.style.display = 'none';
    loadingElement.style.display = 'block';
    
    // Properly encode the file name to handle special characters
    const encodedFileName = encodeURIComponent(fileName);
    
    // Fetch the markdown file
    fetch(encodedFileName)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(markdown => {
            // Remove emojis from the markdown content
            markdown = removeEmojis(markdown);
            
            // Configure marked.js renderer to handle IDs properly
            const renderer = new marked.Renderer();
            
            // Override the heading renderer to hide ID attributes
            renderer.heading = function(text, level) {
                // Make sure text is a string
                if (typeof text !== 'string') {
                    console.warn('Heading text is not a string:', text);
                    text = String(text || '');
                }
                
                // Extract the text without the ID attribute
                const cleanText = text.replace(/\s*\{#.*?\}\s*$/, '');
                
                // Generate an ID from the clean text
                const id = cleanText.toLowerCase().replace(/[^\w]+/g, '-');
                
                return `<h${level} id="${id}">${cleanText}</h${level}>`;
            };
            
            // Parse the markdown to HTML using marked.js with custom renderer
            const html = marked.parse(markdown, { renderer: renderer });
            
            // Store the current file name as a data attribute for PDF generation
            contentDiv.setAttribute('data-current-file', fileName);
            
            // Display the HTML content
            contentDiv.innerHTML = html;
            
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
            contentDiv.innerHTML = `<div class="error">Error loading content: ${error.message}</div>`;
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
        }
    });
    
    // Configure PDF options
    const options = {
        margin: [10, 10, 10, 10],
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, logging: true, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    // Show a loading message
    const savingMessage = document.createElement('div');
    savingMessage.className = 'saving-message';
    savingMessage.textContent = 'Generating PDF...';
    document.body.appendChild(savingMessage);
    
    // Generate the PDF
    html2pdf()
        .set(options)
        .from(contentClone)
        .save()
        .then(() => {
            // Remove the loading message when done
            document.body.removeChild(savingMessage);
        })
        .catch(error => {
            console.error('Error generating PDF:', error);
            document.body.removeChild(savingMessage);
            alert('Error generating PDF: ' + error.message);
        });
}
