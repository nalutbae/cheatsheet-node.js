// function example of visitor design pattern

// Book object creation function
function createBook(title, author, price) {
  return {
    title,
    author,
    price,
    accept(visitor) {
      visitor(this);
    },
  };
}

// Visitor function
function createVisitor() {
  return {
    visit(book) {
      throw new Error("visit method must be implemented");
    },
  };
}

// Price output visitor function
function createPriceVisitor() {
  return {
    visit(book) {
      console.log(`Title: ${book.title}, Price: $${book.price}`);
    },
  };
}

// user function
function createUser() {
  return {
    visitBooks(books, visitor) {
      for (const book of books) {
        book.accept(visitor);
      }
    },
  };
}

// Usage
const book1 = createBook("The Great Gatsby", "F. Scott Fitzgerald", 15);
const book2 = createBook("To Kill a Mockingbird", "Harper Lee", 12);
const book3 = createBook("1984", "George Orwell", 10);

const books = [book1, book2, book3];
const user = createUser();

const priceVisitor = createPriceVisitor();

console.log("Prices of books:");
user.visitBooks(books, priceVisitor.visit);
