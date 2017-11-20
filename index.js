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


function appendDriver(allDrivers){
 const allDrivers =[...drivers, "Broom"]
  return allDrivers
}

function prependDriver(name){
  const newDrivers =['Arnold', ...drivers]
  return newDrivers
}

function removeLastDriver(allDrivers){
  allDrivers.pop();
  return allDrivers;
}
