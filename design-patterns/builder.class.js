// class example of builder design pattern

class User {
  setName() {}
  setAge() {}
}

class UserBuilder extends User {
  constructor() {
    super();
    this.user = null;
  }
  setName(name) {
    this.name = name;
    return this;
  }
  setAge(age) {
    this.age = age;
    return this;
  }
  build() {
    this.user = new User();
    this.user.name = this.name;
    this.user.age = this.age;
    return this.user;
  }
}
module.exports = UserBuilder;

const user = new UserBuilder().setName("John").setAge(36).build();
console.log(user);
