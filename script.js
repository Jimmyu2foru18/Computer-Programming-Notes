document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

    // Use event delegation to handle clicks on any link with data-file attribute
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[data-file]');
        if (link) {
            e.preventDefault();
            const file = link.getAttribute('data-file');
            loadHtml(file);
            
            // Scroll to top of content
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    async function loadHtml(file) {
        try {
            // Add a loading state
            contentDiv.innerHTML = '<div class="loading">Loading content...</div>';
            
            const response = await fetch('./' + file);
            if (!response.ok) throw new Error(`File not found: ${file}`);
            const text = await response.text();
            
            // Inject content
            contentDiv.innerHTML = text;
            
            // Re-highlight code blocks if a library like Highlight.js were used
            // (Skipping for now as it's not in the original index.html)
        } catch (error) {
            contentDiv.innerHTML = `<h2>Error</h2><p>${error.message}</p>`;
        }
    }
});
