# Python:  Learning Guide 

## Getting Started
### What is Python? 
Python is a **high-level**, **interpreted** programming language known for its:
- **Readable syntax** - Easy to learn and understand
- **Versatility** - Web development, data science, AI, automation
- **Large community** - Extensive libraries and support
- **Rapid development** - Quick prototyping and deployment
### Installation & Setup 
Download from python.org 
Verify installation
```bash
python --version
python3 --version
```
Install package manager (usually included)
```bash
pip --version
```
## Your First Python Program 
### hello_world.py 
```python
print("Hello, World! ")
print("Welcome to Python programming!")
```

## Variables & Data Types
### Variables 
Python is **dynamically typed** - no need to declare variable types!

### Variable assignment 
```python
name = "Alice"         # String
age = 25               # Integer
height = 5.6           # Float
is_student = True      # Boolean
```

### Multiple assignment 
```python
x, y, z = 1, 2, 3
a = b = c = 0
```

## ️ Naming Conventions
### Good naming 
```python
user_name = "john_doe"
total_count = 100
MAX_SIZE = 1000 # Constants in UPPERCASE
```

### Avoid 
```python
1name = "invalid" # Can't start with number
class = "reserved" # Don't use keywords
x = "unclear" # Use descriptive names
```

## Data Types 
### **Numeric Types**
### Integers 
```python
count = 42
negative = -17
big_number = 1_000_000 # Underscores for readability
```

### Floats 
```python
pi = 3.14159
scientific = 2.5e-4 # 0.00025
```

### Complex numbers 
```
complex_num = 3 + 4j
```

## **Text Type**
### Strings 
```python
single_quote = 'Hello'
double_quote = "World"
multiline = """This is a
multiline string"""
```

### String formatting 
```python
name = "Bob"
age = 30
message = f"Hi, I'm {name} and I'm {age} years old"
print(message)                             # Hi, I'm Bob and I'm 30 years old
```

### **Boolean Type** 
```python
is_active = True
is_complete = False
```

### Boolean operations 
```python
result = True and False         # False
result = True or False          # True
result = not True               # False
```

## Control Flow 
### Conditional Statements

### if-elif-else 
```python
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print(f"Your grade is: {grade}")
```
### Ternary operator
```python
status = "Pass" if score >= 60 else "Fail"
```
### Loops
### **For Loops**

### Iterate over sequences
```python
fruits = ["apple", "banana", "cherry"]
    for fruit in fruits:
    print(f"I love {fruit}! ")
```

### Range function
```python
for i in range(5): # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6): # 1, 2, 3, 4, 5
    print(i)

for i in range(0, 10, 2): # 0, 2, 4, 6, 8
    print(i)
```
### Enumerate for index and value
```python
for index, fruit in enumerate(fruits):
print(f"{index}: {fruit}")
```
### **While Loops**
### Basic while loop
```python
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1
```
### Input validation
```python
while True:
user_input = input("Enter 'quit' to exit: ")

if user_input.lower() == 'quit':
break

print(f"You entered: {user_input}")
```
### **Loop Control**
### break and continue
```python
for i in range(10):

if i == 3:
continue # Skip 3

if i == 7:
break # Stop at 7

print(i) # Prints: 0, 1, 2, 4, 5, 6
```

