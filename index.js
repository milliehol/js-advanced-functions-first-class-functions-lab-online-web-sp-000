// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2);
}

const returnLastTwoDrivers = function(array) {
  return array.slice(-2);
}

const selectingDrivers = function(array) {
  return array.slice(-2);
}

const createFareMultiplier = function(number) {
  return number*4;
}

const fareDoubler = function(array) {
  return array.slice(-2);
}

const fareTripler = function(array) {
  return array.slice(-2);
}

const selectDifferentDrivers = function(array, choose) {
  return choose(array);
}
