// singleton class is a class that can only be instantiated once

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance = new Singleton();
const instance2 = new Singleton();
console.log(instance === instance2);
