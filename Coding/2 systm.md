# System Design II

## Backend, Data & Integration

Backend system design covering APIs, databases, messaging, and service integration.

### Key Topics
- Server paradigms: monolithic, microservices, and serverless
- REST API design: resources, verbs, status codes, and pagination
- GraphQL vs REST: tradeoffs, schemas, and resolvers
- SQL deep dive: indexing, query plans, and normalization tradeoffs
- NoSQL modeling: document, key-value, columnar, and graph patterns
- Database indexing: B-trees, LSM-trees, and covering indexes
- Integration patterns: API gateways, message queues, and event streaming
- Webhooks, callbacks, and asynchronous communication
- Backend concurrency: threads, processes, async/await, and actors
- Backend microservices: service discovery, circuit breakers, and saga

```yaml
# Example: API Gateway configuration
routes:
  - path: /api/users
    service: user-service
    methods: [GET, POST]
  - path: /api/orders
    service: order-service
    methods: [GET, POST]
```

## References
- [Designing Data-Intensive Applications](https://dataintensive.net/)
