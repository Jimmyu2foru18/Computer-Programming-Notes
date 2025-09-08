# Coding Notes and Guides
This repository contains comprehensive guides and notes on various programming languages, technologies, and concepts.
## Table of Contents {#table-of-contents}
- Python
- Java
- C#
- Software Engineering
- Database Management Systems
- Internet & Web
- Computer Networks
- OSI Model
- System Design
- Linux
## Local Development {#local-development}
To run this project locally:
1. Clone the repository
2. Navigate to the project directory
3. Start a local server:
```
python -m http.server 8000
```
4. Open your browser and go to `http://localhost:8000`
## Deployment to GitHub Pages {#deployment-to-github-pages}
This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.
### Manual Deployment {#manual-deployment}
1. Push your changes to the main branch:
```
git add.
git commit -m "Your commit message"
git push origin main
```
2. GitHub Actions will automatically build and deploy the site to GitHub Pages.
3. Your site will be available at `https://[your-username].github.io/[repository-name]/`
### Configuration {#configuration}
The deployment is configured in the `.github/workflows/deploy.yml` file. This workflow:
- Triggers on pushes to the main branch
- Builds the site using Jekyll
- Deploys the built site to GitHub Pages
## Contributing {#contributing}
Feel free to contribute by adding new content, fixing errors, or improving existing guides.
## License {#license}
This project is open source and available under the [MIT License](LICENSE).