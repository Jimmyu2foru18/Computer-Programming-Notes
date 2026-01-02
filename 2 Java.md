# Java Programming Guide

---
## Table of Contents
1. [Getting Started]
2. [Variables & Data Types]
3. [Control Flow]
4. [Data Structures]
5. [Methods & Functions]
6. [Object-Oriented Programming]
7. [Advanced Topics]
8. [Best Practices]
9. [Practice Projects]
10. [Next Steps]
---
## Getting Started
### What is Java?
Java is a **high-level**, **object-oriented** programming language designed for platform independence. Write once, run anywhere!
### Key Features
- **Strongly Typed**: Type safety at compile time
- **Platform Independent**: JVM (Java Virtual Machine)
- **Automatic Memory Management**: Garbage collection
- **Secure**: Built-in security features
- **Multithreading**: Concurrent programming support
### Setting Up Java
```bash
## Check if Java is installed 
java -version
javac -version
## Download from Oracle or use OpenJDK 
## Set JAVA_HOME environment variable
```
### Your First Java Program
```java
public class HelloWorld {
public static void main(String[] args) {
System.out.println("Hello, World! ");
}
}
```
**Compilation & Execution:**
```bash
javac HelloWorld.java # Compile to bytecode
java HelloWorld # Run the program
```
---
## Variables & Data Types
### ️ Primitive Data Types
| Type | Size | Range | Example |
|------|------|-------|----------|
| `byte` | 8-bit | -128 to 127 | `byte age = 25;` |
| `short` | 16-bit | -32,768 to 32,767 | `short year = 2024;` |
| `int` | 32-bit | -2³¹ to 2³¹-1 | `int count = 100;` |
| `long` | 64-bit | -2⁶³ to 2⁶³-1 | `long population = 8000000000L;` |
| `float` | 32-bit | IEEE 754 | `float price = 19.99f;` |
| `double` | 64-bit | IEEE 754 | `double pi = 3.14159;` |
| `boolean` | 1-bit | true/false | `boolean isActive = true;` |
| `char` | 16-bit | Unicode | `char grade = 'A';` |
### Reference Data Types
```java
// Strings
String name = "Java Developer";
String message = new String("Hello");
// Arrays
int[] numbers = {1, 2, 3, 4, 5};
String[] languages = new String[3];
// Objects
Scanner scanner = new Scanner(System.in);
ArrayList<String> list = new ArrayList<>();
```
### Variable Declaration & Initialization
```java
// Declaration
int age;
String name;
// Initialization
age = 25;
name = "Alice";
// Combined
int score = 95;
final double PI = 3.14159; // Constant
```
### Variable Scope
```java
public class ScopeExample {
static int classVariable = 10; // Class scope
int instanceVariable = 20; // Instance scope
public void method() {
int localVariable = 30; // Method scope
if (true) {
int blockVariable = 40; // Block scope
}
// blockVariable not accessible here
}
}
```
---
## Control Flow
### Conditional Statements
### if-else Statement
```java
int score = 85;
if (score >= 90) {
System.out.println("Grade: A ");
} else if (score >= 80) {
System.out.println("Grade: B ");
} else if (score >= 70) {
System.out.println("Grade: C ");
} else {
System.out.println("Grade: F ");
}
```
### switch Statement
```java
int day = 3;
String dayName;
switch (day) {
case 1: dayName = "Monday"; break;
case 2: dayName = "Tuesday"; break;
case 3: dayName = "Wednesday"; break;
case 4: dayName = "Thursday"; break;
case 5: dayName = "Friday"; break;
default: dayName = "Weekend";
}
// Enhanced switch (Java 14+)
String result = switch (day) {
case 1, 2, 3, 4, 5 -> "Weekday";
case 6, 7 -> "Weekend";
default -> "Invalid day";
};
```
### Loops
### for Loop
```java
// Traditional for loop
for (int i = 0; i < 5; i++) {
System.out.println("Count: " + i);
}
// Enhanced for loop (for-each)
int[] numbers = {1, 2, 3, 4, 5};
for (int num: numbers) {
System.out.println("Number: " + num);
}
```
### while Loop
```java
int count = 0;
while (count < 5) {
System.out.println("Count: " + count);
count++;
}
```
### do-while Loop
```java
int num = 0;
do {
System.out.println("Number: " + num);
num++;
} while (num < 5);
```
### Loop Control
```java
for (int i = 0; i < 10; i++) {
if (i == 3) {
continue; // Skip iteration
}
if (i == 7) {
break; // Exit loop
}
System.out.println(i);
}
```
---
## Data Structures
### Arrays
### One-Dimensional Arrays
```java
// Declaration and initialization
int[] numbers = new int[5];
int[] scores = {95, 87, 92, 78, 88};
String[] names = {"Alice", "Bob", "Charlie"};
// Accessing elements
int firstScore = scores[0];
scores[1] = 90; // Modify element
// Array properties
int length = scores.length;
// Iterating through arrays
for (int i = 0; i < scores.length; i++) {
System.out.println("Score " + i + ": " + scores[i]);
}
```
### Multi-Dimensional Arrays
```java
// 2D Array
int[][] matrix = {
{1, 2, 3},
{4, 5, 6},
{7, 8, 9}
};
// Accessing 2D array elements
int element = matrix[1][2]; // Row 1, Column 2 = 6
// Iterating through 2D array
for (int i = 0; i < matrix.length; i++) {
for (int j = 0; j < matrix[i].length; j++) {
System.out.print(matrix[i][j] + " ");
}
System.out.println();
}
```
### Strings
### String Basics
```java
// String creation
String str1 = "Hello"; // String literal
String str2 = new String("World"); // String object
// String immutability
String original = "Java";
String modified = original + " Programming"; // Creates new string
```
### Essential String Methods
```java
String text = " Java Programming ";
// Length and character access
int len = text.length(); // 19
char ch = text.charAt(2); // 'J'
// Case conversion
String upper = text.toUpperCase(); // " JAVA PROGRAMMING "
String lower = text.toLowerCase(); // " java programming "
// Trimming and substring
String trimmed = text.trim(); // "Java Programming"
String sub = text.substring(2, 6); // "Java"
// Searching
int index = text.indexOf("Java"); // 2
boolean contains = text.contains("Programming"); // true
// Comparison
boolean equals = text.equals("Java Programming");
boolean equalsIgnoreCase = text.equalsIgnoreCase("JAVA PROGRAMMING");
// Replacement
String replaced = text.replace("Java", "Python");
// Splitting
String[] words = "apple,banana,orange".split(",");
```
### StringBuilder for Efficiency
```java
// Efficient string building
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
String result = sb.toString(); // "Hello World"
// Method chaining
String chained = new StringBuilder().append("Java").append(" is").append(" awesome!").toString();
```
---
## Methods & Functions
### Method Syntax
```java
[access_modifier] [static] return_type methodName(parameters) {
// Method body
return value; // if return_type is not void
}
```
### Method Examples
### Basic Methods
```java
public class Calculator {
// Method with return value
public int add(int a, int b) {
return a + b;
}
// Method without return value
public void printResult(int result) {
System.out.println("Result: " + result);
}
// Static method
public static double calculateArea(double radius) {
return Math.PI * radius * radius;
}
}
```
### Method Overloading
```java
public class MathUtils {
// Same method name, different parameters
public int multiply(int a, int b) {
return a * b;
}
public double multiply(double a, double b) {
return a * b;
}
public int multiply(int a, int b, int c) {
return a * b * c;
}
}
```
### Variable Arguments (Varargs)
```java
public class VarargsExample {
public int sum(int... numbers) {
int total = 0;
for (int num: numbers) {
total += num;
}
return total;
}
// Usage
public static void main(String[] args) {
VarargsExample example = new VarargsExample();
int result1 = example.sum(1, 2, 3); // 6
int result2 = example.sum(1, 2, 3, 4, 5); // 15
}
}
```
---
# Object-Oriented Programming
## ️ Classes and Objects
### Class Definition
```java
public class Car {
// Instance variables (attributes)
private String brand;
private String model;
private int year;
private double price;
// Constructor
public Car(String brand, String model, int year, double price) {
this.brand = brand;
this.model = model;
this.year = year;
this.price = price;
}
// Default constructor
public Car() {
this("Unknown", "Unknown", 0, 0.0);
}
// Methods
public void startEngine() {
System.out.println(brand + " " + model + " engine started! ");
}
public void displayInfo() {
System.out.printf("%d %s %s - $%.2f%n", year, brand, model, price);
}
}
```
### Object Creation and Usage
```java
public class CarDemo {
public static void main(String[] args) {
// Creating objects
Car car1 = new Car("Toyota", "Camry", 2023, 28000.0);
Car car2 = new Car();
// Using objects
car1.startEngine();
car1.displayInfo();
}
}
```
## Encapsulation
### Access Modifiers
- `private`: Only within the same class
- `protected`: Same package + subclasses
- `public`: Accessible everywhere
- (default): Same package only