## Data Structures
### Lists (Arrays)
### Creating lists
```python
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
empty_list = []
```
### List operations 
```python
numbers.append(6) # Add to end
numbers.insert(0, 0) # Insert at index
numbers.remove(3) # Remove first occurrence
popped = numbers.pop() # Remove and return last
```
### List comprehensions
```python
squares = [x**2 for x in range(10)]
even_squares = [x**2 for x in range(10) if x % 2 == 0]
```
### Slicing
```python
my_list = [0, 1, 2, 3, 4, 5]

print(my_list[1:4]) # [1, 2, 3]
print(my_list[:3]) # [0, 1, 2]

print(my_list[2:]) # [2, 3, 4, 5]
print(my_list[::-1]) # [5, 4, 3, 2, 1, 0] (reverse)
```
### Tuples
### Immutable sequences
```python
coordinates = (10, 20)
colors = ("red", "green", "blue")
single_item = (42,) # Note the comma!
```
### Tuple unpacking 
```python
x, y = coordinates
print(f"X: {x}, Y: {y}")
```
### Named tuples
```python
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)

print(p.x, p.y)
```
### ️ Dictionaries
### Key-value pairs
```python
student = {
"name": "Alice",
"age": 20,
"grades": [85, 90, 78]
}
```
### Dictionary operations 
```python
student["email"] = "alice@email.com" # Add new key
age = student.get("age", 0) # Safe access
student.pop("grades") # Remove key
```
### Dictionary comprehensions
```python
squares_dict = {x: x**2 for x in range(5)}
```
### Iterating dictionaries
```python
for key, value in student.items():
print(f"{key}: {value}")
```
### Sets
### Unique collections
```python
fruits = {"apple", "banana", "cherry"}
numbers = set([1, 2, 2, 3, 3, 4]) # {1, 2, 3, 4}
```
# Set operations
```python
fruits.add("orange")
fruits.remove("banana")
```
# Set mathematics
```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

union = set1 | set2             # {1, 2, 3, 4, 5, 6}

intersection = set1 & set2      # {3, 4}
difference = set1 - set2        # {1, 2}
```
---
## Functions
### Basic Functions
### Function definition
```python
def greet(name):
"""Greet a person by name."""
return f"Hello, {name}!"
```
### Function call
```
message = greet("Alice")
print(message)
```
### Default parameters
```python
def greet_with_title(name, title="Mr./Ms."):
return f"Hello, {title} {name}!"

print(greet_with_title("Smith"))                     # Hello, Mr./Ms. Smith!
print(greet_with_title("Smith", "Dr."))              # Hello, Dr. Smith!
```

### Advanced Function Features
### Variable arguments
```python
def sum_all(*args):
return sum(args)
result = sum_all(1, 2, 3, 4, 5) # 15
```
### Keyword arguments
```python
def create_profile(**kwargs):
profile = {}

for key, value in kwargs.items():
profile[key] = value

return profile
user = create_profile(name="Alice", age=25, city="New York")
```
### Lambda functions
```python
square = lambda x: x**2
numbers = [1, 2, 3, 4, 5]
squared = list(map(square, numbers)) # [1, 4, 9, 16, 25]
```
### Higher-order functions
```python
def apply_operation(numbers, operation):
return [operation(x) for x in numbers]
result = apply_operation([1, 2, 3], lambda x: x * 2) # [2, 4, 6]
```
### Decorators
### Function decorators
```python
def timer(func):
import time

def wrapper(*args, **kwargs):
start = time.time()

result = func(*args, **kwargs)
end = time.time()

print(f"{func.__name__} took {end - start:.4f} seconds")
return result
return wrapper

@timer
def slow_function():
import time
time.sleep(1)

return "Done!"
result = slow_function()                   # Prints execution time
```
---
## Modules & Packages
### Importing Modules

### Standard library imports
```python
import math
import random

from datetime import datetime, timedelta
import os
```
### Using imported modules
```python
print(math.pi) # 3.141592653589793
print(random.randint(1, 10))              # Random number 1-10
print(datetime.now())                     # Current date and time
```
### Aliasing imports
```python
import numpy as np
import pandas as pd
```
### Creating Your Own Modules
### math_utils.py
```python
def add(a, b):
"""Add two numbers."""
return a + b

def multiply(a, b):
"""Multiply two numbers."""
return a * b
PI = 3.14159
```
### main.py
```python
from math_utils import add, multiply, PI
```
###  or
```python
import math_utils
    result = add(5, 3) # 8
    result = math_utils.multiply(4, 7) # 28
```
### Package Management
### Installing packages
```bash
pip install requests
pip install pandas numpy matplotlib
```
### Requirements file 
```bash
pip freeze > requirements.txt
pip install -r requirements.txt
```
### Virtual environments
```bash
python -m venv myenv
```
### Windows 
```bash
myenv\Scripts\activate
```
### macOS/Linux 
```bash
source myenv/bin/activate
```

