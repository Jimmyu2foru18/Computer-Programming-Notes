document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#sidebar a');
    const contentDiv = document.getElementById('content');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const file = link.getAttribute('data-file');
            loadHtml(file);
        });
    });

    async function loadHtml(file) {
        try {
            const response = await fetch('./' + file);
            if (!response.ok) throw new Error('File not found');
            const text = await response.text();
            contentDiv.innerHTML = text; // Directly inject HTML
        } catch (error) {
            contentDiv.innerHTML = `<h2>Error</h2><p>${error.message}</p>`;
        }
    }
});