## Getters and Setters
```java
public class Student {
private String name;
private int age;
private double gpa;
// Getter methods
public String getName() {
return name;
}
public int getAge() {
return age;
}
public double getGpa() {
return gpa;
}
// Setter methods with validation
public void setName(String name) {
if (name!= null &&!name.trim().isEmpty()) {
this.name = name;
}
}
public void setAge(int age) {
if (age >= 0 && age <= 150) {
this.age = age;
}
}
public void setGpa(double gpa) {
if (gpa >= 0.0 && gpa <= 4.0) {
this.gpa = gpa;
}
}
}
```
## Inheritance
### Basic Inheritance
```java
// Parent class (Superclass)
public class Animal {
protected String name;
protected int age;
public Animal(String name, int age) {
this.name = name;
this.age = age;
}
public void eat() {
System.out.println(name + " is eating ️");
}
public void sleep() {
System.out.println(name + " is sleeping ");
}
}
// Child class (Subclass)
public class Dog extends Animal {
private String breed;
public Dog(String name, int age, String breed) {
super(name, age); // Call parent constructor
this.breed = breed;
}
public void bark() {
System.out.println(name + " is barking! Woof! ");
}
// Method overriding
@Override
public void eat() {
System.out.println(name + " the " + breed + " is eating dog food ");
}
}
```
## Polymorphism
### Method Overriding
```java
public class Shape {
public double getArea() {
return 0;
}
public void draw() {
System.out.println("Drawing a shape");
}
}
public class Circle extends Shape {
private double radius;
public Circle(double radius) {
this.radius = radius;
}
@Override
public double getArea() {
return Math.PI * radius * radius;
}
@Override
public void draw() {
System.out.println("Drawing a circle ⭕");
}
}
public class Rectangle extends Shape {
private double width, height;
public Rectangle(double width, double height) {
this.width = width;
this.height = height;
}
@Override
public double getArea() {
return width * height;
}
@Override
public void draw() {
System.out.println("Drawing a rectangle ⬜");
}
}
```
### Polymorphic Behavior
```java
public class PolymorphismDemo {
public static void main(String[] args) {
Shape[] shapes = {
new Circle(5),
new Rectangle(4, 6),
new Circle(3)
};
for (Shape shape: shapes) {
shape.draw(); // Polymorphic method call
System.out.println("Area: " + shape.getArea());
System.out.println();
}
}
}
```
## Interfaces
### Interface Definition
```java
public interface Drawable {
// Abstract methods (implicitly public abstract)
void draw();
void resize(double factor);
// Default method (Java 8+)
default void display() {
System.out.println("Displaying the drawable object");
}
// Static method (Java 8+)
static void printInfo() {
System.out.println("This is a drawable interface");
}
// Constants (implicitly public static final)
String TYPE = "DRAWABLE";
}
```
### Interface Implementation
```java
public class Button implements Drawable {
private String text;
private double width, height;
public Button(String text, double width, double height) {
this.text = text;
this.width = width;
this.height = height;
}
@Override
public void draw() {
System.out.println("Drawing button: " + text + " ");
}
@Override
public void resize(double factor) {
width *= factor;
height *= factor;
System.out.println("Button resized by factor: " + factor);
}
}
```
### ️ Abstract Classes
```java
public abstract class Vehicle {
protected String brand;
protected int year;
public Vehicle(String brand, int year) {
this.brand = brand;
this.year = year;
}
// Concrete method
public void displayInfo() {
System.out.println(year + " " + brand);
}
// Abstract method - must be implemented by subclasses
public abstract void start();
public abstract double getFuelEfficiency();
}
public class ElectricCar extends Vehicle {
private double batteryCapacity;
public ElectricCar(String brand, int year, double batteryCapacity) {
super(brand, year);
this.batteryCapacity = batteryCapacity;
}
@Override
public void start() {
System.out.println("Electric car started silently ");
}
@Override
public double getFuelEfficiency() {
return batteryCapacity * 3.5; // miles per kWh
}
}
```
---
# ️ Advanced Topics
## Packages
### Package Declaration
```java
// File: com/company/utils/MathUtils.java
package com.company.utils;
public class MathUtils {
public static double calculateDistance(double x1, double y1, double x2, double y2) {
return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
}
```
### Importing Packages
```java
// Import specific class
import com.company.utils.MathUtils;
// Import all classes from package
import java.util.*;
// Static import
import static java.lang.Math.*;
public class Calculator {
public double getCircleArea(double radius) {
return PI * pow(radius, 2); // Using static import
}
}
```
## Generics
### Generic Classes
```java
public class Box<T> {
private T content;
public void setContent(T content) {
this.content = content;
}
public T getContent() {
return content;
}
}
// Usage
Box<String> stringBox = new Box<>();
stringBox.setContent("Hello Generics!");
String content = stringBox.getContent();
Box<Integer> intBox = new Box<>();
intBox.setContent(42);
Integer number = intBox.getContent();
```
### Generic Methods
```java
public class GenericUtils {
public static <T> void swap(T[] array, int i, int j) {
T temp = array[i];
array[i] = array[j];
array[j] = temp;
}
public static <T extends Comparable<T>> T findMax(T[] array) {
T max = array[0];
for (T element: array) {
if (element.compareTo(max) > 0) {
max = element;
}
}
return max;
}
}
```
## Exception Handling
### Try-Catch-Finally
```java
public class ExceptionExample {
public static void main(String[] args) {
try {
int result = divide(10, 0);
System.out.println("Result: " + result);
} catch (ArithmeticException e) {
System.out.println("Error: Division by zero! ️");
} catch (Exception e) {
System.out.println("Unexpected error: " + e.getMessage());
} finally {
System.out.println("Cleanup operations ");
}
}
public static int divide(int a, int b) throws ArithmeticException {
if (b == 0) {
throw new ArithmeticException("Cannot divide by zero");
}
return a / b;
}
}
```
### Custom Exceptions
```java
public class InvalidAgeException extends Exception {
public InvalidAgeException(String message) {
super(message);
}
}
public class Person {
private int age;
public void setAge(int age) throws InvalidAgeException {
if (age < 0 || age > 150) {
throw new InvalidAgeException("Age must be between 0 and 150");
}
this.age = age;
}
}
```
## File I/O
### Reading Files
```java
import java.io.*;
import java.nio.file.*;
import java.util.List;
public class FileReadExample {
public static void readFileTraditional(String filename) {
try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
String line;
while ((line = reader.readLine())!= null) {
System.out.println(line);
}
} catch (IOException e) {
System.out.println("Error reading file: " + e.getMessage());
}
}
public static void readFileModern(String filename) {
try {
List<String> lines = Files.readAllLines(Paths.get(filename));
lines.forEach(System.out::println);
} catch (IOException e) {
System.out.println("Error reading file: " + e.getMessage());
}
}
}
```
### Writing Files
```java
import java.io.*;
import java.nio.file.*;
public class FileWriteExample {
public static void writeFile(String filename, String content) {
try (PrintWriter writer = new PrintWriter(new FileWriter(filename))) {
writer.println(content);
} catch (IOException e) {
System.out.println("Error writing file: " + e.getMessage());
}
}
public static void writeFileModern(String filename, String content) {
try {
Files.write(Paths.get(filename), content.getBytes());
} catch (IOException e) {
System.out.println("Error writing file: " + e.getMessage());
}
}
}
```
## Multithreading Basics
### Creating Threads
```java
// Method 1: Extending Thread class
class MyThread extends Thread {
@Override
public void run() {
for (int i = 0; i < 5; i++) {
System.out.println(Thread.currentThread().getName() + ": " + i);
try {
Thread.sleep(1000);
} catch (InterruptedException e) {
e.printStackTrace();
}
}
}
}
// Method 2: Implementing Runnable interface
class MyRunnable implements Runnable {
@Override
public void run() {
for (int i = 0; i < 5; i++) {
System.out.println(Thread.currentThread().getName() + ": " + i);
try {
Thread.sleep(1000);
} catch (InterruptedException e) {
e.printStackTrace();
}
}
}
}
// Usage
public class ThreadExample {
public static void main(String[] args) {
MyThread thread1 = new MyThread();
Thread thread2 = new Thread(new MyRunnable());
thread1.start();
thread2.start();
}
}
```
---
## Best Practices
### Naming Conventions
```java
// Classes: PascalCase
public class StudentManager { }
// Methods and variables: camelCase
public void calculateGrade() { }
private int studentCount;
// Constants: UPPER_SNAKE_CASE
public static final int MAX_STUDENTS = 100;
// Packages: lowercase with dots
package com.company.project.utils;
```
### Security Best Practices
```java
public class SecurityExample {
// Use private fields with public getters/setters
private String password;
// Validate input
public void setPassword(String password) {
if (password == null || password.length() < 8) {
throw new IllegalArgumentException("Password must be at least 8 characters");
}
this.password = password;
}
// Use defensive copying for mutable objects
private List<String> items = new ArrayList<>();
public List<String> getItems() {
return new ArrayList<>(items); // Return copy, not original
}
}
```
### Performance Tips
```java
// Use StringBuilder for string concatenation in loops
public String buildString(String[] words) {
StringBuilder sb = new StringBuilder();
for (String word: words) {
sb.append(word).append(" ");
}
return sb.toString().trim();
}
// Use enhanced for loops when possible
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
for (String name: names) {
System.out.println(name);
}
// Close resources properly (try-with-resources)
try (Scanner scanner = new Scanner(System.in)) {
String input = scanner.nextLine();
// Process input
} // Scanner automatically closed
```
---
# Practice Projects 
## Beginner Projects
### 1. Calculator Application
```java
import java.util.Scanner;
public class Calculator {
public static void main(String[] args) {
Scanner scanner = new Scanner(System.in);
System.out.println(" Simple Calculator");
System.out.print("Enter first number: ");
double num1 = scanner.nextDouble();
System.out.print("Enter operator (+, -, *, /): ");
char operator = scanner.next().charAt(0);
System.out.print("Enter second number: ");
double num2 = scanner.nextDouble();
double result = calculate(num1, operator, num2);
System.out.printf("Result: %.2f %c %.2f = %.2f%n", num1, operator, num2, result);
}
public static double calculate(double a, char op, double b) {
switch (op) {
case '+': return a + b;
case '-': return a - b;
case '*': return a * b;
case '/': return b!= 0? a / b: Double.NaN;
default: return Double.NaN;
}
}
}
```
### 2. Student Grade Manager
```java
import java.util.*;
class Student {
private String name;
private List<Double> grades;
public Student(String name) {
this.name = name;
this.grades = new ArrayList<>();
}
public void addGrade(double grade) {
if (grade >= 0 && grade <= 100) {
grades.add(grade);
}
}
public double getAverage() {
return grades.stream().mapToDouble(Double::doubleValue).average().orElse(0.0);
}
public String getLetterGrade() {
double avg = getAverage();
if (avg >= 90) return "A";
if (avg >= 80) return "B";
if (avg >= 70) return "C";
if (avg >= 60) return "D";
return "F";
}
@Override
public String toString() {
return String.format("%s: %.1f%% (%s)", name, getAverage(), getLetterGrade());
}
}
```
## Intermediate Projects
### 3. Library Management System
```java
import java.util.*;
import java.time.LocalDate;
class Book {
private String isbn;
private String title;
private String author;
private boolean isAvailable;
public Book(String isbn, String title, String author) {
this.isbn = isbn;
this.title = title;
this.author = author;
this.isAvailable = true;
}
// Getters and setters
public String getIsbn() { return isbn; }
public String getTitle() { return title; }
public String getAuthor() { return author; }
public boolean isAvailable() { return isAvailable; }
public void setAvailable(boolean available) { isAvailable = available; }
@Override
public String toString() {
return String.format("%s - %s by %s [%s]", 
isbn, title, author, isAvailable? "Available": "Checked Out");
}
}
class Library {
private Map<String, Book> books;
private Map<String, LocalDate> checkoutDates;
public Library() {
books = new HashMap<>();
checkoutDates = new HashMap<>();
}
public void addBook(Book book) {
books.put(book.getIsbn(), book);
}
public boolean checkoutBook(String isbn) {
Book book = books.get(isbn);
if (book!= null && book.isAvailable()) {
book.setAvailable(false);
checkoutDates.put(isbn, LocalDate.now());
return true;
}
return false;
}
public boolean returnBook(String isbn) {
Book book = books.get(isbn);
if (book!= null &&!book.isAvailable()) {
book.setAvailable(true);
checkoutDates.remove(isbn);
return true;
}
return false;
}
public void displayBooks() {
books.values().forEach(System.out::println);
}
}
```
---
## Next Steps
### Advanced Java Topics
- **Collections Framework**: ArrayList, HashMap, TreeSet, etc.
- **Lambda Expressions & Streams**: Functional programming in Java
- **Concurrency**: ExecutorService, CompletableFuture
- **Design Patterns**: Singleton, Factory, Observer, etc.
- **Testing**: JUnit, Mockito
- **Build Tools**: Maven, Gradle

### Java Frameworks 
- **Spring Framework**: Dependency injection, Spring Boot
- **Hibernate**: Object-Relational Mapping (ORM)
- **Apache Maven**: Project management and build automation
- **JUnit**: Unit testing framework

### Recommended Resources
- **Books**: "Effective Java" by Joshua Bloch
- **Online**: Oracle Java Documentation, Codecademy
- **Practice**: LeetCode, HackerRank, Codewars
- **Projects**: Build REST APIs, web applications
---

@Th3viousGameus

