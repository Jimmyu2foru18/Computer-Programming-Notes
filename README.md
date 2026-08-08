# Computer Programming Notes

A comprehensive, expert-level technical knowledge base covering computer science, software engineering, and systems administration. Built as a fast, accessible static site for developers who want to move from "making things work" to building scalable, secure, and maintainable systems.

## What's Inside

The repository contains **200+ HTML content pages** across 8 core subject areas, plus standalone expert deep-dive references. Content is delivered via a lightweight single-page application (SPA) that loads pages asynchronously.

### Subject Areas

| Area | Pages | Coverage |
|------|-------|----------|
| **Python I & II** | 20 | Syntax, OOP, async, decorators, metaclasses, profiling |
| **Java I & II** | 20 | JVM, concurrency, collections, generics, NIO |
| **C# I & II** | 20 | .NET internals, LINQ, delegates, async, generics |
| **C++ I & II** | 20 | Memory management, STL, smart pointers, CMake, testing |
| **Data Structures & Algorithms I & II** | 20 | Arrays, trees, graphs, sorting, dynamic programming |
| **Software Engineering I & II** | 20 | SOLID, design patterns, UML, Agile, DevOps, QA |
| **Database Management Systems I & II** | 20 | SQL, NoSQL, normalization, transactions, sharding |
| **Internet & Web Technologies I & II** | 20 | HTML5, CSS3, JavaScript, PHP, Node.js, security |
| **Computer Networks I & II** | 20 | OSI/TCP-IP, routing, DNS, HTTP, VPNs, monitoring |
| **System Design I, II, & III** | 30 | Scalability, microservices, CI/CD, cloud, observability |
| **Linux Administration I & II** | 20 | Kernel, filesystems, networking, scripting, security |
| **OSI Model Deep Dive** | 2 | Comprehensive protocol analysis and case studies |
| **Internet & Web Expert** | 2 | Full-stack architecture and professional toolchain |

**Total: 250+ pages** including chapter content, overviews, and expert references.

## Architecture

### Main Site (`index.html`)
A client-side SPA using vanilla JavaScript:

- **Navigation**: Collapsible sidebar with `<details>` elements for each subject area
- **Dynamic Loading**: `fetch()` retrieves HTML fragments on-demand, preserving SPA behavior
- **Accessibility**: Semantic HTML5 (`<nav>`, `<main>`, `<article>`, `<section>`), ARIA roles, and responsive Flexbox layout
- **Styling**: CSS custom properties for theming, mobile-first media queries

### Coding Notes Viewer (`Coding/`)
A secondary viewer for markdown-based content:

- **Rendering**: `marked.js` for client-side Markdown parsing
- **Syntax Highlighting**: `highlight.js` for code blocks
- **Export**: `html2pdf.js` for PDF generation
- **Table of Contents**: Auto-generated from page headings
- **Processing**: `process_markdown.py` cleans heading IDs and TOC links

## Tech Stack

- **Frontend**: Native HTML5, CSS3 (Flexbox), JavaScript (ES6+)
- **Rendering**: Client-side content injection via Fetch API
- **Markdown**: marked.js, highlight.js, html2pdf.js (Coding/ only)
- **Deployment**: GitHub Pages (static hosting, no build step required)

## Local Development

Serve the site locally using any static HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

For the Coding/ markdown viewer, ensure markdown source files are present in the `Coding/` directory before loading `Coding/index.html`.

## Project Structure

```
Computer-Programming-Notes/
├── index.html              # Main SPA entry point
├── styles.css              # Global styles and theme variables
├── script.js               # Main content loader (fetch + injection)
├── README.md               # This file
├── Coding/                 # Markdown-based viewer
│   ├── index.html          # Viewer entry point
│   ├── script.js           # Markdown loader + PDF export
│   ├── styles.css          # Viewer-specific styles
│   ├── process_markdown.py # Markdown preprocessing script
│   └── *.md                # Markdown source files
├── Python1_1.html ...      # Python chapter content
├── Java1_1.html ...        # Java chapter content
├── ...                     # Subject area content files
└── OSI1.html, Int1.html ... # Standalone expert references
```

## Content Standards

- **Structure**: Each chapter page uses `<article>` > `<section>` with `<h1>` for the page title and `<h2>`/`<h3>` for subsections
- **Depth**: Target 1,000–1,500 words per topic with idiomatic code examples
- **Interactivity**: Simulators use vanilla JS event handlers with scoped output containers
- **Navigation**: Chapter pages include "Next" footer links for sequential learning

## Contributing

Contributions are welcome. To add or update content:

1. **Follow the structure**: Use `<article>` > `<section>` hierarchy
2. **Add navigation links**: Update `index.html` sidebar if adding new chapter pages
3. **Maintain consistency**: Match existing code block styling and interactive simulator patterns
4. **Validate locally**: Serve the site and verify navigation, content loading, and mobile layout
5. **Open a PR**: Describe the technical improvements and subject area covered

## Deployment

This project is configured for GitHub Pages:

1. Push changes to the `main` branch
2. In repository **Settings > Pages**, set source to `main` branch
3. The site publishes automatically to your GitHub Pages URL

No build step or CI/CD pipeline is required—the site is fully static.

## License

Educational content is provided for personal study. External links point to publicly available documentation and tutorials.

---

*Maintained for technical excellence.*
