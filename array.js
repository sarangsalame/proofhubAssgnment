// 5. Write a program in javascript for the following: -

//   a.declare array
let arr = [];

// b.add item
arr.push("tata", "maruti", "bmw", "rangerover");
console.log("New array: ", arr);


// c.delete an item
let deleteFromLast = arr.pop()
console.log(deleteFromLast)


// d. add a particular index
function addElementInAnArray(ind, item, arr) {
  if (arr.length >= ind) {
    arr.splice(ind, 0, item)
    return arr
  } else {
    return "please provide valid input"
  }
}
let updatedArr = addElementInAnArray(2, "scorpio", arr)
console.log(updatedArr)



// e.delete from a particular index
function deleteElementFromArray(ind, arr) {
  if (arr.length >= ind) {
    arr.splice(ind, 1);
    return arr
  }
  else {
    return "please provide valid input"
  }
}
let deletedArr = deleteElementFromArray(1, arr)
console.log(deletedArr)