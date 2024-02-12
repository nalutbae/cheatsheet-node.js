// class example of mediator design pattern

// Mediator class
class ChatRoom {
  constructor() {
    this.users = [];
  }

  // Add user to the chat room
  addUser(user) {
    this.users.push(user);
  }

  // Message transmission
  sendMessage(sender, message) {
    for (const user of this.users) {
      if (user !== sender) {
        user.receiveMessage(sender, message);
      }
    }
  }
}

// User class
class User {
  constructor(name, chatRoom) {
    this.name = name;
    this.chatRoom = chatRoom;
  }

  // Message transmission
  sendMessage(message) {
    this.chatRoom.sendMessage(this, message);
  }

  // Message reception
  receiveMessage(sender, message) {
    console.log(`${sender.name} -> ${this.name}: ${message}`);
  }
}

// Usage
const chatRoom = new ChatRoom();

const user1 = new User("Alice", chatRoom);
const user2 = new User("Bob", chatRoom);
const user3 = new User("Charlie", chatRoom);

chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

user1.sendMessage("Hello, everyone!"); // Alice -> Bob: Hello, everyone!, Alice -> Charlie: Hello, everyone!