## ️ Object-Oriented Programming 
### ️ Classes and Objects

### Class variable
```python
species = "Canis lupus"
def __init__(self, name, breed, age):
```
### Instance variables 
```python
self.name = name
self.breed = breed
self.age = age
self.tricks = []

def bark(self):
return f"{self.name} says Woof!"

def learn_trick(self, trick):
self.tricks.append(trick)

return f"{self.name} learned {trick}!"

def __str__(self):
return f"{self.name} is a {self.age}-year-old {self.breed}"
```
### Creating objects
```python
my_dog = Dog("Buddy", "Golden Retriever", 3)

print(my_dog) # Buddy is a 3-year-old Golden Retriever
print(my_dog.bark()) # Buddy says Woof!
print(my_dog.learn_trick("sit")) # Buddy learned sit!
```
### Encapsulation
```python
class BankAccount:
def __init__(self, account_number, initial_balance=0):

self.account_number = account_number
self._balance = initial_balance # Protected
self.__pin = None # Private

@property
def balance(self):
"""Getter for balance."""
return self._balance

def deposit(self, amount):
if amount > 0:
self._balance += amount

return f"Deposited ${amount}. New balance: ${self._balance}"
return "Invalid deposit amount"

def withdraw(self, amount):
if 0 < amount <= self._balance:
self._balance -= amount

return f"Withdrew ${amount}. New balance: ${self._balance}"
return "Insufficient funds"

def set_pin(self, pin):
if len(str(pin)) == 4:
self.__pin = pin

return "PIN set successfully"
return "PIN must be 4 digits"

account = BankAccount("12345", 1000)

print(account.deposit(500)) # Deposited $500. New balance: $1500
print(account.balance) # 1500
```
### Inheritance
```python
# Base class
class Animal:

def __init__(self, name, species):
self.name = name
self.species = species

def speak(self):
return "Some generic animal sound"

def info(self):
return f"{self.name} is a {self.species}"
```
# Derived classes 
```python
class Dog(Animal):
def __init__(self, name, breed):

super().__init__(name, "Dog")
self.breed = breed

def speak(self):
return "Woof!"

def fetch(self):
return f"{self.name} is fetching the ball!"

class Cat(Animal):

def __init__(self, name, color):
super().__init__(name, "Cat")
self.color = color

def speak(self):
return "Meow!"

def purr(self):
return f"{self.name} is purring contentedly"
```
# Using inheritance 
```python
dog = Dog("Buddy", "Labrador")
cat = Cat("Whiskers", "Orange")

print(dog.info()) # Buddy is a Dog
print(dog.speak()) # Woof!
print(cat.speak()) # Meow!
```
### Polymorphism
### Polymorphism in action 
```python
def animal_concert(animals):
for animal in animals:
print(f"{animal.name}: {animal.speak()}")

animals = [
Dog("Buddy", "Labrador"),
Cat("Whiskers", "Orange"),
Dog("Max", "Bulldog")
]
animal_concert(animals)
```
Output:
```bash
- Buddy: Woof!
- Whiskers: Meow! 
- Max: Woof! 
```

