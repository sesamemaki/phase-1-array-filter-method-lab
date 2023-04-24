const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function findMatching(array, name) {
  return array.filter((driver) => driver.toLowerCase() === name.toLowerCase());
}
console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(array, attribute) {
  return array.filter(function (driver) {
    return (
      driver.toLowerCase().substring(0, attribute.length) ===
      attribute.toLowerCase()
    );
  });
}

console.log(fuzzyMatch(drivers, "Sa"));

function matchName(drivers, argument) {
  return drivers.filter(function (driver) {
    return driver.name === argument;
  });
}
