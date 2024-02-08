// function example of command design pattern

// A function that turns on home appliances
function turnOnLight() {
  console.log("Light is on");
}

// A function that attracts home appliances
function turnOffLight() {
  console.log("Light is off");
}

// Remote control class
function RemoteControl() {
  let command = null;

  function setCommand(cmd) {
    command = cmd;
  }

  function pressButton() {
    if (command) {
      command();
    } else {
      console.log("No command is set.");
    }
  }

  return {
    setCommand,
    pressButton,
  };
}

// Usage
const remoteControl = new RemoteControl();

remoteControl.setCommand(turnOnLight);
remoteControl.pressButton(); // Light is on

remoteControl.setCommand(turnOffLight);
remoteControl.pressButton(); // Light is off