## Advanced Topics
### Iterators and Generators
### Generator function 
```python
def fibonacci(n):
a, b = 0, 1
for _ in range(n):
yield a
a, b = b, a + b
```
### Using generator 
```python
fib_sequence = fibonacci(10)
for num in fib_sequence:
print(num, end=" ") # 0 1 1 2 3 5 8 13 21 34
```
### Generator expression 
```python
squares = (x**2 for x in range(10))
print(list(squares)) # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```
## Context Managers
### File handling with context manager 
```python
with open("data.txt", "w") as file:
file.write("Hello, World!")
```
## File automatically closed 
### Custom context manager
```python
class Timer:

def __enter__(self):
import time
self.start = time.time()
return self

def __exit__(self, exc_type, exc_val, exc_tb):
import time
self.end = time.time()

print(f"Execution time: {self.end - self.start:.4f} seconds")
with Timer():
```
### Some time-consuming operation 
```python
sum(range(1000000))
```
## Exception Handling
### Basic exception handling 
```python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")

except ValueError:
    print("Please enter a valid number")

except ZeroDivisionError:
    print("Cannot divide by zero")

except Exception as e:
    print(f"An error occurred: {e}")
else:
    print("No errors occurred")
finally:
    print("This always executes")
```
### Custom exceptions
```python
class CustomError(Exception):
def __init__(self, message):

self.message = message
super().__init__(self.message)

def validate_age(age):
    if age < 0:
    raise CustomError("Age cannot be negative")

if age > 150:
    raise CustomError("Age seems unrealistic")
    return True

try:
    validate_age(-5)
    except CustomError as e:
print(f"Validation error: {e.message}")
```

## ️ Best Practices
### Code Style (PEP 8)

### Good practices
### Imports at the top
```python
import os
import sys
from collections import defaultdict
```
### Constants in UPPERCASE
```python
MAX_CONNECTIONS = 100
DEFAULT_TIMEOUT = 30
```
### Function and variable names in snake_case 
```python
def calculate_total_price(items, tax_rate=0.08):
"""Calculate total price including tax.

Args:
    items (list): List of item prices
    tax_rate (float): Tax rate as decimal
Returns:
    float: Total price including tax
"""
subtotal = sum(items)
tax_amount = subtotal * tax_rate

return subtotal + tax_amount
```
# Class names in PascalCase
```python
class ShoppingCart:

def __init__(self):
self.items = []
self.total = 0.0

def add_item(self, item_price):
"""Add item to cart."""

if item_price > 0:
    self.items.append(item_price)
    self.total += item_price
else:
    raise ValueError("Item price must be positive")
```
## Testing
### test_calculator.py 
```python
import unittest
from calculator import add, subtract, multiply, divide

class TestCalculator(unittest.TestCase):
```
### Test addition
```python
    def test_add_positive_numbers(self):
        self.assertEqual(add(2, 3), 5)
    
    def test_add_negative_numbers(self):
        self.assertEqual(add(-2, -3), -5)
    
    def test_add_mixed_numbers(self):
        self.assertEqual(add(-2, 3), 1)
```
### Test subtraction
```python
    def test_subtract_positive_numbers(self):
        self.assertEqual(subtract(5, 3), 2)
   
    def test_subtract_negative_numbers(self):
        self.assertEqual(subtract(-2, -3), 1)
```
### Test multiplication
```python
    def test_multiply_positive_numbers(self):
        self.assertEqual(multiply(2, 3), 6)
        
    def test_multiply_by_zero(self):
        self.assertEqual(multiply(5, 0), 0)
```
### Test division
```python
    def test_divide_positive_numbers(self):
        self.assertEqual(divide(6, 3), 2)
        
    def test_divide_by_zero(self):
        with self.assertRaises(ValueError):
            divide(10, 0)

if __name__ == '__main__':
    unittest.main()
```
## Performance Tips

### Efficient dictionary usage 
### Bad: Multiple lookups
```python
if 'key' in my_dict:
    value = my_dict['key']
    process(value)
```
### Good: Single lookup with get()
```python
value = my_dict.get('key')
if value is not None:
    process(value)
```
## Efficient list operations 
### Bad: Shifting elements
```python
my_list = [1, 2, 3, 4, 5]
my_list.insert(0, 0) # O(n) operation
```
### Good: Use deque for frequent insertions
```python
from collections import deque
my_deque = deque([1, 2, 3, 4, 5])
my_deque.appendleft(0) # O(1) operation
```
## Efficient string concatenation 
### Bad: Creates new string objects
```python
result = ""
for i in range(1000):
    result += str(i) # O(n²) time complexity
```
### Good: Uses list join
```python
parts = []
for i in range(1000):
    parts.append(str(i))
result = "".join(parts) # O(n) time complexity
```
### Even better: Generator expression
```python
result = "".join(str(i) for i in range(1000))
```

