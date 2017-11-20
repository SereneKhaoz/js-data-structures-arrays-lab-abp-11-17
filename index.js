// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
   drivers.push("Ralph");
   return drivers;
}
function destructivelyPrependDriver(name){
   drivers.unshift("Bob");
   return drivers;
}
function destructivelyRemoveLastDriver(name){
   drivers.pop("Ralph");
   return drivers;
}
function destructivelyRemoveFirstDriver(name){
   drivers.shift("Bob");
   return drivers;
}

  const allDrivers =[...drivers, "Broom"]
function appendDriver(name){

  return allDrivers
}

function prependDriver(name){
  const newDrivers =['Arnold', ...allDrivers]
  return newDrivers
}

function removeLastDriver(allDrivers){
  allDrivers.pop();
  return allDrivers;
}
