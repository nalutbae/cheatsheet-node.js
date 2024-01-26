// function example of builder design pattern

function User(name, age) {
  this.name = name;
  this.age = age;
}

function UserBuilder() {
  this.name = "";
  this.age = 0;
  this.build = function () {
    return new User(this.name, this.age);
  };
}

let user = new UserBuilder();
user.name = "John";
user.age = 36;
console.log(user.build());