## Practice Projects
### Beginner Projects

### **1. Number Guessing Game**
```python
import random
def number_guessing_game():
    number = random.randint(1, 100)
    attempts = 0
    max_attempts = 7

    print(" Welcome to the Number Guessing Game!")
    print(f"I'm thinking of a number between 1 and 100.")
    print(f"You have {max_attempts} attempts to guess it!")

    while attempts < max_attempts:
        try:
            guess = int(input(f"\nAttempt {attempts + 1}: Enter your guess: "))
            attempts += 1
            if guess == number:
                print(f" Congratulations! You guessed it in {attempts} attempts!")
                break
            elif guess < number:
                print(" Too low! Try a higher number.")
            else:
                print(" Too high! Try a lower number.")
        except ValueError:
            print(" Please enter a valid number!")
    else:
        print(f" Game over! The number was {number}")

if __name__ == "__main__":
    number_guessing_game()
```

### **2. Todo List Manager**
```python
class TodoList:
    def __init__(self):
        self.tasks = []

    def add_task(self, task):
        self.tasks.append({"task": task, "completed": False})
        print(f" Added: {task}")
    def complete_task(self, index):
        if 0 <= index < len(self.tasks):
            self.tasks[index]["completed"] = True
            print(f" Completed: {self.tasks[index]['task']}")
        else:
            print(" Invalid task number")
    def show_tasks(self):
        if not self.tasks:
            print(" No tasks yet!")
            return
        print("\n Your Tasks:")

        for i, task in enumerate(self.tasks):
            status = "" if task["completed"] else "⏳"
            print(f"{i + 1}. {status} {task['task']}")

    def remove_task(self, index):
        if 0 <= index < len(self.tasks):
            removed = self.tasks.pop(index)
            print(f"️ Removed: {removed['task']}")
        else:
            print(" Invalid task number")

def main():
    todo = TodoList()
    while True:
        print("\n Todo List Manager")
        print("1. Add task")
        print("2. Show tasks")
        print("3. Complete task")
        print("4. Remove task")
        print("5. Exit")

        choice = input("Choose an option: ")
        if choice == "1":
            task = input("Enter task: ")
            todo.add_task(task)
        elif choice == "2":
            todo.show_tasks()
        elif choice == "3":
            todo.show_tasks()
            try:
                index = int(input("Enter task number to complete: ")) - 1

                todo.complete_task(index)
            except ValueError:
                print(" Please enter a valid number")
        elif choice == "4":

            todo.show_tasks()
            try:
                index = int(input("Enter task number to remove: ")) - 1

                todo.remove_task(index)
            except ValueError:
                print(" Please enter a valid number")
        elif choice == "5":
            print(" Goodbye!")
            break
        else:
            print(" Invalid choice")

if __name__ == "__main__":
    main()
```
### Intermediate Projects

### **3. Web Scraper**
```python
import requests
from bs4 import BeautifulSoup
import csv

class WebScraper:
    def __init__(self, base_url):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })

    def scrape_quotes(self):
        """Scrape quotes from quotes.toscrape.com"""
        quotes = []
        page = 1
        while True:
            url = f"{self.base_url}/page/{page}/"
            response = self.session.get(url)
            if response.status_code != 200:
                break
            soup = BeautifulSoup(response.content, 'html.parser')
            quote_elements = soup.find_all('div', class_='quote')
            if not quote_elements:
                break

            for quote_elem in quote_elements:
                text = quote_elem.find('span', class_='text').text
                author = quote_elem.find('small', class_='author').text
                tags = [tag.text for tag in quote_elem.find_all('a', class_='tag')]
                quotes.append({
                    'text': text,
                    'author': author,
                    'tags': ', '.join(tags)
                })
            page += 1
            print(f"Scraped page {page - 1}...")
        return quotes

    def save_to_csv(self, quotes, filename='quotes.csv'):
        """Save quotes to CSV file"""
        with open(filename, 'w', newline='', encoding='utf-8') as file:
            writer = csv.DictWriter(file, fieldnames=['text', 'author', 'tags'])
            writer.writeheader()
            writer.writerows(quotes)
        print(f" Saved {len(quotes)} quotes to {filename}")

def main():
    scraper = WebScraper('http://quotes.toscrape.com')
    print(" Starting web scraping...")
    quotes = scraper.scrape_quotes()
    if quotes:
        scraper.save_to_csv(quotes)
        print(f" Successfully scraped {len(quotes)} quotes!")
    else:
        print(" No quotes found")

if __name__ == "__main__":
    main()
```

