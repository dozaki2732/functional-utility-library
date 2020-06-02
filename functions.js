var numberList = [2, 4, 7, 23, 64, 534, 7, 45, 265];

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
function implementFilter(input) {
   var new_list = numberList.myFilter(function (item) {
      //console.log(new_list);
      return item % input === 0;
   });
   return new_list;
}
