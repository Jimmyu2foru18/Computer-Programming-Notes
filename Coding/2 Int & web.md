# Internet & Web Technologies II

## Backend, Databases & Security

Full-stack web development requires understanding server-side logic, data persistence, and security.

### Key Topics
- PHP fundamentals: syntax, variables, and control structures
- PHP: sessions, forms, and database integration with PDO
- Node.js runtime, event loop, and npm ecosystem
- Express.js: routing, middleware, and REST APIs
- MySQL integration: connection pooling and ORMs
- MongoDB integration: Mongoose, schemas, and aggregation
- Security: XSS, CSRF, SQL injection, and CSP
- Hosting: AWS EC2, S3, RDS, and XAMPP
- Deployment: CI/CD, Docker, and environment configuration
- Performance optimization: caching, minification, and CDNs
- Modern frameworks: React, Vue, Svelte, and Angular

```javascript
// Example: Express.js middleware
app.use(express.json());
app.get('/api/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});
```

## References
- [Express.js Guide](https://expressjs.com/en/starter/installing.html)
