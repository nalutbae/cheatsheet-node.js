// function example of mediator design pattern

// Mediator function
function createChatRoom() {
  const users = [];

  // A function that adds users to the chat room
  function addUser(user) {
    users.push(user);
  }

  // A function that send messages
  function sendMessage(sender, message) {
    for (const user of users) {
      if (user !== sender) {
        user.receiveMessage(sender, message);
      }
    }
  }

  return {
    addUser,
    sendMessage,
  };
}

// User function
function createUser(name, chatRoom) {
  // A function that send messages
  function sendMessage(message) {
    chatRoom.sendMessage(this, message);
  }

  // A function that receives a message
  function receiveMessage(sender, message) {
    console.log(`${sender.name} -> ${name}: ${message}`);
  }

  return {
    name,
    sendMessage,
    receiveMessage,
  };
}

// Usage

const chatRoom = createChatRoom();

const user1 = createUser("Alice", chatRoom);
const user2 = createUser("Bob", chatRoom);
const user3 = createUser("Charlie", chatRoom);

chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

user1.sendMessage("Hello, everyone!"); // Alice -> Bob: Hello, everyone!, Alice -> Charlie: Hello, everyone!
