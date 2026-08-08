# Java II

## Advanced Java & Concurrency

This section covers advanced Java features including the collections framework, multithreading, and file I/O.

### Key Topics
- Encapsulation, access modifiers, and data hiding
- Inheritance, method overriding, and covariant returns
- Polymorphism, dynamic dispatch, and instanceof
- Interfaces, default methods, and functional interfaces
- Abstract classes vs interfaces
- Packages, imports, and access control
- Exception handling: try/catch/finally, custom exceptions
- File I/O: java.io, NIO.2, and Path API
- Multithreading: Thread, Runnable, and lifecycle
- Collections framework, generics, and type safety

```java
// Example: Stream processing
List<String> names = List.of("Alice", "Bob", "Charlie");
names.stream()
     .filter(name -> name.startsWith("A"))
     .forEach(System.out::println);
```

## References
- [Java Tutorials - Oracle](https://docs.oracle.com/javase/tutorial/)
