const peopleNames = require("../country/state/city/index");
const getPeopleNames = require("../utilities/utils/index");

const getPeopleInCity = (peopleNames) => {
  return getPeopleNames(peopleNames);
  console.log(getPeopleNames);
};

module.exports = getPeopleInCity;
