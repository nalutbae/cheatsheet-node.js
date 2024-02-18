// class example of visitor design pattern

class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  // A method that accommodates visitors
  accept(visitor) {
    visitor.visit(this);
  }
}

// Visitor interface
class Visitor {
  // A method to visit the book
  visit(book) {
    throw new Error("visit method must be implemented");
  }
}

// Price output visitor class
class PriceVisitor extends Visitor {
  // A method that visits the book and prints the price
  visit(book) {
    console.log(`Title: ${book.title}, Price: $${book.price}`);
  }
}

class User {
  // A method to visit all the books in the library to visitors
  visitBooks(books, visitor) {
    for (const book of books) {
      book.accept(visitor);
    }
  }
}

// Usage
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 15);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 12);
const book3 = new Book("1984", "George Orwell", 10);

const books = [book1, book2, book3];
const user = new User();

const priceVisitor = new PriceVisitor();

console.log("Prices of books:");
user.visitBooks(books, priceVisitor);