### **4. Contact Book Application**
```python
class Contact:
    def __init__(self, name, phone, email=""):
        self.name = name
        self.phone = phone
        self.email = email
    def __str__(self):
        return f"{self.name}: {self.phone} ({self.email})"

class ContactBook:
    def __init__(self):
        self.contacts = {}
    
    def add_contact(self, name, phone, email=""):
        if name in self.contacts:
            print(f"Contact '{name}' already exists!")
            return False
        self.contacts[name] = Contact(name, phone, email)
        print(f"Contact '{name}' added successfully!")
        return True
    
    def find_contact(self, name):
        return self.contacts.get(name)
    
    def update_contact(self, name, phone=None, email=None):
        contact = self.find_contact(name)
        if contact:
            if phone:
                contact.phone = phone
            if email:
                contact.email = email
            print(f"Contact '{name}' updated!")
            return True
        print(f"Contact '{name}' not found!")
        return False
    
    def delete_contact(self, name):
        if name in self.contacts:
            del self.contacts[name]
            print(f"Contact '{name}' deleted!")
            return True
        print(f"Contact '{name}' not found!")
        return False
    
    def list_contacts(self):
        if not self.contacts:
            print("No contacts found!")
            return
        print("\nContact List:")
        for contact in self.contacts.values():
            print(contact)
    
    def save_to_file(self, filename):
        try:
            with open(filename, 'w') as f:
                for contact in self.contacts.values():
                    f.write(f"{contact.name},{contact.phone},{contact.email}\n")
            print(f"Contacts saved to '{filename}'!")
            return True
        except Exception as e:
            print(f"Error saving contacts: {e}")
            return False
    
    def load_from_file(self, filename):
        try:
            with open(filename, 'r') as f:
                for line in f:
                    line = line.strip()
                    if line:
                        parts = line.split(',')
                        if len(parts) >= 2:
                            name, phone = parts[0], parts[1]
                            email = parts[2] if len(parts) > 2 else ""
                            self.add_contact(name, phone, email)
            print(f"Contacts loaded from '{filename}'!")
            return True
        except FileNotFoundError:
            print(f"File '{filename}' not found!")
            return False
        except Exception as e:
            print(f"Error loading contacts: {e}")
            return False
```
# Usage example
```python
book = ContactBook()
book.add_contact("Alice", "123-456-7890", "alice@email.com")
book.add_contact("Bob", "987-654-3210")
book.list_contacts()
```
# Find a contact
```python
contact = book.find_contact("Alice")
if contact:
    print(f"Found: {contact}")
```
# Update contact
```python
book.update_contact("Alice", email="alice.smith@email.com")
```
# Save to file
```python
book.save_to_file("contacts.txt")
```

## Next Steps
### Advanced Topics to Explore

1. ** Web Development**
- Flask/Django frameworks
- REST APIs
- Database integration

2. ** Data Science**
- NumPy, Pandas
- Matplotlib, Seaborn
- Machine Learning with scikit-learn

3. ** Automation**
- Selenium for web automation
- Schedule for task automation
- API integrations

4. ** DevOps**
- Docker containers
- CI/CD pipelines
- Cloud deployment

### Learning Resources
- ** Books**: "Automate the Boring Stuff with Python", "Python Crash Course"
- ** Websites**: Python.org, Real Python, GeeksforGeeks
- ** Videos**: Python tutorials on YouTube, Coursera, edX
- ** Practice**: LeetCode, HackerRank, Codewars
---

@Th3viousGameus


