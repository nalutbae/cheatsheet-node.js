// class example of command design pattern

// Command interface
class Command {
  execute() {
    throw new Error("execute method must be implemented");
  }
}

// Command classes that control each home appliance
class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class LightOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Home appliance
class Light {
  turnOn() {
    console.log("Light is on");
  }

  turnOff() {
    console.log("Light is off");
  }
}

// Remote control class
class RemoteControl {
  constructor() {
    this.command = null;
  }

  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Usage
const light = new Light();

const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remoteControl = new RemoteControl();

remoteControl.setCommand(lightOnCommand);
remoteControl.pressButton(); // Light is on

remoteControl.setCommand(lightOffCommand);
remoteControl.pressButton(); // Light is off
