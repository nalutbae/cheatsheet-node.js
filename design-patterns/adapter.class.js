// class example of adapter design pattern

// EU Plug interface
class EUPlug {
  constructor() {
    this.type = "EU";
  }

  // A method that receives electricity from the EU plug
  supplyPower() {
    return "Power supplied by EU plug";
  }
}

// US plug interface
class USPlug {
  constructor() {
    this.type = "US";
  }

  // Method that receives electricity from US plugs
  supplyPower() {
    return "Power supplied by US plug";
  }
}

// Adapter class
class EUToUSAdapter {
  constructor(euPlug) {
    this.euPlug = euPlug;
  }

  // A method that converts EU plugs to US plugs to supply electricity
  supplyPower() {
    // EU plug receives electricity and returns to a US plug
    const powerFromEU = this.euPlug.supplyPower();
    return powerFromEU.replace("EU", "US");
  }
}

// EU plug device
class Device {
  constructor(plug) {
    this.plug = plug;
  }

  // Methods for electricity
  useElectricity() {
    return this.plug.supplyPower();
  }
}

// Create a device that works with EU plugs
const euPlug = new EUPlug();
const deviceWithEUPlug = new Device(euPlug);
console.log(deviceWithEUPlug.useElectricity()); // Power supplied by EU plug

// Create an adapter that converts EU plugs to US plugs
const adapter = new EUToUSAdapter(euPlug);
const deviceWithUSPlug = new Device(adapter);
console.log(deviceWithUSPlug.useElectricity()); // Power supplied by US plug
