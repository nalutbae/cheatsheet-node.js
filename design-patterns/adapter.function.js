// function example of adapter design pattern

// EU plug interface
function createEUPlug() {
  return {
    type: "EU",
    supplyPower: function () {
      return "Power supplied by EU plug";
    },
  };
}

// US plug interface
function createUSPlug() {
  return {
    type: "US",
    supplyPower: function () {
      return "Power supplied by US plug";
    },
  };
}

// Adapter function that converts EU plugs to US plugs
function createEUToUSAdapter(euPlug) {
  return {
    supplyPower: function () {
      const powerFromEU = euPlug.supplyPower();
      return powerFromEU.replace("EU", "US");
    },
  };
}

// device functions using electricity
function useElectricity(plug) {
  return plug.supplyPower();
}

// Create a device that works with EU plugs
const euPlug = createEUPlug();
console.log(useElectricity(euPlug)); // Power supplied by EU plug

// Create an adapter that converts EU plugs to US plugs
const euPlugForAdapter = createEUPlug();
const adapter = createEUToUSAdapter(euPlugForAdapter);
console.log(useElectricity(adapter)); // Power supplied by US plug
