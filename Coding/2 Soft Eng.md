# Software Engineering II

## Architecture, Process & Quality

Advanced software engineering topics including system architecture, development methodologies, and quality assurance.

### Key Topics
- UML: class diagrams, sequence diagrams, and state machines
- UML: activity diagrams, component diagrams, and deployment
- SDLC: Waterfall, Spiral, and V-Model
- Agile methodologies: Scrum, Kanban, and XP
- DevOps culture, CI/CD pipelines, and infrastructure as code
- Socket programming: TCP/UDP sockets, client/server models
- Microservices architecture, service mesh, and API gateways
- Testing pyramid: unit, integration, and E2E tests
- Security: OWASP Top 10, secure coding, and threat modeling
- Professional growth: code review, mentorship, and technical leadership

```yaml
# Example: CI/CD Pipeline
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm test
```

## References
- [Design Patterns - Gang of Four](https://en.wikipedia.org/wiki/Design_Patterns)
