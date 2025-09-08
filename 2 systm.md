# ️ System Design & Implementation: Complete Guide {#system-design-implementation-complete-guide}
*From Fundamentals to Enterprise Architecture*
---
## Table of Contents {#table-of-contents}
1. [Introduction](#introduction)
2. [System Design Fundamentals](#system-design-fundamentals)
3. [Frontend Development](#frontend-development)
4. [Backend Development](#backend-development)
5. [Database Systems](#database-systems)
6. [API Design & Development](#api-design-development)
7. [System Architecture Patterns](#system-architecture-patterns)
8. [Scalability & Performance](#scalability-performance)
9. [Security in System Design](#security-in-system-design)
10. [DevOps & Deployment](#devops-deployment)
11. [Monitoring & Observability](#monitoring-observability)
12. [Cloud Computing](#cloud-computing)
13. [Microservices Architecture](#microservices-architecture)
14. [Real-World Case Studies](#real-world-case-studies)
15. [Best Practices](#best-practices)
16. [Practice Projects](#practice-projects)
17. [Career Path & Certifications](#career-path-certifications)
18. [Resources & Tools](#resources-tools)
---
## Introduction {#introduction}
### What is System Design? {#what-is-system-design?}
System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. It involves making high-level decisions about:
- **Architecture patterns** (monolithic, microservices, serverless)
- **Data storage** (databases, caching, file systems)
- **Communication protocols** (HTTP, gRPC, message queues)
- **Scalability strategies** (horizontal vs vertical scaling)
- **Security measures** (authentication, authorization, encryption)
- **Performance optimization** (caching, CDNs, load balancing)
### Why System Design Matters {#why-system-design-matters}
```mermaid
graph TD
A[Business Requirements] --> B[System Design]
B --> C[Scalable Architecture]
B --> D[Maintainable Code]
B --> E[Cost Efficiency]
B --> F[User Experience]
C --> G[Business Success]
D --> G
E --> G
F --> G
```
### Learning Path Overview {#learning-path-overview}
** Beginner (0-6 months)**
- Basic web technologies (HTML, CSS, JavaScript)
- Simple backend development
- Database fundamentals
- Basic deployment
** Intermediate (6-18 months)**
- Advanced frontend frameworks
- API design and development
- System architecture patterns
- Performance optimization
** Advanced (18+ months)**
- Distributed systems
- Microservices architecture
- Cloud-native development
- Enterprise-scale solutions
---
## ️ System Design Fundamentals {#️-system-design-fundamentals}
### Core Principles {#core-principles}
#### 1. Scalability {#1.-scalability}
```python
# Example: Horizontal vs Vertical Scaling {#example-horizontal-vs-vertical-scaling}
class ScalingStrategy:
def __init__(self, strategy_type):
self.strategy_type = strategy_type
def horizontal_scaling(self, current_servers, load_increase):
"""Add more servers to handle increased load"""
additional_servers = load_increase // 100 # 1 server per 100 users
return current_servers + additional_servers
def vertical_scaling(self, current_cpu, current_ram, load_increase):
"""Increase resources of existing servers"""
cpu_multiplier = 1 + (load_increase / 1000)
ram_multiplier = 1 + (load_increase / 800)
return {
'cpu': current_cpu * cpu_multiplier,
'ram': current_ram * ram_multiplier
}
# Usage example {#usage-example}
scaler = ScalingStrategy('hybrid')
print(f"Servers needed: {scaler.horizontal_scaling(5, 500)}")
print(f"Resources needed: {scaler.vertical_scaling(4, 16, 300)}")
```
#### 2. Reliability {#2.-reliability}
```python
# Circuit Breaker Pattern Implementation {#circuit-breaker-pattern-implementation}
import time
from enum import Enum
class CircuitState(Enum):
CLOSED = "closed"
OPEN = "open"
HALF_OPEN = "half_open"
class CircuitBreaker:
def __init__(self, failure_threshold=5, timeout=60):
self.failure_threshold = failure_threshold
self.timeout = timeout
self.failure_count = 0
self.last_failure_time = None
self.state = CircuitState.CLOSED
def call(self, func, *args, **kwargs):
if self.state == CircuitState.OPEN:
if time.time() - self.last_failure_time > self.timeout:
self.state = CircuitState.HALF_OPEN
else:
raise Exception("Circuit breaker is OPEN")
try:
result = func(*args, **kwargs)
self.on_success()
return result
except Exception as e:
self.on_failure()
raise e
def on_success(self):
self.failure_count = 0
self.state = CircuitState.CLOSED
def on_failure(self):
self.failure_count += 1
self.last_failure_time = time.time()
if self.failure_count >= self.failure_threshold:
self.state = CircuitState.OPEN
```
#### 3. Availability {#3.-availability}
```bash
# High Availability Calculation {#high-availability-calculation}
# Uptime = (Total Time - Downtime) / Total Time * 100 {#uptime-total-time-downtime-total-time-100}
# 99.9% availability = 8.77 hours downtime per year {#999-availability-877-hours-downtime-per-year}
# 99.99% availability = 52.6 minutes downtime per year {#9999-availability-526-minutes-downtime-per-year}
# 99.999% availability = 5.26 minutes downtime per year {#99999-availability-526-minutes-downtime-per-year}
# Load Balancer Configuration (Nginx) {#load-balancer-configuration-nginx}
upstream backend {
server backend1.example.com weight=3;
server backend2.example.com weight=2;
server backend3.example.com backup;
}
server {
listen 80;
location / {
proxy_pass http://backend;
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
health_check;
}
}
```
### System Design Process {#system-design-process}
#### Step 1: Requirements Gathering {#step-1:-requirements-gathering}
```python
# Requirements Analysis Template {#requirements-analysis-template}
class SystemRequirements:
def __init__(self):
self.functional_requirements = []
self.non_functional_requirements = {}
self.constraints = []
def add_functional_requirement(self, requirement):
self.functional_requirements.append(requirement)
def add_non_functional_requirement(self, category, value):
self.non_functional_requirements[category] = value
def add_constraint(self, constraint):
self.constraints.append(constraint)
# Example: E-commerce System Requirements {#example-e-commerce-system-requirements}
ecommerce_req = SystemRequirements()
ecommerce_req.add_functional_requirement("User registration and authentication")
ecommerce_req.add_functional_requirement("Product catalog browsing")
ecommerce_req.add_functional_requirement("Shopping cart management")
ecommerce_req.add_functional_requirement("Order processing and payment")
ecommerce_req.add_non_functional_requirement("concurrent_users", 10000)
ecommerce_req.add_non_functional_requirement("response_time", "< 200ms")
ecommerce_req.add_non_functional_requirement("availability", "99.9%")
ecommerce_req.add_constraint("Budget: $50,000")
ecommerce_req.add_constraint("Timeline: 6 months")
ecommerce_req.add_constraint("Team size: 8 developers")
```
#### Step 2: Capacity Estimation {#step-2:-capacity-estimation}
```python
# Capacity Planning Calculator {#capacity-planning-calculator}
class CapacityPlanner:
def __init__(self):
self.daily_active_users = 0
self.requests_per_user_per_day = 0
self.data_per_request = 0 # in KB
def calculate_qps(self):
"""Calculate Queries Per Second"""
total_requests_per_day = self.daily_active_users * self.requests_per_user_per_day
qps = total_requests_per_day / (24 * 60 * 60)
peak_qps = qps * 3 # Assume 3x peak traffic
return qps, peak_qps
def calculate_storage(self, retention_days=365):
"""Calculate storage requirements"""
daily_data = (self.daily_active_users * 
self.requests_per_user_per_day * 
self.data_per_request) / 1024 # Convert to MB
total_storage = daily_data * retention_days / 1024 # Convert to GB
return daily_data, total_storage
def calculate_bandwidth(self):
"""Calculate bandwidth requirements"""
qps, peak_qps = self.calculate_qps()
avg_bandwidth = qps * self.data_per_request # KB/s
peak_bandwidth = peak_qps * self.data_per_request # KB/s
return avg_bandwidth, peak_bandwidth
# Example calculation {#example-calculation}
planner = CapacityPlanner()
planner.daily_active_users = 100000
planner.requests_per_user_per_day = 50
planner.data_per_request = 2 # 2KB per request
qps, peak_qps = planner.calculate_qps()
daily_data, total_storage = planner.calculate_storage()
avg_bw, peak_bw = planner.calculate_bandwidth()
print(f"QPS: {qps:.2f}, Peak QPS: {peak_qps:.2f}")
print(f"Daily Data: {daily_data:.2f} MB, Total Storage: {total_storage:.2f} GB")
print(f"Avg Bandwidth: {avg_bw:.2f} KB/s, Peak: {peak_bw:.2f} KB/s")
```
---
## Frontend Development {#frontend-development}
### Modern Frontend Architecture {#modern-frontend-architecture}
#### Component-Based Architecture {#component-based-architecture}
```javascript
// React Component Example with Hooks
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { apiService } from '../services/apiService';
const ProductCatalog = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [filters, setFilters] = useState({ category: '', priceRange: '' });
const { user } = useContext(UserContext);
useEffect(() => {
const fetchProducts = async () => {
try {
setLoading(true);
const response = await apiService.getProducts(filters);
setProducts(response.data);
} catch (err) {
setError(err.message);
} finally {
setLoading(false);
}
};
fetchProducts();
}, [filters]);
const handleFilterChange = (newFilters) => {
setFilters(prev => ({...prev,...newFilters }));
};
if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage message={error} />;
return (
<div className="product-catalog">
<FilterPanel 
filters={filters} 
onFilterChange={handleFilterChange} 
/>
<ProductGrid 
products={products} 
user={user}
onAddToCart={handleAddToCart}
/>
</div>);
};
export default ProductCatalog;
```
#### State Management with Redux Toolkit {#state-management-with-redux-toolkit}
```javascript
// Redux Toolkit Store Configuration
import { configureStore, createSlice } from '@reduxjs/toolkit';
// Product Slice
const productSlice = createSlice({
name: 'products',
initialState: {
items: [],
loading: false,
error: null,
filters: {}
},
reducers: {
setLoading: (state, action) => {
state.loading = action.payload;
},
setProducts: (state, action) => {
state.items = action.payload;
state.loading = false;
},
setError: (state, action) => {
state.error = action.payload;
state.loading = false;
},
updateFilters: (state, action) => {
state.filters = {...state.filters,...action.payload };
}
}
});
// Async Thunk for API calls
import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchProducts = createAsyncThunk(
'products/fetchProducts',
async (filters, { rejectWithValue }) => {
try {
const response = await apiService.getProducts(filters);
return response.data;
} catch (error) {
return rejectWithValue(error.message);
}
});
// Store configuration
const store = configureStore({
reducer: {
products: productSlice.reducer,
cart: cartSlice.reducer,
user: userSlice.reducer
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
serializableCheck: {
ignoredActions: ['persist/PERSIST']
}
})
});
export default store;
```
#### Performance Optimization {#performance-optimization}
```javascript
// Code Splitting with React.lazy
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const ProductCatalog = lazy(() => import('./pages/ProductCatalog'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const App = () => {
return (
<Router>
<Suspense fallback={<div>Loading...</div>}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/products" element={<ProductCatalog />} />
<Route path="/profile" element={<UserProfile />} />
<Route path="/admin" element={<AdminDashboard />} />
</Routes>
</Suspense>
</Router>);
};
// Memoization for expensive calculations
import React, { useMemo, useCallback } from 'react';
const ExpensiveComponent = ({ data, onItemClick }) => {
// Memoize expensive calculations
const processedData = useMemo(() => {
return data.map(item => ({...item,
calculatedValue: expensiveCalculation(item)
}));
}, [data]);
// Memoize callback functions
const handleClick = useCallback((id) => {
onItemClick(id);
}, [onItemClick]);
return (
<div>
{processedData.map(item => (
<ItemComponent 
key={item.id} 
item={item} 
onClick={handleClick}
/>))}
</div>);
};
export default React.memo(ExpensiveComponent);
```
### Frontend Build Tools & Optimization {#frontend-build-tools-&-optimization}
#### Webpack Configuration {#webpack-configuration}
```javascript
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = (env, argv) => {
const isProduction = argv.mode === 'production';
return {
entry: './src/index.js',
output: {
path: path.resolve(__dirname, 'dist'),
filename: isProduction? '[name].[contenthash].js': '[name].js',
clean: true
},
module: {
rules: [
{
test: /\.(js|jsx)$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader',
options: {
presets: ['@babel/preset-react', '@babel/preset-env']
}
}
},
{
test: /\.css$/,
use: [
isProduction? MiniCssExtractPlugin.loader: 'style-loader',
'css-loader',
'postcss-loader'
]
},
{
test: /\.(png|svg|jpg|jpeg|gif)$/i,
type: 'asset/resource'
}
]
},
plugins: [
new HtmlWebpackPlugin({
template: './public/index.html'
}),...(isProduction? [
new MiniCssExtractPlugin({
filename: '[name].[contenthash].css'
}),
new BundleAnalyzerPlugin({
analyzerMode: 'static',
openAnalyzer: false
})
]: [])
],
optimization: {
splitChunks: {
chunks: 'all',
cacheGroups: {
vendor: {
test: /[\\\/]node_modules[\\\/]/,
name: 'vendors',
chunks: 'all'
}
}
}
},
devServer: {
contentBase: path.join(__dirname, 'dist'),
compress: true,
port: 3000,
hot: true
}
};
};
```
---
## ️ Backend Development {#️-backend-development}
### Server Architecture Patterns {#server-architecture-patterns}
#### MVC Pattern Implementation {#mvc-pattern-implementation}
```python
# Flask MVC Architecture Example {#flask-mvc-architecture-example}
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
import datetime
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:pass@localhost/ecommerce'
app.config['JWT_SECRET_KEY'] = 'your-secret-key'
db = SQLAlchemy(app)
jwt = JWTManager(app)
# Models {#models}
class User(db.Model):
id = db.Column(db.Integer, primary_key=True)
email = db.Column(db.String(120), unique=True, nullable=False)
password_hash = db.Column(db.String(128))
created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
def set_password(self, password):
self.password_hash = generate_password_hash(password)
def check_password(self, password):
return check_password_hash(self.password_hash, password)
def to_dict(self):
return {
'id': self.id,
'email': self.email,
'created_at': self.created_at.isoformat()
}
class Product(db.Model):
id = db.Column(db.Integer, primary_key=True)
name = db.Column(db.String(100), nullable=False)
description = db.Column(db.Text)
price = db.Column(db.Decimal(10, 2), nullable=False)
stock_quantity = db.Column(db.Integer, default=0)
category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
def to_dict(self):
return {
'id': self.id,
'name': self.name,
'description': self.description,
'price': float(self.price),
'stock_quantity': self.stock_quantity,
'category_id': self.category_id
}
# Controllers {#controllers}
class UserController:
@staticmethod
def register(data):
if User.query.filter_by(email=data['email']).first():
return {'error': 'Email already exists'}, 400
user = User(email=data['email'])
user.set_password(data['password'])
db.session.add(user)
db.session.commit()
access_token = create_access_token(identity=user.id)
return {
'user': user.to_dict(),
'access_token': access_token
}, 201
@staticmethod
def login(data):
user = User.query.filter_by(email=data['email']).first()
if user and user.check_password(data['password']):
access_token = create_access_token(identity=user.id)
return {
'user': user.to_dict(),
'access_token': access_token
}, 200
return {'error': 'Invalid credentials'}, 401
class ProductController:
@staticmethod
def get_products(filters=None):
query = Product.query
if filters:
if 'category_id' in filters:
query = query.filter(Product.category_id == filters['category_id'])
if 'min_price' in filters:
query = query.filter(Product.price >= filters['min_price'])
if 'max_price' in filters:
query = query.filter(Product.price <= filters['max_price'])
products = query.all()
return [product.to_dict() for product in products]
@staticmethod
def create_product(data):
product = Product(
name=data['name'],
description=data.get('description'),
price=data['price'],
stock_quantity=data.get('stock_quantity', 0),
category_id=data.get('category_id'))
db.session.add(product)
db.session.commit()
return product.to_dict(), 201
# Routes (Views) {#routes-views}
@app.route('/api/auth/register', methods=['POST'])
def register():
data = request.get_json()
return UserController.register(data)
@app.route('/api/auth/login', methods=['POST'])
def login():
data = request.get_json()
return UserController.login(data)
@app.route('/api/products', methods=['GET'])
def get_products():
filters = request.args.to_dict()
products = ProductController.get_products(filters)
return jsonify(products)
@app.route('/api/products', methods=['POST'])
@jwt_required()
def create_product():
data = request.get_json()
return ProductController.create_product(data)
if __name__ == '__main__':
with app.app_context():
db.create_all()
app.run(debug=True)
```
#### Repository Pattern {#repository-pattern}
```python
# Repository Pattern Implementation {#repository-pattern-implementation}
from abc import ABC, abstractmethod
from typing import List, Optional
class BaseRepository(ABC):
@abstractmethod
def create(self, entity):
pass
@abstractmethod
def get_by_id(self, id: int):
pass
@abstractmethod
def get_all(self) -> List:
pass
@abstractmethod
def update(self, entity):
pass
@abstractmethod
def delete(self, id: int):
pass
class UserRepository(BaseRepository):
def __init__(self, db_session):
self.db = db_session
def create(self, user_data):
user = User(**user_data)
self.db.add(user)
self.db.commit()
return user
def get_by_id(self, user_id: int) -> Optional[User]:
return self.db.query(User).filter(User.id == user_id).first()
def get_by_email(self, email: str) -> Optional[User]:
return self.db.query(User).filter(User.email == email).first()
def get_all(self) -> List[User]:
return self.db.query(User).all()
def update(self, user: User):
self.db.commit()
return user
def delete(self, user_id: int):
user = self.get_by_id(user_id)
if user:
self.db.delete(user)
self.db.commit()
return user
# Service Layer {#service-layer}
class UserService:
def __init__(self, user_repository: UserRepository):
self.user_repo = user_repository
def register_user(self, email: str, password: str):
# Business logic validation {#business-logic-validation}
if self.user_repo.get_by_email(email):
raise ValueError("Email already exists")
if len(password) < 8:
raise ValueError("Password must be at least 8 characters")
# Create user {#create-user}
user_data = {
'email': email,
'password_hash': generate_password_hash(password)
}
return self.user_repo.create(user_data)
def authenticate_user(self, email: str, password: str):
user = self.user_repo.get_by_email(email)
if user and check_password_hash(user.password_hash, password):
return user
return None
```
### Asynchronous Programming {#asynchronous-programming}
#### FastAPI with Async/Await {#fastapi-with-async/await}
```python
# FastAPI Async Implementation {#fastapi-async-implementation}
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
import asyncio
import aioredis
import asyncpg
from typing import List, Optional
app = FastAPI(title="E-commerce API", version="1.0.0")
security = HTTPBearer()
# Pydantic Models {#pydantic-models}
class ProductCreate(BaseModel):
name: str
description: Optional[str] = None
price: float
stock_quantity: int = 0
category_id: Optional[int] = None
class ProductResponse(BaseModel):
id: int
name: str
description: Optional[str]
price: float
stock_quantity: int
category_id: Optional[int]
# Database connection {#database-connection}
class DatabaseManager:
def __init__(self):
self.pool = None
self.redis = None
async def connect(self):
self.pool = await asyncpg.create_pool(
"postgresql://user:pass@localhost/ecommerce",
min_size=10,
max_size=20)
self.redis = await aioredis.create_redis_pool(
'redis://localhost:6379')
async def disconnect(self):
if self.pool:
await self.pool.close()
if self.redis:
self.redis.close()
await self.redis.wait_closed()
db_manager = DatabaseManager()
# Dependency injection {#dependency-injection}
async def get_db_connection():
async with db_manager.pool.acquire() as connection:
yield connection
# Async repository {#async-repository}
class AsyncProductRepository:
def __init__(self, connection):
self.conn = connection
async def create_product(self, product_data: ProductCreate) -> ProductResponse:
query = """
INSERT INTO products (name, description, price, stock_quantity, category_id)
VALUES ($1, $2, $3, $4, $5)
RETURNING id, name, description, price, stock_quantity, category_id
"""
row = await self.conn.fetchrow(
query,
product_data.name,
product_data.description,
product_data.price,
product_data.stock_quantity,
product_data.category_id)
return ProductResponse(**dict(row))
async def get_products(self, limit: int = 100, offset: int = 0) -> List[ProductResponse]:
# Check cache first {#check-cache-first}
cache_key = f"products:{limit}:{offset}"
cached_result = await db_manager.redis.get(cache_key)
if cached_result:
import json
products_data = json.loads(cached_result)
return [ProductResponse(**product) for product in products_data]
# Query database {#query-database}
query = """
SELECT id, name, description, price, stock_quantity, category_id
FROM products
ORDER BY created_at DESC
LIMIT $1 OFFSET $2
"""
rows = await self.conn.fetch(query, limit, offset)
products = [ProductResponse(**dict(row)) for row in rows]
# Cache result {#cache-result}
products_data = [product.dict() for product in products]
await db_manager.redis.setex(
cache_key, 300, json.dumps(products_data) # Cache for 5 minutes)
return products
async def get_product_by_id(self, product_id: int) -> Optional[ProductResponse]:
query = """
SELECT id, name, description, price, stock_quantity, category_id
FROM products
WHERE id = $1
"""
row = await self.conn.fetchrow(query, product_id)
return ProductResponse(**dict(row)) if row else None
# API Routes {#api-routes}
@app.on_event("startup")
async def startup_event():
await db_manager.connect()
@app.on_event("shutdown")
async def shutdown_event():
await db_manager.disconnect()
@app.post("/api/products", response_model=ProductResponse)
async def create_product(
product_data: ProductCreate,
connection=Depends(get_db_connection)):
repo = AsyncProductRepository(connection)
return await repo.create_product(product_data)
@app.get("/api/products", response_model=List[ProductResponse])
async def get_products(
limit: int = 100,
offset: int = 0,
connection=Depends(get_db_connection)):
repo = AsyncProductRepository(connection)
return await repo.get_products(limit, offset)
@app.get("/api/products/{product_id}", response_model=ProductResponse)
async def get_product(
product_id: int,
connection=Depends(get_db_connection)):
repo = AsyncProductRepository(connection)
product = await repo.get_product_by_id(product_id)
if not product:
raise HTTPException(status_code=404, detail="Product not found")
return product
# Background tasks {#background-tasks}
from fastapi import BackgroundTasks
async def send_email_notification(email: str, subject: str, body: str):
# Simulate email sending {#simulate-email-sending}
await asyncio.sleep(2)
print(f"Email sent to {email}: {subject}")
@app.post("/api/orders")
async def create_order(
order_data: dict,
background_tasks: BackgroundTasks,
connection=Depends(get_db_connection)):
# Create order logic here {#create-order-logic-here}
order_id = 12345 # Simulated order ID
# Send confirmation email in background {#send-confirmation-email-in-background}
background_tasks.add_task(
send_email_notification,
order_data['customer_email'],
"Order Confirmation",
f"Your order #{order_id} has been confirmed.")
return {"order_id": order_id, "status": "confirmed"}
if __name__ == "__main__":
import uvicorn
uvicorn.run(app, host="0.0.0.0", port=8000)
```
---
## ️ Database Systems {#️-database-systems}
### Database Design Principles {#database-design-principles}
#### Entity-Relationship Modeling {#entity-relationship-modeling}
```sql
-- E-commerce Database Schema
-- Users table
CREATE TABLE users (
id SERIAL PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password_hash VARCHAR(255) NOT NULL,
first_name VARCHAR(100),
last_name VARCHAR(100),
phone VARCHAR(20),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
is_active BOOLEAN DEFAULT TRUE);
-- Categories table
CREATE TABLE categories (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
description TEXT,
parent_id INTEGER REFERENCES categories(id),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
-- Products table
CREATE TABLE products (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
description TEXT,
price DECIMAL(10, 2) NOT NULL,
stock_quantity INTEGER DEFAULT 0,
category_id INTEGER REFERENCES categories(id),
sku VARCHAR(100) UNIQUE,
weight DECIMAL(8, 2),
dimensions JSONB,
images JSONB,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
is_active BOOLEAN DEFAULT TRUE);
-- Orders table
CREATE TABLE orders (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id),
status VARCHAR(50) DEFAULT 'pending',
total_amount DECIMAL(10, 2) NOT NULL,
shipping_address JSONB,
billing_address JSONB,
payment_method VARCHAR(50),
payment_status VARCHAR(50) DEFAULT 'pending',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
-- Order items table
CREATE TABLE order_items (
id SERIAL PRIMARY KEY,
order_id INTEGER REFERENCES orders(id),
product_id INTEGER REFERENCES products(id),
quantity INTEGER NOT NULL,
unit_price DECIMAL(10, 2) NOT NULL,
total_price DECIMAL(10, 2) NOT NULL);
-- Shopping cart table
CREATE TABLE shopping_cart (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id),
product_id INTEGER REFERENCES products(id),
quantity INTEGER NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
UNIQUE(user_id, product_id));
-- Reviews table
CREATE TABLE reviews (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id),
product_id INTEGER REFERENCES products(id),
rating INTEGER CHECK (rating >= 1 AND rating <= 5),
comment TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
UNIQUE(user_id, product_id));
-- Indexes for performance
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_price ON products(price);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_reviews_product ON reviews(product_id);
CREATE INDEX idx_shopping_cart_user ON shopping_cart(user_id);
-- Full-text search index
CREATE INDEX idx_products_search ON products USING GIN(to_tsvector('english', name || ' ' || COALESCE(description, '')));
```
#### Advanced Query Optimization {#advanced-query-optimization}
```sql
-- Complex queries with optimization
-- 1. Product search with filters and pagination
WITH product_search AS (
SELECT 
p.*,
c.name as category_name,
AVG(r.rating) as avg_rating,
COUNT(r.id) as review_count,
ts_rank(to_tsvector('english', p.name || ' ' || COALESCE(p.description, '')), 
plainto_tsquery('english', $1)) as search_rank
FROM products p
LEFT JOIN categories c ON p.category_id = c.id
LEFT JOIN reviews r ON p.id = r.product_id
WHERE 
p.is_active = TRUE
AND ($1 IS NULL OR to_tsvector('english', p.name || ' ' || COALESCE(p.description, '')) @@ plainto_tsquery('english', $1))
AND ($2 IS NULL OR p.category_id = $2)
AND ($3 IS NULL OR p.price >= $3)
AND ($4 IS NULL OR p.price <= $4)
AND p.stock_quantity > 0
GROUP BY p.id, c.name)
SELECT *
FROM product_search
ORDER BY 
CASE WHEN $1 IS NOT NULL THEN search_rank END DESC,
avg_rating DESC NULLS LAST,
created_at DESC
LIMIT $5 OFFSET $6;
-- 2. User order history with aggregations
SELECT 
o.id,
o.created_at,
o.status,
o.total_amount,
COUNT(oi.id) as item_count,
ARRAY_AGG(
JSON_BUILD_OBJECT(
'product_name', p.name,
'quantity', oi.quantity,
'unit_price', oi.unit_price)) as items
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE o.user_id = $1
GROUP BY o.id, o.created_at, o.status, o.total_amount
ORDER BY o.created_at DESC
LIMIT 20;
-- 3. Product recommendations based on purchase history
WITH user_categories AS (
SELECT 
p.category_id,
COUNT(*) as purchase_count
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE o.user_id = $1 AND o.status = 'completed'
GROUP BY p.category_id
ORDER BY purchase_count DESC
LIMIT 3),
recommended_products AS (
SELECT 
p.*,
AVG(r.rating) as avg_rating,
COUNT(r.id) as review_count
FROM products p
JOIN user_categories uc ON p.category_id = uc.category_id
LEFT JOIN reviews r ON p.id = r.product_id
WHERE 
p.is_active = TRUE 
AND p.stock_quantity > 0
AND p.id NOT IN (
SELECT DISTINCT oi.product_id
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
WHERE o.user_id = $1)
GROUP BY p.id, uc.purchase_count
ORDER BY uc.purchase_count DESC, avg_rating DESC NULLS LAST)
SELECT * FROM recommended_products LIMIT 10;
```
### NoSQL Database Design {#nosql-database-design}
#### MongoDB Schema Design {#mongodb-schema-design}
```javascript
// MongoDB Collections for E-commerce
// Users Collection
{
"_id": ObjectId("..."),
"email": "user@example.com",
"passwordHash": "...",
"profile": {
"firstName": "John",
"lastName": "Doe",
"phone": "+1234567890",
"addresses": [
{
"type": "shipping",
"street": "123 Main St",
"city": "New York",
"state": "NY",
"zipCode": "10001",
"country": "USA",
"isDefault": true
}
]
},
"preferences": {
"currency": "USD",
"language": "en",
"notifications": {
"email": true,
"sms": false
}
},
"createdAt": ISODate("..."),
"updatedAt": ISODate("..."),
"isActive": true
}
// Products Collection (Embedded approach)
{
"_id": ObjectId("..."),
"name": "Wireless Headphones",
"description": "High-quality wireless headphones...",
"price": 199.99,
"currency": "USD",
"category": {
"id": "electronics",
"name": "Electronics",
"path": "Electronics > Audio > Headphones"
},
"inventory": {
"sku": "WH-001",
"stockQuantity": 50,
"reservedQuantity": 5,
"availableQuantity": 45
},
"specifications": {
"brand": "TechBrand",
"model": "WH-Pro",
"color": "Black",
"weight": "250g",
"batteryLife": "30 hours",
"connectivity": ["Bluetooth 5.0", "USB-C"]
},
"media": {
"images": [
{
"url": "https://cdn.example.com/products/wh-001-1.jpg",
"alt": "Front view",
"isPrimary": true
}
],
"videos": []
},
"seo": {
"slug": "wireless-headphones-wh-pro",
"metaTitle": "Wireless Headphones - WH-Pro",
"metaDescription": "..."
},
"reviews": {
"averageRating": 4.5,
"totalReviews": 128,
"ratingDistribution": {
"5": 64,
"4": 32,
"3": 16,
"2": 8,
"1": 8
}
},
"tags": ["wireless", "bluetooth", "audio", "headphones"],
"createdAt": ISODate("..."),
"updatedAt": ISODate("..."),
"isActive": true
}
// Orders Collection (Embedded order items)
{
"_id": ObjectId("..."),
"orderNumber": "ORD-2024-001234",
"userId": ObjectId("..."),
"customer": {
"email": "user@example.com",
"firstName": "John",
"lastName": "Doe"
},
"items": [
{
"productId": ObjectId("..."),
"productName": "Wireless Headphones",
"sku": "WH-001",
"quantity": 2,
"unitPrice": 199.99,
"totalPrice": 399.98,
"productSnapshot": {
"name": "Wireless Headphones",
"image": "https://cdn.example.com/products/wh-001-1.jpg",
"specifications": {
"color": "Black",
"model": "WH-Pro"
}
}
}
],
"pricing": {
"subtotal": 399.98,
"tax": 32.00,
"shipping": 9.99,
"discount": 0,
"total": 441.97
},
"addresses": {
"shipping": {
"firstName": "John",
"lastName": "Doe",
"street": "123 Main St",
"city": "New York",
"state": "NY",
"zipCode": "10001",
"country": "USA"
},
"billing": {
// Same structure as shipping
}
},
"payment": {
"method": "credit_card",
"status": "completed",
"transactionId": "txn_1234567890",
"processedAt": ISODate("...")
},
"fulfillment": {
"status": "shipped",
"trackingNumber": "1Z999AA1234567890",
"carrier": "UPS",
"shippedAt": ISODate("..."),
"estimatedDelivery": ISODate("...")
},
"status": "shipped",
"statusHistory": [
{
"status": "pending",
"timestamp": ISODate("..."),
"note": "Order placed"
},
{
"status": "confirmed",
"timestamp": ISODate("..."),
"note": "Payment confirmed"
},
{
"status": "shipped",
"timestamp": ISODate("..."),
"note": "Order shipped via UPS"
}
],
"createdAt": ISODate("..."),
"updatedAt": ISODate("...")
}
```
#### MongoDB Aggregation Pipelines {#mongodb-aggregation-pipelines}
```javascript
// Complex aggregation queries
// 1. Product analytics with sales data
db.orders.aggregate([
// Match completed orders from last 30 days
{
$match: {
status: "completed",
createdAt: {
$gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
}
}
},
// Unwind order items
{ $unwind: "$items" },
// Group by product
{
$group: {
_id: "$items.productId",
productName: { $first: "$items.productName" },
totalQuantitySold: { $sum: "$items.quantity" },
totalRevenue: { $sum: "$items.totalPrice" },
averageOrderValue: { $avg: "$items.totalPrice" },
orderCount: { $sum: 1 }
}
},
// Lookup product details
{
$lookup: {
from: "products",
localField: "_id",
foreignField: "_id",
as: "productDetails"
}
},
// Add calculated fields
{
$addFields: {
category: { $arrayElemAt: ["$productDetails.category.name", 0] },
currentPrice: { $arrayElemAt: ["$productDetails.price", 0] },
profitMargin: {
$subtract: [
"$averageOrderValue",
{ $multiply: [{ $arrayElemAt: ["$productDetails.cost", 0] }, "$totalQuantitySold"] }
]
}
}
},
// Sort by revenue
{ $sort: { totalRevenue: -1 } },
// Limit results
{ $limit: 20 }
]);
// 2. Customer segmentation analysis
db.users.aggregate([
// Lookup user orders
{
$lookup: {
from: "orders",
localField: "_id",
foreignField: "userId",
as: "orders"
}
},
// Filter active users with orders
{
$match: {
isActive: true,
"orders.0": { $exists: true }
}
},
// Calculate customer metrics
{
$addFields: {
totalOrders: { $size: "$orders" },
totalSpent: {
$sum: {
$map: {
input: "$orders",
as: "order",
in: "$$order.pricing.total"
}
}
},
averageOrderValue: {
$avg: {
$map: {
input: "$orders",
as: "order",
in: "$$order.pricing.total"
}
}
},
lastOrderDate: {
$max: {
$map: {
input: "$orders",
as: "order",
in: "$$order.createdAt"
}
}
},
daysSinceLastOrder: {
$divide: [
{ $subtract: [new Date(), "$lastOrderDate"] },
1000 * 60 * 60 * 24
]
}
}
},
// Segment customers
{
$addFields: {
customerSegment: {
$switch: {
branches: [
{
case: {
$and: [
{ $gte: ["$totalSpent", 1000] },
{ $gte: ["$totalOrders", 5] },
{ $lte: ["$daysSinceLastOrder", 30] }
]
},
then: "VIP"
},
{
case: {
$and: [
{ $gte: ["$totalSpent", 500] },
{ $gte: ["$totalOrders", 3] },
{ $lte: ["$daysSinceLastOrder", 60] }
]
},
then: "Loyal"
},
{
case: {
$and: [
{ $gte: ["$totalOrders", 2] },
{ $lte: ["$daysSinceLastOrder", 90] }
]
},
then: "Regular"
},
{
case: { $gt: ["$daysSinceLastOrder", 180] },
then: "At Risk"
}
],
default: "New"
}
}
}
},
// Group by segment
{
$group: {
_id: "$customerSegment",
customerCount: { $sum: 1 },
averageTotalSpent: { $avg: "$totalSpent" },
averageOrderValue: { $avg: "$averageOrderValue" },
averageOrderCount: { $avg: "$totalOrders" }
}
},
{ $sort: { averageTotalSpent: -1 } }
]);
```
### Database Performance Optimization {#database-performance-optimization}
#### Indexing Strategies {#indexing-strategies}
```sql
-- PostgreSQL Advanced Indexing
-- 1. Composite indexes for common query patterns
CREATE INDEX idx_products_category_price_stock ON products(category_id, price, stock_quantity)
WHERE is_active = TRUE;
-- 2. Partial indexes for specific conditions
CREATE INDEX idx_orders_pending ON orders(user_id, created_at)
WHERE status = 'pending';
-- 3. Expression indexes for computed values
CREATE INDEX idx_products_discounted_price ON products((price * (1 - COALESCE(discount_percentage, 0) / 100)))
WHERE discount_percentage > 0;
-- 4. GIN indexes for JSONB columns
CREATE INDEX idx_products_specifications ON products USING GIN(specifications);
-- 5. Full-text search indexes
CREATE INDEX idx_products_fulltext ON products USING GIN(
to_tsvector('english', name || ' ' || COALESCE(description, '')));
-- Query optimization examples
EXPLAIN (ANALYZE, BUFFERS) 
SELECT p.*, c.name as category_name
FROM products p
JOIN categories c ON p.category_id = c.id
WHERE p.category_id = 1
AND p.price BETWEEN 100 AND 500
AND p.stock_quantity > 0
AND p.is_active = TRUE
ORDER BY p.price ASC
LIMIT 20;
```
#### Database Connection Pooling {#database-connection-pooling}
```python
# Advanced connection pooling with SQLAlchemy {#advanced-connection-pooling-with-sqlalchemy}
from sqlalchemy import create_engine, event
from sqlalchemy.pool import QueuePool
from sqlalchemy.orm import sessionmaker
import logging
class DatabaseManager:
def __init__(self, database_url, **kwargs):
# Connection pool configuration {#connection-pool-configuration}
self.engine = create_engine(
database_url,
poolclass=QueuePool,
pool_size=20, # Number of connections to maintain
max_overflow=30, # Additional connections beyond pool_size
pool_pre_ping=True, # Validate connections before use
pool_recycle=3600, # Recycle connections after 1 hour
echo=kwargs.get('echo', False),
**kwargs)
# Session factory {#session-factory}
self.SessionLocal = sessionmaker(
autocommit=False,
autoflush=False,
bind=self.engine)
# Setup connection event listeners {#setup-connection-event-listeners}
self._setup_event_listeners()
def _setup_event_listeners(self):
@event.listens_for(self.engine, "connect")
def set_sqlite_pragma(dbapi_connection, connection_record):
if 'sqlite' in str(self.engine.url):
cursor = dbapi_connection.cursor()
cursor.execute("PRAGMA foreign_keys=ON")
cursor.close()
@event.listens_for(self.engine, "checkout")
def receive_checkout(dbapi_connection, connection_record, connection_proxy):
logging.debug(f"Connection checked out: {id(dbapi_connection)}")
@event.listens_for(self.engine, "checkin")
def receive_checkin(dbapi_connection, connection_record):
logging.debug(f"Connection checked in: {id(dbapi_connection)}")
def get_session(self):
return self.SessionLocal()
def close(self):
self.engine.dispose()
# Usage with context manager {#usage-with-context-manager}
from contextlib import contextmanager
@contextmanager
def get_db_session():
session = db_manager.get_session()
try:
yield session
session.commit()
except Exception:
session.rollback()
raise
finally:
session.close()
# Example usage {#example-usage}
def create_user(user_data):
with get_db_session() as session:
user = User(**user_data)
session.add(user)
return user
```
---
## API Design & Development {#api-design-&-development}
### RESTful API Design {#restful-api-design}
#### REST API Best Practices {#rest-api-best-practices}
```python
# Flask-RESTful API with comprehensive error handling {#flask-restful-api-with-comprehensive-error-handling}
from flask import Flask, request, jsonify
from flask_restful import Api, Resource, reqparse, fields, marshal_with
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from marshmallow import Schema, fields as ma_fields, validate, ValidationError
from werkzeug.exceptions import BadRequest, NotFound, Unauthorized
import logging
from datetime import datetime, timedelta
app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'your-secret-key'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)
api = Api(app)
jwt = JWTManager(app)
# Request/Response Schemas with Marshmallow {#requestresponse-schemas-with-marshmallow}
class UserRegistrationSchema(Schema):
email = ma_fields.Email(required=True)
password = ma_fields.Str(
