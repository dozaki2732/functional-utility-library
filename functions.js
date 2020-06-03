var numberList = [2, 4, 7, 23, 64, 534, 7, 45, 265];
//filter the array of numbers by seeing what input it is divisible by
Array.prototype.myFilter = function (callback) {
   var newArray = [];
   for (let i = 0; i < numberList.length; i++) {
      if (callback(numberList[i]) === true) {
         newArray.push(numberList[i]);
      }
   }
   console.log(newArray);
   return newArray;
};
// see if the number is divisible by the input number
function implementFilter(input) {
   var new_list = numberList.myFilter(function (item) {
      console.log(new_list);
      //see if the remainder for the number divided by input is 0 (it can be divided by that number)
      return item % input === 0;
   });
   return new_list;
}

//return slice of an array
var listOfAnimals = [
   " goat",
   " dog",
   " bird",
   " rat",
   " penguin",
   " tiger",
   " elephant",
];

function sliceArray(begin, end) {
   let slicedArray = listOfAnimals.slice(begin, end);
   return slicedArray;
}

//use slice instead of splice to remove elements from an array
var listofBeer = [
   " kirin",
   " corona",
   " modelo",
   " sapporo",
   " pabst",
   " stella",
];

function removeWithSlice(begin, end) {
   let reducedArray = listofBeer.slice(begin, end);
   return reducedArray;
}

//combine two arrays using concat

// function concatArrays(firstArray, secondArray)

//add something to the end of an array using concat instead of push

function addWithConcat(item) {
   let newListOfBeer = listofBeer.concat(item);
   return newListOfBeer;
}
