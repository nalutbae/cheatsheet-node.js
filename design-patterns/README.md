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

The Structural pattern is a pattern that creates a new feature or complex structure by combining classes or objects into a larger structure.These patterns can organize and organize the relationship between classes and objects to flexibly and expand the structure of the software.

Structural patterns mainly use the inheritance, synthesis and configuration of the object to organize the elements of the system.These patterns can be used for various purposes:

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

- **Flyweight**: This pattern is a pattern for efficiently handling a large number of similar objects.This pattern shares objects to optimize memory usage and improve performance.It is mainly implemented by sharing the unchanging part of the object's condition.

  - [Examples implemented using function](./flyweight.function.js)
  - [Examples implemented using class](./flyweight.class.js)

- **Proxy**: It is a pattern that provides a proxy for other objects to control access to that object or provide additional functions.With this pattern, the client allows you to indirectly approach the actual object and indirectly through the representative.This is used for various purposes such as the creation and initialization of the object, access control, caching, and logging.

  - [Examples implemented using function](./proxy.function.js)
  - [Examples implemented using class](./proxy.class.js)

## Behavioral Patterns

The Behavioral pattern is a pattern that organizes the interaction between objects and classes, and is designed around the behavior between objects.This pattern defines the responsibilities, roles, and cooperation between objects to organize and manage the operation of the system.

Behavioral patterns are mainly operated around objects between objects, and can be used for the following purposes:

It encapsulates the behavior between objects to increase flexibility: encapsulates the behavior of the object to minimize the impact on changes and increase reuse.

Defining and organizing relationships between objects: clearly defines the interaction between objects to improve the readability of the code and facilitate maintenance.

Make the operation of the system flexibly: using various behavior patterns to support dynamic interactions between objects to improve the flexibility of the system.

- **Observer**: Defining a one -to -one dependency between objects, so that if the state of an object is changed, other objects related to this automatically receive the notification.

  - [Examples implemented using function](./observer.function.js)
  - [Examples implemented using class](./observer.class.js)

- **Strategy**: It is a pattern that allows you to dynamically change the object's actions. This defines multiple algorithms that perform the same tasks and can be replaced by encapsulating these algorithms. Strategy patterns can minimize the effects of existing code when changing or expanding the implementation of the algorithm.

  - [Examples implemented using function](./strategy.function.js)
  - [Examples implemented using class](./strategy.class.js)

- **Command**: It encapsulates the request in the form of an object to parameters, and supports the connectivity with different requests, cues or logs, cancellation of requests and other requests.This pattern allows you to reduce the combination between objects receiving requests and objects that handle requests, and change or expand objects that handle requests.

  - [Examples implemented using function](./command.function.js)
  - [Examples implemented using class](./command.class.js)
