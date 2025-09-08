# ️ Database Management Systems: Complete Guide {#database-management-systems-complete-guide}
> *"Data is the new oil, but like oil, it's valuable only when refined and properly managed."*
---
## Table of Contents {#table-of-contents}
1. [Introduction](#introduction)
2. [Database Fundamentals](#database-fundamentals)
3. [️ Database Models](#database-models)
4. [Relational Database Design](#relational-database-design)
5. [SQL Mastery](#sql-mastery)
6. [Query Optimization](#query-optimization)
7. [Database Security](#database-security)
8. [Performance Tuning](#performance-tuning)
9. [Transaction Management](#transaction-management)
10. [Distributed Databases](#distributed-databases)
11. [NoSQL Databases](#nosql-databases)
12. [Advanced Topics](#advanced-topics)
13. [Best Practices](#best-practices)
14. [Practice Projects](#practice-projects)
15. [Next Steps](#next-steps)
---
## Introduction {#introduction}
### What is a Database Management System? {#what-is-a-database-management-system?}
A Database Management System (DBMS) is software that provides an interface between users and databases, enabling efficient storage, retrieval, and management of data. It acts as an intermediary between applications and the physical data storage.
### Why Learn DBMS? {#why-learn-dbms?}
- ** Data Organization**: Structure and organize vast amounts of information efficiently
- ** Quick Access**: Retrieve specific data instantly from millions of records
- ** Data Integrity**: Ensure data accuracy, consistency, and security
- ** Scalability**: Handle growing data volumes and user loads
- ** Career Essential**: Critical skill for developers, analysts, and architects
### Key DBMS Functions {#key-dbms-functions}
- **Data Definition**: Create and modify database structures
- **Data Manipulation**: Insert, update, delete, and query data
- **Data Control**: Manage user access and permissions
- **Data Recovery**: Backup and restore capabilities
- **Concurrency Control**: Handle multiple simultaneous users
---
## Database Fundamentals {#database-fundamentals}
### Core Concepts {#core-concepts}
#### 1. **Data vs Information** {#1.-**data-vs-information**}
- **Data**: Raw facts and figures (e.g., "John", "25", "Engineer")
- **Information**: Processed data with meaning (e.g., "John is a 25-year-old Engineer")
#### 2. **Database Components** ️ {#2.-**database-components**-️}
```
Database System Architecture:
┌─────────────────────────────────────┐
│ Users/Applications │
├─────────────────────────────────────┤
│ DBMS │
│ ┌─────────────────────────────────┐│
│ │ Query Processor ││
│ ├─────────────────────────────────┤│
│ │ Transaction Manager ││
│ ├─────────────────────────────────┤│
│ │ Storage Manager ││
│ └─────────────────────────────────┘│
├─────────────────────────────────────┤
│ Physical Storage │
└─────────────────────────────────────┘
```
#### 3. **Database Schema Levels** ️ {#3.-**database-schema-levels**-️}
**Three-Schema Architecture:**
```sql
-- External Schema (User View)
CREATE VIEW employee_summary AS
SELECT emp_id, name, department, salary
FROM employees
WHERE active = 1;
-- Conceptual Schema (Logical View)
CREATE TABLE employees (
emp_id INT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
department VARCHAR(50),
salary DECIMAL(10,2),
hire_date DATE,
active BOOLEAN DEFAULT 1);
-- Internal Schema (Physical View)
-- Indexes, storage allocation, access paths
CREATE INDEX idx_employee_dept ON employees(department);
CREATE INDEX idx_employee_salary ON employees(salary);
```
### Data Models Evolution {#data-models-evolution}
#### 1. **Hierarchical Model** {#1.-**hierarchical-model**}
```
Company
├── Department A
│ ├── Employee 1
│ └── Employee 2
└── Department B
├── Employee 3
└── Employee 4
```
#### 2. **Network Model** ️ {#2.-**network-model**-️}
```
Employee ←→ Project
↕ ↕
Department ←→ Manager
```
#### 3. **Relational Model** {#3.-**relational-model**}
```sql
-- Tables with relationships
Employees: (emp_id, name, dept_id)
Departments: (dept_id, dept_name, manager_id)
Projects: (proj_id, proj_name, budget)
Assignments: (emp_id, proj_id, hours)
```
---
## ️ Database Models {#️-database-models}
### Relational Model Fundamentals {#relational-model-fundamentals}
#### Core Components {#core-components}
**1. Relations (Tables)**
```sql
-- Employee Relation
CREATE TABLE employees (
employee_id INT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(100) UNIQUE,
phone VARCHAR(15),
hire_date DATE NOT NULL,
job_id VARCHAR(10) NOT NULL,
salary DECIMAL(8,2),
commission_pct DECIMAL(2,2),
manager_id INT,
department_id INT,
FOREIGN KEY (manager_id) REFERENCES employees(employee_id),
FOREIGN KEY (department_id) REFERENCES departments(department_id),
FOREIGN KEY (job_id) REFERENCES jobs(job_id));
```
**2. Attributes (Columns)**
- **Domain**: Set of allowable values
- **Atomic**: Indivisible values
- **Null**: Absence of value
**3. Tuples (Rows)**
```sql
-- Sample tuples
INSERT INTO employees VALUES
(100, 'Steven', 'King', 'sking@company.com', '515.123.4567', '2003-06-17', 'AD_PRES', 24000, NULL, NULL, 90),
(101, 'Neena', 'Kochhar', 'nkochhar@company.com', '515.123.4568', '2005-09-21', 'AD_VP', 17000, NULL, 100, 90),
(102, 'Lex', 'De Haan', 'ldehaan@company.com', '515.123.4569', '2001-01-13', 'AD_VP', 17000, NULL, 100, 90);
```
### Relational Algebra Operations {#relational-algebra-operations}
#### Basic Operations {#basic-operations}
**1. Selection (σ)** - Filter rows
```sql
-- σ(salary > 15000)(employees)
SELECT * FROM employees WHERE salary > 15000;
```
**2. Projection (π)** - Select columns
```sql
-- π(first_name, last_name, salary)(employees)
SELECT first_name, last_name, salary FROM employees;
```
**3. Union (∪)** - Combine relations
```sql
-- Current employees ∪ Former employees
SELECT employee_id, first_name, last_name FROM current_employees
UNION
SELECT employee_id, first_name, last_name FROM former_employees;
```
**4. Intersection (∩)** - Common tuples
```sql
-- Employees who are also managers
SELECT employee_id FROM employees
INTERSECT
SELECT DISTINCT manager_id FROM employees WHERE manager_id IS NOT NULL;
```
**5. Difference (-)** - Subtract relations
```sql
-- All employees minus managers
SELECT employee_id FROM employees
EXCEPT
SELECT DISTINCT manager_id FROM employees WHERE manager_id IS NOT NULL;
```
**6. Cartesian Product (×)** - All combinations
```sql
-- employees × departments (usually not desired without JOIN condition)
SELECT * FROM employees, departments;
```
#### Advanced Operations {#advanced-operations}
**1. Join Operations**
```sql
-- Inner Join
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id;
-- Left Outer Join
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.department_id;
-- Right Outer Join
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.department_id;
-- Full Outer Join
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
FULL OUTER JOIN departments d ON e.department_id = d.department_id;
```
**2. Division Operation**
```sql
-- Find employees who work on ALL projects
SELECT e.employee_id, e.first_name, e.last_name
FROM employees e
WHERE NOT EXISTS (
SELECT p.project_id
FROM projects p
WHERE NOT EXISTS (
SELECT 1
FROM assignments a
WHERE a.employee_id = e.employee_id
AND a.project_id = p.project_id));
```
---
## Relational Database Design {#relational-database-design}
### Entity-Relationship (ER) Modeling {#entity-relationship-(er)-modeling}
#### ER Diagram Components {#er-diagram-components}
**1. Entities** - Real-world objects
```sql
-- Strong Entity
CREATE TABLE customers (
customer_id INT PRIMARY KEY,
customer_name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE,
phone VARCHAR(15),
address TEXT);
-- Weak Entity (depends on strong entity)
CREATE TABLE order_items (
order_id INT,
item_number INT,
product_id INT NOT NULL,
quantity INT NOT NULL,
unit_price DECIMAL(10,2) NOT NULL,
PRIMARY KEY (order_id, item_number),
FOREIGN KEY (order_id) REFERENCES orders(order_id),
FOREIGN KEY (product_id) REFERENCES products(product_id));
```
**2. Attributes** - Entity properties
```sql
-- Simple Attributes
first_name VARCHAR(50)
last_name VARCHAR(50)
-- Composite Attribute (address)
street_address VARCHAR(100)
city VARCHAR(50)
state VARCHAR(50)
zip_code VARCHAR(10)
-- Multi-valued Attribute (phone numbers)
CREATE TABLE customer_phones (
customer_id INT,
phone_number VARCHAR(15),
phone_type VARCHAR(20), -- 'home', 'work', 'mobile'
PRIMARY KEY (customer_id, phone_number),
FOREIGN KEY (customer_id) REFERENCES customers(customer_id));
-- Derived Attribute (age from birth_date)
age AS (YEAR(CURDATE()) - YEAR(birth_date))
```
**3. Relationships** - Associations between entities
```sql
-- One-to-One Relationship
CREATE TABLE employee_details (
employee_id INT PRIMARY KEY,
social_security VARCHAR(11) UNIQUE,
emergency_contact VARCHAR(100),
FOREIGN KEY (employee_id) REFERENCES employees(employee_id));
-- One-to-Many Relationship
CREATE TABLE orders (
order_id INT PRIMARY KEY,
customer_id INT NOT NULL,
order_date DATE NOT NULL,
total_amount DECIMAL(10,2),
FOREIGN KEY (customer_id) REFERENCES customers(customer_id));
-- Many-to-Many Relationship
CREATE TABLE student_courses (
student_id INT,
course_id INT,
enrollment_date DATE,
grade CHAR(2),
PRIMARY KEY (student_id, course_id),
FOREIGN KEY (student_id) REFERENCES students(student_id),
FOREIGN KEY (course_id) REFERENCES courses(course_id));
```
### Normalization {#normalization}
#### Database Anomalies {#database-anomalies}
**Unnormalized Table Example:**
```sql
-- Problems: Redundancy, Update/Insert/Delete Anomalies
CREATE TABLE student_courses_bad (
student_id INT,
student_name VARCHAR(100),
student_email VARCHAR(100),
course_id INT,
course_name VARCHAR(100),
instructor_name VARCHAR(100),
grade CHAR(2));
```
#### Normal Forms {#normal-forms}
**1. First Normal Form (1NF)**
- Eliminate repeating groups
- Each cell contains atomic values
```sql
-- Violates 1NF (multi-valued attribute)
CREATE TABLE students_bad (
student_id INT,
name VARCHAR(100),
courses VARCHAR(500) -- 'Math,Physics,Chemistry');
-- 1NF Compliant
CREATE TABLE students (
student_id INT PRIMARY KEY,
name VARCHAR(100));
CREATE TABLE student_courses (
student_id INT,
course_name VARCHAR(100),
PRIMARY KEY (student_id, course_name),
FOREIGN KEY (student_id) REFERENCES students(student_id));
```
**2. Second Normal Form (2NF)**
- Must be in 1NF
- No partial dependencies on composite primary key
```sql
-- Violates 2NF (instructor_name depends only on course_id)
CREATE TABLE enrollments_bad (
student_id INT,
course_id INT,
student_name VARCHAR(100), -- Depends only on student_id
course_name VARCHAR(100), -- Depends only on course_id
instructor_name VARCHAR(100), -- Depends only on course_id
grade CHAR(2),
PRIMARY KEY (student_id, course_id));
-- 2NF Compliant
CREATE TABLE students (
student_id INT PRIMARY KEY,
student_name VARCHAR(100));
CREATE TABLE courses (
course_id INT PRIMARY KEY,
course_name VARCHAR(100),
instructor_name VARCHAR(100));
CREATE TABLE enrollments (
student_id INT,
course_id INT,
grade CHAR(2),
PRIMARY KEY (student_id, course_id),
FOREIGN KEY (student_id) REFERENCES students(student_id),
FOREIGN KEY (course_id) REFERENCES courses(course_id));
```
**3. Third Normal Form (3NF)**
- Must be in 2NF
- No transitive dependencies
```sql
-- Violates 3NF (department_name depends on department_id, not employee_id)
CREATE TABLE employees_bad (
employee_id INT PRIMARY KEY,
employee_name VARCHAR(100),
department_id INT,
department_name VARCHAR(100) -- Transitive dependency);
-- 3NF Compliant
CREATE TABLE departments (
department_id INT PRIMARY KEY,
department_name VARCHAR(100));
CREATE TABLE employees (
employee_id INT PRIMARY KEY,
employee_name VARCHAR(100),
department_id INT,
FOREIGN KEY (department_id) REFERENCES departments(department_id));
```
**4. Boyce-Codd Normal Form (BCNF)**
- Stronger version of 3NF
- Every determinant must be a candidate key
```sql
-- Example: Course-Instructor-Room assignment
-- Constraint: Each instructor teaches in only one room
-- Violates BCNF
CREATE TABLE course_schedule_bad (
course_id VARCHAR(10),
instructor_id INT,
room_number VARCHAR(10),
time_slot VARCHAR(20),
PRIMARY KEY (course_id, instructor_id, time_slot)
-- instructor_id → room_number, but instructor_id is not a candidate key);
-- BCNF Compliant
CREATE TABLE instructors (
instructor_id INT PRIMARY KEY,
room_number VARCHAR(10));
CREATE TABLE course_schedule (
course_id VARCHAR(10),
instructor_id INT,
time_slot VARCHAR(20),
PRIMARY KEY (course_id, time_slot),
FOREIGN KEY (instructor_id) REFERENCES instructors(instructor_id));
```
---
## SQL Mastery {#sql-mastery}
### Data Definition Language (DDL) {#data-definition-language-(ddl)}
#### Creating Database Objects {#creating-database-objects}
**1. Database Creation**
```sql
-- Create database
CREATE DATABASE company_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
USE company_db;
```
**2. Table Creation with Constraints**
```sql
CREATE TABLE employees (
employee_id INT AUTO_INCREMENT,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL,
phone VARCHAR(15),
hire_date DATE NOT NULL,
job_id VARCHAR(10) NOT NULL,
salary DECIMAL(8,2) CHECK (salary > 0),
commission_pct DECIMAL(2,2) CHECK (commission_pct BETWEEN 0 AND 1),
manager_id INT,
department_id INT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
-- Primary Key
PRIMARY KEY (employee_id),
-- Unique Constraints
UNIQUE KEY uk_employee_email (email),
-- Foreign Keys
FOREIGN KEY fk_emp_manager (manager_id) 
REFERENCES employees(employee_id)
ON DELETE SET NULL
ON UPDATE CASCADE,
FOREIGN KEY fk_emp_department (department_id) 
REFERENCES departments(department_id)
ON DELETE SET NULL
ON UPDATE CASCADE,
FOREIGN KEY fk_emp_job (job_id) 
REFERENCES jobs(job_id)
ON DELETE RESTRICT
ON UPDATE CASCADE,
-- Check Constraints
CONSTRAINT chk_email_format CHECK (email LIKE '%@%.%'),
CONSTRAINT chk_hire_date CHECK (hire_date <= CURDATE()));
```
**3. Indexes for Performance**
```sql
-- Single column index
CREATE INDEX idx_employee_last_name ON employees(last_name);
-- Composite index
CREATE INDEX idx_employee_dept_salary ON employees(department_id, salary);
-- Unique index
CREATE UNIQUE INDEX idx_employee_email ON employees(email);
-- Partial index (MySQL 8.0+)
CREATE INDEX idx_active_employees ON employees(department_id) 
WHERE status = 'ACTIVE';
-- Functional index
CREATE INDEX idx_employee_full_name ON employees((CONCAT(first_name, ' ', last_name)));
```
**4. Views for Data Abstraction**
```sql
-- Simple view
CREATE VIEW active_employees AS
SELECT employee_id, first_name, last_name, email, department_id
FROM employees
WHERE status = 'ACTIVE';
-- Complex view with joins
CREATE VIEW employee_details AS
SELECT 
e.employee_id,
CONCAT(e.first_name, ' ', e.last_name) AS full_name,
e.email,
d.department_name,
j.job_title,
e.salary,
CONCAT(m.first_name, ' ', m.last_name) AS manager_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.department_id
LEFT JOIN jobs j ON e.job_id = j.job_id
LEFT JOIN employees m ON e.manager_id = m.employee_id
WHERE e.status = 'ACTIVE';
-- Updatable view
CREATE VIEW department_summary AS
SELECT 
d.department_id,
d.department_name,
COUNT(e.employee_id) AS employee_count,
AVG(e.salary) AS avg_salary,
MAX(e.salary) AS max_salary,
MIN(e.salary) AS min_salary
FROM departments d
LEFT JOIN employees e ON d.department_id = e.department_id
GROUP BY d.department_id, d.department_name;
```
### Data Manipulation Language (DML) {#data-manipulation-language-(dml)}
#### Advanced SELECT Queries {#advanced-select-queries}
**1. Window Functions**
```sql
-- Ranking functions
SELECT 
employee_id,
first_name,
last_name,
salary,
department_id,
ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) as row_num,
RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as rank_num,
DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as dense_rank_num,
PERCENT_RANK() OVER (PARTITION BY department_id ORDER BY salary) as percent_rank
FROM employees;
-- Aggregate window functions
SELECT 
employee_id,
first_name,
salary,
department_id,
AVG(salary) OVER (PARTITION BY department_id) as dept_avg_salary,
SUM(salary) OVER (PARTITION BY department_id) as dept_total_salary,
COUNT(*) OVER (PARTITION BY department_id) as dept_employee_count,
salary - AVG(salary) OVER (PARTITION BY department_id) as salary_diff_from_avg
FROM employees;
-- Lead and Lag functions
SELECT 
employee_id,
hire_date,
salary,
LAG(salary, 1) OVER (ORDER BY hire_date) as prev_hire_salary,
LEAD(salary, 1) OVER (ORDER BY hire_date) as next_hire_salary,
salary - LAG(salary, 1) OVER (ORDER BY hire_date) as salary_increase
FROM employees
ORDER BY hire_date;
```
**2. Common Table Expressions (CTEs)**
```sql
-- Simple CTE
WITH high_earners AS (
SELECT employee_id, first_name, last_name, salary, department_id
FROM employees
WHERE salary > 50000)
SELECT 
he.first_name,
he.last_name,
he.salary,
d.department_name
FROM high_earners he
JOIN departments d ON he.department_id = d.department_id;
-- Recursive CTE (Employee Hierarchy)
WITH RECURSIVE employee_hierarchy AS (
-- Base case: Top-level managers
SELECT 
employee_id,
first_name,
last_name,
manager_id,
1 as level,
CAST(first_name AS CHAR(1000)) as hierarchy_path
FROM employees
WHERE manager_id IS NULL
UNION ALL
-- Recursive case: Subordinates
SELECT 
e.employee_id,
e.first_name,
e.last_name,
e.manager_id,
eh.level + 1,
CONCAT(eh.hierarchy_path, ' -> ', e.first_name)
FROM employees e
JOIN employee_hierarchy eh ON e.manager_id = eh.employee_id)
SELECT 
employee_id,
CONCAT(REPEAT(' ', level - 1), first_name, ' ', last_name) as employee_hierarchy,
level,
hierarchy_path
FROM employee_hierarchy
ORDER BY hierarchy_path;
```
**3. Advanced Joins and Subqueries**
```sql
-- Self Join (Employee and Manager)
SELECT 
e.first_name + ' ' + e.last_name as employee_name,
m.first_name + ' ' + m.last_name as manager_name
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;
-- Correlated Subquery
SELECT 
e1.employee_id,
e1.first_name,
e1.last_name,
e1.salary
FROM employees e1
WHERE e1.salary > (
SELECT AVG(e2.salary)
FROM employees e2
WHERE e2.department_id = e1.department_id);
-- EXISTS vs IN
-- Find employees who have dependents
SELECT e.employee_id, e.first_name, e.last_name
FROM employees e
WHERE EXISTS (
SELECT 1
FROM dependents d
WHERE d.employee_id = e.employee_id);
-- Find employees in specific departments
SELECT employee_id, first_name, last_name
FROM employees
WHERE department_id IN (
SELECT department_id
FROM departments
WHERE department_name IN ('IT', 'Sales', 'Marketing'));
```
#### Data Modification Operations {#data-modification-operations}
**1. INSERT Statements**
```sql
-- Single row insert
INSERT INTO employees (
first_name, last_name, email, phone, hire_date, job_id, salary, department_id) VALUES (
'John', 'Doe', 'john.doe@company.com', '555-1234', '2024-01-15', 'IT_PROG', 65000, 60);
-- Multiple row insert
INSERT INTO employees (first_name, last_name, email, hire_date, job_id, salary, department_id)
VALUES 
('Jane', 'Smith', 'jane.smith@company.com', '2024-01-16', 'IT_PROG', 68000, 60),
('Bob', 'Johnson', 'bob.johnson@company.com', '2024-01-17', 'SA_REP', 55000, 80),
('Alice', 'Brown', 'alice.brown@company.com', '2024-01-18', 'MK_MAN', 72000, 20);
-- Insert from SELECT
INSERT INTO employee_archive (employee_id, first_name, last_name, archive_date)
SELECT employee_id, first_name, last_name, CURDATE()
FROM employees
WHERE status = 'TERMINATED';
-- INSERT with ON DUPLICATE KEY UPDATE (MySQL)
INSERT INTO employees (employee_id, first_name, last_name, email, salary)
VALUES (100, 'Steven', 'King', 'sking@company.com', 25000)
ON DUPLICATE KEY UPDATE
salary = VALUES(salary),
updated_at = CURRENT_TIMESTAMP;
```
**2. UPDATE Statements**
```sql
-- Simple update
UPDATE employees
SET salary = salary * 1.05
WHERE department_id = 60;
-- Update with JOIN
UPDATE employees e
JOIN departments d ON e.department_id = d.department_id
SET e.salary = e.salary * 1.10
WHERE d.department_name = 'IT';
-- Conditional update with CASE
UPDATE employees
SET salary = CASE
WHEN job_id = 'IT_PROG' THEN salary * 1.08
WHEN job_id = 'SA_REP' THEN salary * 1.06
WHEN job_id = 'MK_MAN' THEN salary * 1.10
ELSE salary * 1.03
END
WHERE hire_date < '2020-01-01';
-- Update with subquery
UPDATE employees
SET salary = (
SELECT AVG(salary) * 1.1
FROM (
SELECT salary
FROM employees e2
WHERE e2.department_id = employees.department_id
AND e2.employee_id!= employees.employee_id) as dept_avg)
WHERE job_id = 'MK_MAN';
```
**3. DELETE Statements**
```sql
-- Simple delete
DELETE FROM employees
WHERE status = 'TERMINATED'
AND termination_date < DATE_SUB(CURDATE(), INTERVAL 7 YEAR);
-- Delete with JOIN
DELETE e
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE d.department_name = 'Temp Department';
-- Delete with subquery
DELETE FROM employees
WHERE employee_id IN (
SELECT employee_id
FROM (
SELECT employee_id
FROM employees
WHERE hire_date < '2000-01-01'
AND status = 'INACTIVE') as old_employees);
```
---
## Query Optimization {#query-optimization}
### Understanding Query Execution {#understanding-query-execution}
#### Query Processing Steps {#query-processing-steps}
```sql
-- Example query to analyze
SELECT 
e.first_name,
e.last_name,
d.department_name,
e.salary
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > 50000
AND d.location_id = 1700
ORDER BY e.salary DESC
LIMIT 10;
```
**Processing Steps:**
1. **Parsing**: Check syntax and semantics
2. **Optimization**: Generate execution plan
3. **Execution**: Execute the plan
4. **Result**: Return data to client
#### Execution Plans {#execution-plans}
**1. EXPLAIN Statement**
```sql
-- Basic EXPLAIN
EXPLAIN
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > 50000;
-- EXPLAIN ANALYZE (PostgreSQL)
EXPLAIN ANALYZE
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > 50000;
-- EXPLAIN FORMAT=JSON (MySQL)
EXPLAIN FORMAT=JSON
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > 50000;
```
### Index Optimization {#index-optimization}
#### Index Types and Usage {#index-types-and-usage}
**1. B-Tree Indexes (Default)**
```sql
-- Single column index
CREATE INDEX idx_employee_salary ON employees(salary);
-- Composite index (order matters!)
CREATE INDEX idx_emp_dept_salary ON employees(department_id, salary);
-- Covering index (includes all needed columns)
CREATE INDEX idx_emp_covering ON employees(department_id, salary) 
INCLUDE (first_name, last_name);
```
**2. Hash Indexes**
```sql
-- Hash index for equality searches only
CREATE INDEX idx_employee_id_hash ON employees USING HASH(employee_id);
```
**3. Partial Indexes**
```sql
-- Index only active employees
CREATE INDEX idx_active_employees ON employees(department_id, salary)
WHERE status = 'ACTIVE';
-- Index only high earners
CREATE INDEX idx_high_earners ON employees(hire_date)
WHERE salary > 75000;
```
**4. Functional Indexes**
```sql
-- Index on expression
CREATE INDEX idx_employee_upper_email ON employees(UPPER(email));
-- Index on calculated field
CREATE INDEX idx_employee_annual_salary ON employees((salary * 12));
```
#### Index Usage Guidelines {#index-usage-guidelines}
**Good Index Usage:**
```sql
-- Uses index on salary
SELECT * FROM employees WHERE salary = 50000;
SELECT * FROM employees WHERE salary > 50000;
SELECT * FROM employees WHERE salary BETWEEN 40000 AND 60000;
-- Uses composite index (department_id, salary)
SELECT * FROM employees WHERE department_id = 60 AND salary > 50000;
SELECT * FROM employees WHERE department_id = 60; -- Uses leftmost prefix
```
**Poor Index Usage:**
```sql
-- Cannot use index on salary (function applied)
SELECT * FROM employees WHERE salary * 12 > 600000;
-- Cannot use composite index efficiently
SELECT * FROM employees WHERE salary > 50000; -- Missing department_id
-- Leading wildcard prevents index usage
SELECT * FROM employees WHERE last_name LIKE '%son';
```
### Query Optimization Techniques {#query-optimization-techniques}
#### 1. **WHERE Clause Optimization** {#1.-**where-clause-optimization**}
```sql
-- Poor: Function in WHERE clause
SELECT * FROM employees WHERE YEAR(hire_date) = 2023;
-- Good: Range condition
SELECT * FROM employees 
WHERE hire_date >= '2023-01-01' AND hire_date < '2024-01-01';
-- Poor: OR conditions
SELECT * FROM employees WHERE department_id = 10 OR department_id = 20;
-- Good: IN clause
SELECT * FROM employees WHERE department_id IN (10, 20);
-- Poor: NOT IN with NULLs
SELECT * FROM employees WHERE department_id NOT IN (SELECT department_id FROM temp_depts);
-- Good: NOT EXISTS
SELECT * FROM employees e
WHERE NOT EXISTS (
SELECT 1 FROM temp_depts t WHERE t.department_id = e.department_id);
```
#### 2. **JOIN Optimization** {#2.-**join-optimization**}
```sql
-- Poor: Cartesian product then filter
SELECT e.first_name, d.department_name
FROM employees e, departments d
WHERE e.department_id = d.department_id
AND e.salary > 50000;
-- Good: Proper JOIN with WHERE
SELECT e.first_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > 50000;
-- Better: Filter before JOIN
SELECT e.first_name, d.department_name
FROM (
SELECT employee_id, first_name, department_id
FROM employees
WHERE salary > 50000) e
JOIN departments d ON e.department_id = d.department_id;
```
#### 3. **Subquery Optimization** {#3.-**subquery-optimization**}
```sql
-- Poor: Correlated subquery
SELECT e1.first_name, e1.salary
FROM employees e1
WHERE e1.salary > (
SELECT AVG(e2.salary)
FROM employees e2
WHERE e2.department_id = e1.department_id);
-- Good: Window function
SELECT first_name, salary
FROM (
SELECT 
first_name,
salary,
AVG(salary) OVER (PARTITION BY department_id) as dept_avg
FROM employees) e
WHERE salary > dept_avg;
-- Alternative: JOIN with aggregation
SELECT e.first_name, e.salary
FROM employees e
JOIN (
SELECT department_id, AVG(salary) as avg_salary
FROM employees
GROUP BY department_id) dept_avg ON e.department_id = dept_avg.department_id
WHERE e.salary > dept_avg.avg_salary;
```
---
## Database Security {#database-security}
### Authentication and Authorization {#authentication-and-authorization}
#### User Management {#user-management}
**1. Creating Users and Roles**
```sql
-- Create users
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'SecurePassword123!';
CREATE USER 'read_only_user'@'%' IDENTIFIED BY 'ReadOnlyPass456!';
CREATE USER 'admin_user'@'10.0.0.%' IDENTIFIED BY 'AdminPass789!';
-- Create roles (MySQL 8.0+)
CREATE ROLE 'app_developer', 'data_analyst', 'db_admin';
-- Grant privileges to roles
GRANT SELECT, INSERT, UPDATE, DELETE ON company_db.* TO 'app_developer';
GRANT SELECT ON company_db.* TO 'data_analyst';
GRANT ALL PRIVILEGES ON company_db.* TO 'db_admin';
-- Assign roles to users
GRANT 'app_developer' TO 'app_user'@'localhost';
GRANT 'data_analyst' TO 'read_only_user'@'%';
GRANT 'db_admin' TO 'admin_user'@'10.0.0.%';
-- Set default roles
SET DEFAULT ROLE 'app_developer' TO 'app_user'@'localhost';
```
**2. Granular Permissions**
```sql
-- Table-level permissions
GRANT SELECT, INSERT, UPDATE ON employees TO 'hr_user'@'localhost';
GRANT SELECT ON departments TO 'hr_user'@'localhost';
-- Column-level permissions
GRANT SELECT (employee_id, first_name, last_name, department_id) 
ON employees TO 'public_user'@'%';
-- Procedure permissions
GRANT EXECUTE ON PROCEDURE calculate_bonus TO 'payroll_user'@'localhost';
-- Revoke permissions
REVOKE INSERT, UPDATE ON employees FROM 'temp_user'@'localhost';
-- View current permissions
SHOW GRANTS FOR 'app_user'@'localhost';
SELECT * FROM information_schema.user_privileges WHERE grantee LIKE '%app_user%';
```
### Data Protection {#data-protection}
#### 1. **Encryption** {#1.-**encryption**}
**Column-Level Encryption:**
```sql
-- Create table with encrypted columns
CREATE TABLE customer_sensitive (
customer_id INT PRIMARY KEY,
name VARCHAR(100),
-- Encrypt sensitive data
ssn VARBINARY(255),
credit_card VARBINARY(255),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
-- Insert encrypted data
INSERT INTO customer_sensitive (customer_id, name, ssn, credit_card)
VALUES (
1,
'John Doe',
AES_ENCRYPT('123-45-6789', 'encryption_key_here'),
AES_ENCRYPT('4532-1234-5678-9012', 'encryption_key_here'));
-- Query encrypted data
SELECT 
customer_id,
name,
AES_DECRYPT(ssn, 'encryption_key_here') as decrypted_ssn,
CONCAT('****-****-****-', RIGHT(AES_DECRYPT(credit_card, 'encryption_key_here'), 4)) as masked_card
FROM customer_sensitive;
```
**Transparent Data Encryption (TDE):**
```sql
-- Enable TDE (SQL Server example)
CREATE MASTER KEY ENCRYPTION BY PASSWORD = 'MasterKeyPassword123!';
CREATE CERTIFICATE TDE_Certificate WITH SUBJECT = 'TDE Certificate';
CREATE DATABASE ENCRYPTION KEY
WITH ALGORITHM = AES_256
ENCRYPTION BY SERVER CERTIFICATE TDE_Certificate;
ALTER DATABASE company_db SET ENCRYPTION ON;
```
#### 2. **Data Masking** {#2.-**data-masking**}
**Dynamic Data Masking:**
```sql
-- Create masked columns (SQL Server)
ALTER TABLE employees
ALTER COLUMN ssn ADD MASKED WITH (FUNCTION = 'partial(1,"XXX-XX-",4)');
ALTER TABLE employees
ALTER COLUMN email ADD MASKED WITH (FUNCTION = 'email()');
ALTER TABLE employees
ALTER COLUMN salary ADD MASKED WITH (FUNCTION = 'random(1000, 100000)');
-- Grant unmask permission
GRANT UNMASK TO 'hr_manager'@'localhost';
```
**Static Data Masking:**
```sql
-- Create masked copy for development
CREATE TABLE employees_dev AS
SELECT 
employee_id,
first_name,
last_name,
CONCAT(LEFT(email, 3), '***@company.com') as email,
'XXX-XXX-XXXX' as phone,
hire_date,
job_id,
CASE 
WHEN salary < 50000 THEN ROUND(RAND() * 20000 + 30000, -3)
WHEN salary < 100000 THEN ROUND(RAND() * 30000 + 50000, -3)
ELSE ROUND(RAND() * 50000 + 80000, -3)
END as salary,
department_id
FROM employees;
```
### SQL Injection Prevention {#sql-injection-prevention}
#### 1. **Parameterized Queries** {#1.-**parameterized-queries**}
**Java Example:**
```java
// Vulnerable to SQL injection
String query = "SELECT * FROM employees WHERE last_name = '" + userInput + "'";
Statement stmt = connection.createStatement();
ResultSet rs = stmt.executeQuery(query);
// Safe parameterized query
String query = "SELECT * FROM employees WHERE last_name =?";
PreparedStatement pstmt = connection.prepareStatement(query);
pstmt.setString(1, userInput);
ResultSet rs = pstmt.executeQuery();
```
**Python Example:**
```python
# Vulnerable to SQL injection {#vulnerable-to-sql-injection}
query = f"SELECT * FROM employees WHERE last_name = '{user_input}'"
cursor.execute(query)
# Safe parameterized query {#safe-parameterized-query}
query = "SELECT * FROM employees WHERE last_name = %s"
cursor.execute(query, (user_input,))
```
#### 2. **Stored Procedures** {#2.-**stored-procedures**}
```sql
-- Secure stored procedure
DELIMITER //
CREATE PROCEDURE GetEmployeesByDepartment(
IN dept_name VARCHAR(50))
BEGIN
SELECT e.employee_id, e.first_name, e.last_name, e.salary
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE d.department_name = dept_name;
END //
DELIMITER;
-- Call procedure
CALL GetEmployeesByDepartment('IT');
```
#### 3. **Input Validation** {#3.-**input-validation**}
```sql
-- Validate input in stored procedures
DELIMITER //
CREATE PROCEDURE UpdateEmployeeSalary(
IN emp_id INT,
IN new_salary DECIMAL(8,2))
BEGIN
DECLARE EXIT HANDLER FOR SQLEXCEPTION
BEGIN
ROLLBACK;
RESIGNAL;
END;
START TRANSACTION;
-- Validate inputs
IF emp_id IS NULL OR emp_id <= 0 THEN
SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid employee ID';
END IF;
IF new_salary IS NULL OR new_salary < 0 THEN
SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid salary amount';
END IF;
-- Check if employee exists
IF NOT EXISTS (SELECT 1 FROM employees WHERE employee_id = emp_id) THEN
SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Employee not found';
END IF;
-- Update salary
UPDATE employees 
SET salary = new_salary, updated_at = CURRENT_TIMESTAMP
WHERE employee_id = emp_id;
COMMIT;
END //
DELIMITER;
```
---
## Performance Tuning {#performance-tuning}
### Database Monitoring {#database-monitoring}
#### 1. **Performance Metrics** {#1.-**performance-metrics**}
**Key Metrics to Monitor:**
```sql
-- Query performance metrics
SELECT 
query_id,
sql_text,
exec_count,
total_elapsed_time,
avg_elapsed_time,
total_logical_reads,
avg_logical_reads
FROM sys.query_store_query_text qt
JOIN sys.query_store_query q ON qt.query_text_id = q.query_text_id
JOIN sys.query_store_plan p ON q.query_id = p.query_id
JOIN sys.query_store_runtime_stats rs ON p.plan_id = rs.plan_id
ORDER BY avg_elapsed_time DESC;
-- Index usage statistics
SELECT 
i.name as index_name,
s.user_seeks,
s.user_scans,
s.user_lookups,
s.user_updates,
s.last_user_seek,
s.last_user_scan
FROM sys.dm_db_index_usage_stats s
JOIN sys.indexes i ON s.object_id = i.object_id AND s.index_id = i.index_id
WHERE s.database_id = DB_ID('company_db')
ORDER BY s.user_seeks + s.user_scans + s.user_lookups DESC;
-- Wait statistics
SELECT 
wait_type,
waiting_tasks_count,
wait_time_ms,
max_wait_time_ms,
signal_wait_time_ms
FROM sys.dm_os_wait_stats
WHERE wait_time_ms > 0
ORDER BY wait_time_ms DESC;
```
#### 2. **Slow Query Analysis** {#2.-**slow-query-analysis**}
**MySQL Slow Query Log:**
```sql
-- Enable slow query log
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2; -- Log queries taking more than 2 seconds
SET GLOBAL log_queries_not_using_indexes = 'ON';
-- Analyze slow queries
SELECT 
schema_name,
digest_text,
count_star,
avg_timer_wait/1000000000 as avg_time_seconds,
max_timer_wait/1000000000 as max_time_seconds,
sum_rows_examined/count_star as avg_rows_examined
FROM performance_schema.events_statements_summary_by_digest
WHERE avg_timer_wait > 1000000000 -- More than 1 second
ORDER BY avg_timer_wait DESC
LIMIT 10;
```
### Optimization Strategies {#optimization-strategies}
#### 1. **Partitioning** {#1.-**partitioning**}
**Range Partitioning:**
```sql
-- Partition by date range
CREATE TABLE sales_data (
sale_id INT AUTO_INCREMENT,
sale_date DATE NOT NULL,
customer_id INT,
product_id INT,
amount DECIMAL(10,2),
PRIMARY KEY (sale_id, sale_date))
PARTITION BY RANGE (YEAR(sale_date)) (
PARTITION p2020 VALUES LESS THAN (2021),
PARTITION p2021 VALUES LESS THAN (2022),
PARTITION p2022 VALUES LESS THAN (2023),
PARTITION p2023 VALUES LESS THAN (2024),
PARTITION p2024 VALUES LESS THAN (2025),
PARTITION p_future VALUES LESS THAN MAXVALUE);
-- Add new partition
ALTER TABLE sales_data ADD PARTITION (
PARTITION p2025 VALUES LESS THAN (2026));
-- Drop old partition
ALTER TABLE sales_data DROP PARTITION p2020;
```
**Hash Partitioning:**
```sql
-- Partition by hash for even distribution
CREATE TABLE user_sessions (
session_id VARCHAR(64) PRIMARY KEY,
user_id INT NOT NULL,
login_time TIMESTAMP,
logout_time TIMESTAMP,
ip_address VARCHAR(45))
PARTITION BY HASH(user_id)
PARTITIONS 8;
```
#### 2. **Caching Strategies** {#2.-**caching-strategies**}
**Query Result Caching:**
```sql
-- Enable query cache (MySQL)
SET GLOBAL query_cache_type = ON;
SET GLOBAL query_cache_size = 268435456; -- 256MB
-- Use SQL_CACHE hint
SELECT SQL_CACHE employee_id, first_name, last_name
FROM employees
WHERE department_id = 60;
-- Disable cache for specific query
SELECT SQL_NO_CACHE COUNT(*) FROM employees;
```
**Application-Level Caching:**
```java
// Redis caching example
@Service
public class EmployeeService {
@Autowired
private RedisTemplate<String, Object> redisTemplate;
@Autowired
private EmployeeRepository employeeRepository;
public Employee getEmployee(Long employeeId) {
String cacheKey = "employee:" + employeeId;
// Try cache first
Employee cached = (Employee) redisTemplate.opsForValue().get(cacheKey);
if (cached!= null) {
return cached;
}
// Cache miss - query database
Employee employee = employeeRepository.findById(employeeId);
if (employee!= null) {
// Cache for 1 hour
redisTemplate.opsForValue().set(cacheKey, employee, Duration.ofHours(1));
}
return employee;
}
}
```
#### 3. **Connection Pooling** {#3.-**connection-pooling**}
**HikariCP Configuration:**
```java
@Configuration
public class DatabaseConfig {
@Bean
public DataSource dataSource() {
HikariConfig config = new HikariConfig();
// Connection settings
config.setJdbcUrl("jdbc:mysql://localhost:3306/company_db");
config.setUsername("app_user");
config.setPassword("password");
// Pool settings
config.setMaximumPoolSize(20); // Maximum connections
config.setMinimumIdle(5); // Minimum idle connections
config.setConnectionTimeout(30000); // 30 seconds
config.setIdleTimeout(600000); // 10 minutes
config.setMaxLifetime(1800000); // 30 minutes
config.setLeakDetectionThreshold(60000); // 1 minute
// Performance settings
config.addDataSourceProperty("cachePrepStmts", "true");
config.addDataSourceProperty("prepStmtCacheSize", "250");
config.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");
config.addDataSourceProperty("useServerPrepStmts", "true");
return new HikariDataSource(config);
}
}
```
---
## Transaction Management {#transaction-management}
### ACID Properties {#acid-properties}
#### Understanding ACID {#understanding-acid}
**1. Atomicity** - All or nothing
```sql
-- Bank transfer example
START TRANSACTION;
-- Debit from source account
UPDATE accounts 
SET balance = balance - 1000 
WHERE account_id = 'ACC001';
-- Check if sufficient funds
IF (SELECT balance FROM accounts WHERE account_id = 'ACC001') < 0 THEN
ROLLBACK;
SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Insufficient funds';
END IF;
-- Credit to destination account
UPDATE accounts 
SET balance = balance + 1000 
WHERE account_id = 'ACC002';
-- Log transaction
INSERT INTO transaction_log (from_account, to_account, amount, transaction_date)
VALUES ('ACC001', 'ACC002', 1000, NOW());
COMMIT;
```
**2. Consistency** - Database remains in valid state
```sql
-- Ensure referential integrity
CREATE TABLE orders (
order_id INT PRIMARY KEY,
customer_id INT NOT NULL,
order_date DATE NOT NULL,
total_amount DECIMAL(10,2) CHECK (total_amount >= 0),
FOREIGN KEY (customer_id) REFERENCES customers(customer_id));
-- Trigger to maintain consistency
DELIMITER //
CREATE TRIGGER update_order_total
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
UPDATE orders 
SET total_amount = (
SELECT SUM(quantity * unit_price)
FROM order_items
WHERE order_id = NEW.order_id)
WHERE order_id = NEW.order_id;
END //
DELIMITER;
```
**3. Isolation** - Concurrent transactions don't interfere
```sql
-- Set isolation level
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
START TRANSACTION;
-- This transaction won't see uncommitted changes from other transactions
SELECT balance FROM accounts WHERE account_id = 'ACC001';
-- Perform operations...
COMMIT;
```
**4. Durability** - Committed changes persist
```sql
-- Configure for durability
SET GLOBAL innodb_flush_log_at_trx_commit = 1; -- Flush log at each commit
SET GLOBAL sync_binlog = 1; -- Sync binary log
```
### Isolation Levels {#isolation-levels}
#### Concurrency Problems and Solutions {#concurrency-problems-and-solutions}
**1. Read Uncommitted** - Allows dirty reads
```sql
-- Session 1
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 'ACC001';
-- Don't commit yet
-- Session 2 (can see uncommitted change)
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SELECT balance FROM accounts WHERE account_id = 'ACC001'; -- Sees dirty read
```
**2. Read Committed** - Prevents dirty reads
```sql
-- Session 1
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
START TRANSACTION;
SELECT balance FROM accounts WHERE account_id = 'ACC001'; -- Read 1
-- Another session updates and commits
SELECT balance FROM accounts WHERE account_id = 'ACC001'; -- Read 2 (different value)
COMMIT;
```
**3. Repeatable Read** - Prevents dirty and non-repeatable reads
```sql
-- Session 1
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
START TRANSACTION;
SELECT balance FROM accounts WHERE account_id = 'ACC001'; -- Read 1
-- Another session updates and commits
SELECT balance FROM accounts WHERE account_id = 'ACC001'; -- Read 2 (same value)
COMMIT;
```
**4. Serializable** - Prevents all concurrency problems
```sql
-- Highest isolation level
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
START TRANSACTION;
-- All reads and writes are serialized
SELECT COUNT(*) FROM accounts WHERE balance > 1000;
-- Phantom reads prevented
COMMIT;
```
### Locking Mechanisms {#locking-mechanisms}
#### Lock Types {#lock-types}
**1. Shared Locks (S-locks)**
```sql
-- Explicit shared lock
SELECT balance FROM accounts WHERE account_id = 'ACC001' LOCK IN SHARE MODE;
-- Multiple transactions can hold shared locks
-- Session 1
SELECT * FROM employees WHERE department_id = 10 LOCK IN SHARE MODE;
-- Session 2 (can also read)
SELECT * FROM employees WHERE department_id = 10 LOCK IN SHARE MODE;
```
**2. Exclusive Locks (X-locks)**
```sql
-- Explicit exclusive lock
SELECT balance FROM accounts WHERE account_id = 'ACC001' FOR UPDATE;
-- Only one transaction can hold exclusive lock
UPDATE accounts SET balance = balance - 100 WHERE account_id = 'ACC001';
```
**3. Intent Locks**
```sql
-- Intent Shared (IS) - Planning to read some rows
-- Intent Exclusive (IX) - Planning to modify some rows
-- Automatically managed by DBMS
-- Example: This creates IX lock on table, X lock on specific row
UPDATE employees SET salary = 75000 WHERE employee_id = 100;
```
#### Deadlock Detection and Resolution {#deadlock-detection-and-resolution}
**Deadlock Example:**
```sql
-- Session 1
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 'ACC001';
-- Waiting for ACC002...
UPDATE accounts SET balance = balance + 100 WHERE account_id = 'ACC002';
-- Session 2 (simultaneously)
START TRANSACTION;
UPDATE accounts SET balance = balance - 50 WHERE account_id = 'ACC002';
-- Waiting for ACC001...
UPDATE accounts SET balance = balance + 50 WHERE account_id = 'ACC001';
-- DEADLOCK DETECTED!
```
**Deadlock Prevention:**
```sql
-- Consistent lock ordering
-- Always lock accounts in order of account_id
START TRANSACTION;
-- Lock lower ID first
SELECT * FROM accounts WHERE account_id = 'ACC001' FOR UPDATE;
SELECT * FROM accounts WHERE account_id = 'ACC002' FOR UPDATE;
-- Perform updates
COMMIT;
```
---
## Distributed Databases {#distributed-databases}
### Distributed Database Concepts {#distributed-database-concepts}
#### Architecture Types {#architecture-types}
**1. Homogeneous Distributed Databases**
```sql
-- Same DBMS across all sites
-- Example: MySQL cluster with multiple nodes
-- Node 1 (Primary)
CREATE TABLE employees_node1 (
employee_id INT PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
department_id INT) ENGINE=NDB;
-- Node 2 (Replica)
-- Automatic replication of data
```
**2. Heterogeneous Distributed Databases**
```sql
-- Different DBMS across sites
-- Example: Oracle + PostgreSQL + MongoDB
-- Oracle site
CREATE TABLE customers (
customer_id NUMBER PRIMARY KEY,
customer_name VARCHAR2(100));
-- PostgreSQL site
CREATE TABLE orders (
order_id SERIAL PRIMARY KEY,
customer_id INTEGER,
order_date DATE);
```
### Data Distribution Strategies {#data-distribution-strategies}
#### 1. **Horizontal Fragmentation (Sharding)** {#1.-**horizontal-fragmentation-(sharding)**}
```sql
-- Partition data by rows
-- Shard 1: Customers A-M
CREATE TABLE customers_shard1 AS
SELECT * FROM customers 
WHERE customer_name BETWEEN 'A' AND 'M';
-- Shard 2: Customers N-Z
CREATE TABLE customers_shard2 AS
SELECT * FROM customers 
WHERE customer_name BETWEEN 'N' AND 'Z';
-- Application logic for routing
if (customer_name.charAt(0) <= 'M') {
// Route to shard1
} else {
// Route to shard2
}
```
#### 2. **Vertical Fragmentation** {#2.-**vertical-fragmentation**}
```sql
-- Partition data by columns
-- Fragment 1: Basic employee info
CREATE TABLE employee_basic (
employee_id INT PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
department_id INT);
-- Fragment 2: Sensitive employee info
CREATE TABLE employee_sensitive (
employee_id INT PRIMARY KEY,
salary DECIMAL(8,2),
ssn VARCHAR(11),
FOREIGN KEY (employee_id) REFERENCES employee_basic(employee_id));
```
#### 3. **Replication** {#3.-**replication**}
```sql
-- Master-Slave Replication
-- Master (Write operations)
INSERT INTO employees (first_name, last_name, salary) 
VALUES ('John', 'Doe', 65000);
-- Slave (Read operations)
SELECT * FROM employees WHERE department_id = 10;
-- Master-Master Replication
-- Both nodes can handle reads and writes
-- Conflict resolution required
```
### CAP Theorem {#cap-theorem}
#### Understanding CAP {#understanding-cap}
**Consistency (C)**: All nodes see the same data simultaneously
**Availability (A)**: System remains operational
**Partition Tolerance (P)**: System continues despite network failures
```sql
-- CP System (Consistency + Partition Tolerance)
-- Example: Traditional RDBMS with strong consistency
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 'ACC001';
-- Must wait for all replicas to confirm before commit
COMMIT;
-- AP System (Availability + Partition Tolerance)
-- Example: Eventually consistent NoSQL
-- Write succeeds immediately, consistency achieved later
db.accounts.updateOne(
{account_id: 'ACC001'},
{$inc: {balance: -100}}); // Returns immediately
```
### Distributed Query Processing {#distributed-query-processing}
#### Query Optimization in Distributed Systems {#query-optimization-in-distributed-systems}
```sql
-- Original query
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > 50000;
-- Distributed execution plan:
-- 1. Send salary filter to employee sites
-- 2. Send department filter to department site
-- 3. Join results at coordinator site
-- Site 1 (Employees)
SELECT employee_id, first_name, last_name, department_id
FROM employees 
WHERE salary > 50000;
-- Site 2 (Departments)
SELECT department_id, department_name
FROM departments;
-- Coordinator site
-- Perform join on filtered results
```
---
## NoSQL Databases {#nosql-databases}
### NoSQL Database Types {#nosql-database-types}
#### 1. **Document Databases** {#1.-**document-databases**}
**MongoDB Examples:**
```javascript
// Insert document
db.employees.insertOne({
_id: ObjectId(),
firstName: "John",
lastName: "Doe",
email: "john.doe@company.com",
department: {
id: 10,
name: "Engineering",
location: "San Francisco"
},
skills: ["JavaScript", "Python", "MongoDB"],
salary: 75000,
hireDate: new Date("2023-01-15"),
address: {
street: "123 Main St",
city: "San Francisco",
state: "CA",
zipCode: "94105"
}
});
// Query documents
db.employees.find({
"department.name": "Engineering",
salary: { $gte: 70000 }
});
// Update document
db.employees.updateOne(
{ _id: ObjectId("...") },
{ 
$set: { salary: 80000 },
$push: { skills: "React" }
});
// Aggregation pipeline
db.employees.aggregate([
{ $match: { "department.name": "Engineering" } },
{ $group: {
_id: "$department.name",
avgSalary: { $avg: "$salary" },
count: { $sum: 1 }
}}
]);
```
#### 2. **Key-Value Stores** {#2.-**key-value-stores**}
**Redis Examples:**
```redis
# String operations {#string-operations}
SET employee:100:name "John Doe"
GET employee:100:name
SETEX session:abc123 3600 "user_data" # Expire in 1 hour
# Hash operations {#hash-operations}
HSET employee:100 firstName "John" lastName "Doe" salary 75000
HGET employee:100 firstName
HGETALL employee:100
# List operations {#list-operations}
LPUSH employee:100:skills "JavaScript"
LPUSH employee:100:skills "Python"
LRANGE employee:100:skills 0 -1
# Set operations {#set-operations}
SADD department:10:employees 100 101 102
SMEMBERS department:10:employees
SINTER department:10:employees department:20:employees
# Sorted set operations {#sorted-set-operations}
ZADD employee_salaries 75000 "employee:100"
ZADD employee_salaries 80000 "employee:101"
ZRANGE employee_salaries 0 -1 WITHSCORES
ZRANGEBYSCORE employee_salaries 70000 90000
```
#### 3. **Column-Family Stores** {#3.-**column-family-stores**}
**Cassandra Examples:**
```cql
-- Create keyspace
CREATE KEYSPACE company
WITH REPLICATION = {
'class': 'SimpleStrategy',
'replication_factor': 3
};
USE company;
-- Create column family
CREATE TABLE employees (
department_id int,
employee_id int,
first_name text,
last_name text,
email text,
salary decimal,
hire_date timestamp,
PRIMARY KEY (department_id, employee_id)) WITH CLUSTERING ORDER BY (employee_id ASC);
-- Insert data
INSERT INTO employees (department_id, employee_id, first_name, last_name, email, salary, hire_date)
VALUES (10, 100, 'John', 'Doe', 'john.doe@company.com', 75000, '2023-01-15');
-- Query data
SELECT * FROM employees WHERE department_id = 10;
SELECT * FROM employees WHERE department_id = 10 AND employee_id > 100;
-- Time series data example
CREATE TABLE employee_activity (
employee_id int,
activity_date date,
activity_time timestamp,
activity_type text,
details text,
PRIMARY KEY (employee_id, activity_date, activity_time)) WITH CLUSTERING ORDER BY (activity_date DESC, activity_time DESC);
```
#### 4. **Graph Databases** {#4.-**graph-databases**}
**Neo4j Examples:**
```cypher
// Create nodes
CREATE (john:Employee {id: 100, firstName: 'John', lastName: 'Doe', email: 'john.doe@company.com'})
CREATE (jane:Employee {id: 101, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@company.com'})
CREATE (engineering:Department {id: 10, name: 'Engineering'})
CREATE (project1:Project {id: 1, name: 'Web Application', budget: 100000})
// Create relationships
CREATE (john)-[:WORKS_IN]->(engineering)
CREATE (jane)-[:WORKS_IN]->(engineering)
CREATE (jane)-[:MANAGES]->(john)
CREATE (john)-[:ASSIGNED_TO {role: 'Developer', startDate: '2023-01-15'}]->(project1)
CREATE (jane)-[:ASSIGNED_TO {role: 'Project Manager', startDate: '2023-01-10'}]->(project1)
// Query relationships
// Find all employees in Engineering department
MATCH (e:Employee)-[:WORKS_IN]->(d:Department {name: 'Engineering'})
RETURN e.firstName, e.lastName;
// Find project team members
MATCH (e:Employee)-[:ASSIGNED_TO]->(p:Project {name: 'Web Application'})
RETURN e.firstName, e.lastName, p.name;
// Find management hierarchy
MATCH (manager:Employee)-[:MANAGES*1..3]->(subordinate:Employee)
RETURN manager.firstName + ' ' + manager.lastName as Manager,
subordinate.firstName + ' ' + subordinate.lastName as Subordinate;
// Shortest path between employees
MATCH path = shortestPath((emp1:Employee {id: 100})-[*]-(emp2:Employee {id: 105}))
RETURN path;
```
### NoSQL vs SQL Comparison {#nosql-vs-sql-comparison}
| Feature | SQL Databases | NoSQL Databases |
|---------|---------------|------------------|
| **Schema** | Fixed schema | Flexible/Dynamic schema |
| **ACID** | Full ACID compliance | Eventual consistency (BASE) |
| **Scalability** | Vertical scaling | Horizontal scaling |
| **Query Language** | SQL (standardized) | Varies by database |
| **Relationships** | Complex joins | Denormalized data |
| **Use Cases** | Complex transactions | Big data, real-time web apps |
| **Data Structure** | Tables with rows/columns | Documents, key-value, graphs |
---
## Advanced Topics {#advanced-topics}
### Data Warehousing {#data-warehousing}
#### Star Schema Design {#star-schema-design}
```sql
-- Fact table (center of star)
CREATE TABLE sales_fact (
sale_id INT PRIMARY KEY,
date_key INT,
product_key INT,
customer_key INT,
store_key INT,
quantity INT,
unit_price DECIMAL(10,2),
total_amount DECIMAL(10,2),
discount_amount DECIMAL(10,2),
FOREIGN KEY (date_key) REFERENCES date_dimension(date_key),
FOREIGN KEY (product_key) REFERENCES product_dimension(product_key),
FOREIGN KEY (customer_key) REFERENCES customer_dimension(customer_key),
FOREIGN KEY (store_key) REFERENCES store_dimension(store_key));
-- Dimension tables (points of star)
CREATE TABLE date_dimension (
date_key INT PRIMARY KEY,
full_date DATE,
day_of_week VARCHAR(10),
day_of_month INT,
month_name VARCHAR(10),
month_number INT,
quarter INT,
year INT,
is_weekend BOOLEAN,
is_holiday BOOLEAN);
CREATE TABLE product_dimension (
product_key INT PRIMARY KEY,
product_id VARCHAR(20),
product_name VARCHAR(100),
category VARCHAR(50),
subcategory VARCHAR(50),
brand VARCHAR(50),
unit_cost DECIMAL(10,2),
unit_price DECIMAL(10,2));
CREATE TABLE customer_dimension (
customer_key INT PRIMARY KEY,
customer_id VARCHAR(20),
customer_name VARCHAR(100),
age_group VARCHAR(20),
gender VARCHAR(10),
city VARCHAR(50),
state VARCHAR(50),
country VARCHAR(50),
customer_segment VARCHAR(30));
```
#### OLAP Operations {#olap-operations}
```sql
-- Roll-up (summarize to higher level)
SELECT 
d.year,
d.quarter,
SUM(f.total_amount) as total_sales
FROM sales_fact f
JOIN date_dimension d ON f.date_key = d.date_key
GROUP BY d.year, d.quarter
ORDER BY d.year, d.quarter;
-- Drill-down (detail to lower level)
SELECT 
d.year,
d.month_name,
p.category,
p.product_name,
SUM(f.total_amount) as total_sales
FROM sales_fact f
JOIN date_dimension d ON f.date_key = d.date_key
JOIN product_dimension p ON f.product_key = p.product_key
WHERE d.year = 2023
GROUP BY d.year, d.month_name, p.category, p.product_name
ORDER BY total_sales DESC;
-- Slice (filter on one dimension)
SELECT 
p.category,
c.customer_segment,
SUM(f.total_amount) as total_sales
FROM sales_fact f
JOIN product_dimension p ON f.product_key = p.product_key
JOIN customer_dimension c ON f.customer_key = c.customer_key
JOIN date_dimension d ON f.date_key = d.date_key
WHERE d.year = 2023 -- Slice by year
GROUP BY p.category, c.customer_segment;
-- Dice (filter on multiple dimensions)
SELECT 
d.month_name,
p.category,
SUM(f.total_amount) as total_sales
FROM sales_fact f
JOIN date_dimension d ON f.date_key = d.date_key
JOIN product_dimension p ON f.product_key = p.product_key
JOIN customer_dimension c ON f.customer_key = c.customer_key
WHERE d.year = 2023 
AND p.category IN ('Electronics', 'Clothing')
AND c.customer_segment = 'Premium'
GROUP BY d.month_name, p.category;
```
### Big Data Technologies {#big-data-technologies}
#### Apache Spark with SQL {#apache-spark-with-sql}
```python
# PySpark example {#pyspark-example}
from pyspark.sql import SparkSession
from pyspark.sql.functions import *
# Create Spark session {#create-spark-session}
spark = SparkSession.builder \.appName("EmployeeAnalysis") \.getOrCreate()
# Read data from various sources {#read-data-from-various-sources}
employees_df = spark.read \.option("header", "true") \.csv("hdfs://employees.csv")
departments_df = spark.read \.format("jdbc") \.option("url", "jdbc:mysql://localhost:3306/company") \.option("dbtable", "departments") \.load()
# Register as temporary views {#register-as-temporary-views}
employees_df.createOrReplaceTempView("employees")
departments_df.createOrReplaceTempView("departments")
# SQL queries on big data {#sql-queries-on-big-data}
result = spark.sql("""
SELECT 
d.department_name,
COUNT(*) as employee_count,
AVG(CAST(e.salary AS DOUBLE)) as avg_salary,
MAX(CAST(e.salary AS DOUBLE)) as max_salary
FROM employees e
JOIN departments d ON e.department_id = d.department_id
GROUP BY d.department_name
ORDER BY avg_salary DESC
""")
# Show results {#show-results}
result.show()
# Write results to different formats {#write-results-to-different-formats}
result.write \.mode("overwrite") \.parquet("hdfs://output/department_analysis")
```
### Machine Learning Integration {#machine-learning-integration}
#### SQL for Data Science {#sql-for-data-science}
```sql
-- Feature engineering for ML
CREATE VIEW employee_features AS
SELECT 
employee_id,
-- Numerical features
salary,
DATEDIFF(CURDATE(), hire_date) as days_employed,
YEAR(CURDATE()) - YEAR(birth_date) as age,
-- Categorical features (one-hot encoding)
CASE WHEN department_id = 10 THEN 1 ELSE 0 END as dept_engineering,
CASE WHEN department_id = 20 THEN 1 ELSE 0 END as dept_marketing,
CASE WHEN department_id = 30 THEN 1 ELSE 0 END as dept_sales,
-- Derived features
salary / (SELECT AVG(salary) FROM employees) as salary_ratio,
-- Target variable
CASE WHEN performance_rating >= 4 THEN 1 ELSE 0 END as high_performer
FROM employees e
WHERE status = 'ACTIVE';
-- Training/test split
CREATE VIEW training_data AS
SELECT * FROM employee_features
WHERE employee_id % 10 < 8; -- 80% for training
CREATE VIEW test_data AS
SELECT * FROM employee_features
WHERE employee_id % 10 >= 8; -- 20% for testing
-- Statistical analysis
SELECT 
department_id,
COUNT(*) as sample_size,
AVG(salary) as mean_salary,
STDDEV(salary) as std_salary,
MIN(salary) as min_salary,
MAX(salary) as max_salary,
PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) as median_salary
FROM employees
GROUP BY department_id;
```
---
## Best Practices {#best-practices}
### Database Design Best Practices {#database-design-best-practices}
#### 1. **Naming Conventions** {#1.-**naming-conventions**}
```sql
-- Good naming conventions
CREATE TABLE employees ( -- Plural table names
employee_id INT, -- Descriptive column names
first_name VARCHAR(50), -- Snake_case for readability
last_name VARCHAR(50),
email_address VARCHAR(100),
hire_date DATE,
department_id INT, -- Foreign key naming
created_at TIMESTAMP, -- Standard audit columns
updated_at TIMESTAMP);
-- Index naming
CREATE INDEX idx_employees_department_id ON employees(department_id);
CREATE INDEX idx_employees_email_address ON employees(email_address);
-- Constraint naming
ALTER TABLE employees 
ADD CONSTRAINT fk_employees_department_id 
FOREIGN KEY (department_id) REFERENCES departments(department_id);
ALTER TABLE employees 
ADD CONSTRAINT uk_employees_email_address 
UNIQUE (email_address);
```
#### 2. **Data Types and Constraints** {#2.-**data-types-and-constraints**}
```sql
-- Appropriate data types and constraints
CREATE TABLE products (
product_id INT AUTO_INCREMENT PRIMARY KEY,
product_code VARCHAR(20) NOT NULL UNIQUE,
product_name VARCHAR(100) NOT NULL,
description TEXT,
price DECIMAL(10,2) NOT NULL CHECK (price > 0),
cost DECIMAL(10,2) NOT NULL CHECK (cost > 0),
quantity_in_stock INT NOT NULL DEFAULT 0 CHECK (quantity_in_stock >= 0),
category_id INT NOT NULL,
is_active BOOLEAN NOT NULL DEFAULT TRUE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (category_id) REFERENCES categories(category_id),
CHECK (price > cost) -- Business rule constraint);
```
#### 3. **Security Best Practices** {#3.-**security-best-practices**}
```sql
-- Principle of least privilege
-- Create specific roles for different access levels
CREATE ROLE 'read_only_analyst';
GRANT SELECT ON company_db.employees TO 'read_only_analyst';
GRANT SELECT ON company_db.departments TO 'read_only_analyst';
CREATE ROLE 'hr_specialist';
GRANT SELECT, INSERT, UPDATE ON company_db.employees TO 'hr_specialist';
GRANT SELECT ON company_db.departments TO 'hr_specialist';
-- Exclude sensitive columns
REVOKE SELECT (salary, ssn) ON company_db.employees FROM 'hr_specialist';
-- Audit trail
CREATE TABLE audit_log (
audit_id INT AUTO_INCREMENT PRIMARY KEY,
table_name VARCHAR(50) NOT NULL,
operation VARCHAR(10) NOT NULL,
old_values JSON,
new_values JSON,
user_name VARCHAR(50) NOT NULL,
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
-- Audit trigger
DELIMITER //
CREATE TRIGGER employees_audit_trigger
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
INSERT INTO audit_log (table_name, operation, old_values, new_values, user_name)
VALUES (
'employees',
'UPDATE',
JSON_OBJECT('employee_id', OLD.employee_id, 'salary', OLD.salary),
JSON_OBJECT('employee_id', NEW.employee_id, 'salary', NEW.salary),
USER());
END //
DELIMITER;
```
### Performance Best Practices {#performance-best-practices}
#### 1. **Query Optimization** {#1.-**query-optimization**}
```sql
-- Efficient queries
-- Use appropriate indexes
CREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);
-- Efficient pagination
SELECT employee_id, first_name, last_name
FROM employees
WHERE employee_id > 1000 -- Use indexed column for pagination
ORDER BY employee_id
LIMIT 20;
-- Avoid SELECT *
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE department_id = 10;
-- Use EXISTS instead of IN for large subqueries
SELECT e.employee_id, e.first_name, e.last_name
FROM employees e
WHERE EXISTS (
SELECT 1 FROM orders o WHERE o.employee_id = e.employee_id);
```
#### 2. **Maintenance Best Practices** {#2.-**maintenance-best-practices**}
```sql
-- Regular maintenance tasks
-- Update table statistics
ANALYZE TABLE employees;
-- Rebuild fragmented indexes
ALTER TABLE employees ENGINE=InnoDB;
-- Monitor slow queries
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 1;
-- Regular backups
-- Full backup weekly
mysqldump --single-transaction --routines --triggers company_db > backup_full.sql
-- Incremental backup daily
mysqldump --single-transaction --where="updated_at >= '2024-01-01'" company_db > backup_incremental.sql
```
---
## Practice Projects {#practice-projects}
### Project 1: E-commerce Database {#project-1:-e-commerce-database}
**Requirements:**
- Customer management
- Product catalog
- Order processing
- Inventory tracking
- Payment processing
```sql
-- Complete e-commerce schema
CREATE DATABASE ecommerce_db;
USE ecommerce_db;
-- Customers
CREATE TABLE customers (
customer_id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(100) NOT NULL UNIQUE,
password_hash VARCHAR(255) NOT NULL,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
phone VARCHAR(15),
date_of_birth DATE,
registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
is_active BOOLEAN DEFAULT TRUE,
INDEX idx_customers_email (email));
-- Customer addresses
CREATE TABLE customer_addresses (
address_id INT AUTO_INCREMENT PRIMARY KEY,
customer_id INT NOT NULL,
address_type ENUM('billing', 'shipping') NOT NULL,
street_address VARCHAR(200) NOT NULL,
city VARCHAR(50) NOT NULL,
state VARCHAR(50) NOT NULL,
postal_code VARCHAR(20) NOT NULL,
country VARCHAR(50) NOT NULL DEFAULT 'USA',
is_default BOOLEAN DEFAULT FALSE,
FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
INDEX idx_addresses_customer (customer_id));
-- Categories
CREATE TABLE categories (
category_id INT AUTO_INCREMENT PRIMARY KEY,
category_name VARCHAR(100) NOT NULL UNIQUE,
parent_category_id INT,
description TEXT,
is_active BOOLEAN DEFAULT TRUE,
FOREIGN KEY (parent_category_id) REFERENCES categories(category_id));
-- Products
CREATE TABLE products (
product_id INT AUTO_INCREMENT PRIMARY KEY,
sku VARCHAR(50) NOT NULL UNIQUE,
product_name VARCHAR(200) NOT NULL,
description TEXT,
category_id INT NOT NULL,
price DECIMAL(10,2) NOT NULL CHECK (price > 0),
cost DECIMAL(10,2) NOT NULL CHECK (cost > 0),
weight DECIMAL(8,2),
dimensions VARCHAR(50),
is_active BOOLEAN DEFAULT TRUE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (category_id) REFERENCES categories(category_id),
INDEX idx_products_category (category_id),
INDEX idx_products_sku (sku),
FULLTEXT idx_products_search (product_name, description));
-- Inventory
CREATE TABLE inventory (
inventory_id INT AUTO_INCREMENT PRIMARY KEY,
product_id INT NOT NULL,
warehouse_location VARCHAR(50) NOT NULL,
quantity_available INT NOT NULL DEFAULT 0,
quantity_reserved INT NOT NULL DEFAULT 0,
reorder_level INT NOT NULL DEFAULT 10,
last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (product_id) REFERENCES products(product_id),
UNIQUE KEY uk_inventory_product_location (product_id, warehouse_location),
INDEX idx_inventory_product (product_id));
-- Orders
CREATE TABLE orders (
order_id INT AUTO_INCREMENT PRIMARY KEY,
customer_id INT NOT NULL,
order_number VARCHAR(50) NOT NULL UNIQUE,
order_status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
shipping_address_id INT NOT NULL,
billing_address_id INT NOT NULL,
subtotal DECIMAL(10,2) NOT NULL,
tax_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
shipping_amount DECIMAL(10,2) NOT NULL DEFAULT 0,
total_amount DECIMAL(10,2) NOT NULL,
FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
FOREIGN KEY (shipping_address_id) REFERENCES customer_addresses(address_id),
FOREIGN KEY (billing_address_id) REFERENCES customer_addresses(address_id),
INDEX idx_orders_customer (customer_id),
INDEX idx_orders_date (order_date),
INDEX idx_orders_status (order_status));
-- Order items
CREATE TABLE order_items (
order_item_id INT AUTO_INCREMENT PRIMARY KEY,
order_id INT NOT NULL,
product_id INT NOT NULL,
quantity INT NOT NULL CHECK (quantity > 0),
unit_price DECIMAL(10,2) NOT NULL,
total_price DECIMAL(10,2) NOT NULL,
FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
FOREIGN KEY (product_id) REFERENCES products(product_id),
INDEX idx_order_items_order (order_id),
INDEX idx_order_items_product (product_id));
-- Sample queries for e-commerce
-- Top selling products
SELECT 
p.product_name,
SUM(oi.quantity) as total_sold,
SUM(oi.total_price) as total_revenue
FROM products p
JOIN order_items oi ON p.product_id = oi.product_id
JOIN orders o ON oi.order_id = o.order_id
WHERE o.order_status IN ('shipped', 'delivered')
AND o.order_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
GROUP BY p.product_id, p.product_name
ORDER BY total_sold DESC
LIMIT 10;
-- Customer lifetime value
SELECT 
c.customer_id,
CONCAT(c.first_name, ' ', c.last_name) as customer_name,
COUNT(DISTINCT o.order_id) as total_orders,
SUM(o.total_amount) as lifetime_value,
AVG(o.total_amount) as avg_order_value,
MAX(o.order_date) as last_order_date
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_status IN ('shipped', 'delivered')
GROUP BY c.customer_id, c.first_name, c.last_name
HAVING lifetime_value > 1000
ORDER BY lifetime_value DESC;
```
### Project 2: Library Management System {#project-2:-library-management-system}
```sql
-- Library management database
CREATE DATABASE library_db;
USE library_db;
-- Authors
CREATE TABLE authors (
author_id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
birth_date DATE,
nationality VARCHAR(50),
biography TEXT,
INDEX idx_authors_name (last_name, first_name));
-- Books
CREATE TABLE books (
book_id INT AUTO_INCREMENT PRIMARY KEY,
isbn VARCHAR(13) UNIQUE,
title VARCHAR(200) NOT NULL,
publication_year YEAR,
genre VARCHAR(50),
language VARCHAR(30) DEFAULT 'English',
pages INT,
publisher VARCHAR(100),
INDEX idx_books_title (title),
INDEX idx_books_isbn (isbn),
FULLTEXT idx_books_search (title));
-- Book authors (many-to-many)
CREATE TABLE book_authors (
book_id INT,
author_id INT,
author_order INT DEFAULT 1,
PRIMARY KEY (book_id, author_id),
FOREIGN KEY (book_id) REFERENCES books(book_id) ON DELETE CASCADE,
FOREIGN KEY (author_id) REFERENCES authors(author_id) ON DELETE CASCADE);
-- Members
CREATE TABLE members (
member_id INT AUTO_INCREMENT PRIMARY KEY,
membership_number VARCHAR(20) NOT NULL UNIQUE,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(100) UNIQUE,
phone VARCHAR(15),
address TEXT,
membership_date DATE NOT NULL,
membership_type ENUM('student', 'faculty', 'public') NOT NULL,
is_active BOOLEAN DEFAULT TRUE,
INDEX idx_members_number (membership_number),
INDEX idx_members_email (email));
-- Book copies
CREATE TABLE book_copies (
copy_id INT AUTO_INCREMENT PRIMARY KEY,
book_id INT NOT NULL,
copy_number VARCHAR(20) NOT NULL,
location VARCHAR(50),
status ENUM('available', 'checked_out', 'reserved', 'damaged', 'lost') DEFAULT 'available',
acquisition_date DATE,
FOREIGN KEY (book_id) REFERENCES books(book_id),
UNIQUE KEY uk_book_copy (book_id, copy_number),
INDEX idx_copies_status (status));
-- Loans
CREATE TABLE loans (
loan_id INT AUTO_INCREMENT PRIMARY KEY,
member_id INT NOT NULL,
copy_id INT NOT NULL,
loan_date DATE NOT NULL,
due_date DATE NOT NULL,
return_date DATE,
fine_amount DECIMAL(8,2) DEFAULT 0,
status ENUM('active', 'returned', 'overdue') DEFAULT 'active',
FOREIGN KEY (member_id) REFERENCES members(member_id),
FOREIGN KEY (copy_id) REFERENCES book_copies(copy_id),
INDEX idx_loans_member (member_id),
INDEX idx_loans_copy (copy_id),
INDEX idx_loans_due_date (due_date));
-- Complex queries for library system
-- Most popular books
SELECT 
b.title,
CONCAT(a.first_name, ' ', a.last_name) as author,
COUNT(l.loan_id) as loan_count
FROM books b
JOIN book_authors ba ON b.book_id = ba.book_id
JOIN authors a ON ba.author_id = a.author_id
JOIN book_copies bc ON b.book_id = bc.book_id
JOIN loans l ON bc.copy_id = l.copy_id
WHERE l.loan_date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
GROUP BY b.book_id, b.title, a.author_id
ORDER BY loan_count DESC
LIMIT 10;
-- Overdue books report
SELECT 
m.membership_number,
CONCAT(m.first_name, ' ', m.last_name) as member_name,
b.title,
l.due_date,
DATEDIFF(CURDATE(), l.due_date) as days_overdue,
GREATEST(0, DATEDIFF(CURDATE(), l.due_date) * 0.50) as fine_amount
FROM loans l
JOIN members m ON l.member_id = m.member_id
JOIN book_copies bc ON l.copy_id = bc.copy_id
JOIN books b ON bc.book_id = b.book_id
WHERE l.status = 'active'
AND l.due_date < CURDATE()
ORDER BY days_overdue DESC;
```
---
## Next Steps {#next-steps}
### Advanced Learning Path {#advanced-learning-path}
#### 1. **Specialized Database Systems** {#1.-**specialized-database-systems**}
- **Time-Series Databases**: InfluxDB, TimescaleDB
- **Search Engines**: Elasticsearch, Solr
- **In-Memory Databases**: Redis, Memcached
- **Blockchain Databases**: BigchainDB
#### 2. **Cloud Database Services** {#2.-**cloud-database-services**}
- **AWS**: RDS, DynamoDB, Redshift, Aurora
- **Google Cloud**: Cloud SQL, Firestore, BigQuery
- **Azure**: SQL Database, Cosmos DB, Synapse
#### 3. **Database Administration** {#3.-**database-administration**}
- Performance monitoring and tuning
- Backup and recovery strategies
- High availability and disaster recovery
- Database migration and upgrades
#### 4. **Data Engineering** {#4.-**data-engineering**}
- ETL/ELT processes
- Data pipelines
- Stream processing
- Data lakes and warehouses
### Certification Paths {#certification-paths}
- **Oracle**: Oracle Certified Professional (OCP)
- **Microsoft**: Azure Database Administrator Associate
- **AWS**: AWS Certified Database - Specialty
- **Google**: Professional Cloud Database Engineer
- **MongoDB**: MongoDB Certified Developer
### Recommended Resources {#recommended-resources}
#### Books {#books}
- "Database System Concepts" by Silberschatz, Galvin, and Gagne
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "High Performance MySQL" by Baron Schwartz
- "MongoDB: The Definitive Guide" by Shannon Bradshaw
#### Online Platforms {#online-platforms}
- **Coursera**: Database courses from top universities
- **edX**: MIT and Harvard database courses
- **Pluralsight**: Comprehensive database training
- **DataCamp**: Hands-on SQL and database practice
#### Practice Platforms {#practice-platforms}
- **LeetCode**: Database problems
- **HackerRank**: SQL challenges
- **SQLBolt**: Interactive SQL tutorial
- **W3Schools**: SQL reference and exercises
---
## Conclusion {#conclusion}
Database Management Systems form the backbone of modern applications and data-driven decision making. This comprehensive guide has covered:
- **Fundamental Concepts**: From basic data models to advanced distributed systems
- **Practical Skills**: SQL mastery, query optimization, and performance tuning
- **Real-World Applications**: E-commerce, library systems, and data warehousing
- **Modern Technologies**: NoSQL databases, big data, and cloud services
- **Best Practices**: Security, performance, and maintainability
The journey from beginner to database expert requires continuous learning and hands-on practice. Start with the fundamentals, build practical projects, and gradually explore advanced topics based on your career goals and interests.
Remember: **Great databases are not just about storing data—they're about enabling insights, supporting decisions, and powering the applications that change the world.**
---
*"In God we trust. All others must bring data."* - W. Edwards Deming