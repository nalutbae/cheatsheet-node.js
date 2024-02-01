# Design Pattterns

This is an actual example that uses the design pattern of GOF using JavaScript.

## Creational Patterns

Creational patterns are ones that create objects for you, rather than having you instantiate objects directly. This gives your program more flexibility in deciding which objects need to be created for a given case.

- **Abstract factory**: provide an interface for creating families of related or dependent objects without specifying their concrete classes.

  - [Examples implemented using function](./abstract.factory.function.js)
  - [Examples implemented using class](./abstract.factory.class.js)

- **Builder**: separate the construction of a complex object from its representation, allowing the same construction process to create various representations.

  - [Examples implemented using function](./builder.function.js)
  - [Examples implemented using class](./builder.class.js)

- **Factory method**: define an interface for creating a single object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

  - [Examples implemented using function](./factory.method.function.js)
  - [Examples implemented using class](./factory.method.class.js)

- **Prototype**: specify the kinds of objects to create using a prototypical instance, and create new objects from the 'skeleton' of an existing object, thus boosting performance and keeping memory footprints to a minimum.

  - [Examples implemented using function](./prototype.function.js)
  - [Examples implemented using class](./prototype.class.js)

- **Singleton**: ensure a class has only one instance, and provide a global point of access to it.
  - [Examples implemented using function](./singleton.function.js)
  - [Examples implemented using class](./singleton.class.js)

## Structural Patterns

Structural patterns are associated with class and object configuration.Use the inheritance to configure the interface and configure the object to define a new feature.

- **Adapter**: A class with an uninterrupted interface is wrapped around the class where it already exists so that it can work together.

  - [Examples implemented using function](./adapter.function.js)
  - [Examples implemented using class](./adapter.class.js)

- **Bridge**: Separate abstraction from the implementation so that the two can be changed independently.

  - [Examples implemented using function](./bridge.function.js)
  - [Examples implemented using class](./bridge.class.js)

- **Composite**: It organizes several similar objects to manipulate it like an object.

  - [Examples implemented using function](./composite.function.js)
  - [Examples implemented using class](./composite.class.js)

- **Decorator**: This is a pattern that dynamically adds or finances the existing method.

  - [Examples implemented using function](./decorator.function.js)
  - [Examples implemented using class](./decorator.class.js)

- **Facade**: Provides a simplified interface for large scale code texts.

  - [Examples implemented using function](./facade.function.js)
  - [Examples implemented using class](./facade.class.js)

## Behavioral Patterns
