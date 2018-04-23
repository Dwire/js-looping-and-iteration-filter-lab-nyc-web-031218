// Code your solution in this file
function findMatching(arr, name) {
  return arr.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(arr, name) {
  return arr.filter(driver => driver.substring(0, 1).toUpperCase() === name.substring(0, 1).toUpperCase())
}

function matchName(arr, name) {
  return arr.filter(obj => obj.name === name)
}
