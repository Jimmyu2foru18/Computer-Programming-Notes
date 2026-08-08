# Database Management Systems II

## Transactions, NoSQL & Distributed Data

Advanced database topics including concurrency, distributed systems, and modern data stores.

### Key Topics
- Transactions, ACID properties, and schedules
- Concurrency control: locking, 2PL, and deadlocks
- Advanced SQL: stored procedures, triggers, and functions
- NoSQL: document stores (MongoDB) and key-value stores (Redis)
- NoSQL: column stores (Cassandra) and graph databases (Neo4j)
- Distributed databases, sharding, and replication
- Query optimization, indexes, and execution plans
- Data warehousing, OLAP, and star/snowflake schemas
- Cloud databases, migration strategies, and multi-cloud
- Database administration: backup, recovery, and monitoring

```sql
-- Example: CTE with recursion
WITH RECURSIVE subordinates AS (
    SELECT employee_id, manager_id, 1 as level
    FROM employees WHERE manager_id IS NULL
    UNION ALL
    SELECT e.employee_id, e.manager_id, s.level + 1
    FROM employees e JOIN subordinates s ON e.manager_id = s.employee_id
)
SELECT * FROM subordinates;
```

## References
- [MongoDB University](https://university.mongodb.com/)
