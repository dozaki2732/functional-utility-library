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

function concatArrays(firstArray, secondArray) {
   let bothArrays = firstArray.concat(secondArray);
   return bothArrays;
}

//add something to the end of an array using concat instead of push

function addWithConcat(item) {
   let newListOfBeer = listofBeer.concat(item);
   return newListOfBeer;
}

//use reduce method to analyze data

var watchList = [
   {
      Title: "Inception",
      Year: "2010",
      Rated: "PG-13",
      Released: "16 Jul 2010",
      Runtime: "148 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer: "Christopher Nolan",
      Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      Plot:
         "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      Language: "English, Japanese, French",
      Country: "USA, UK",
      Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.8",
      imdbVotes: "1,446,708",
      imdbID: "tt1375666",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Interstellar",
      Year: "2014",
      Rated: "PG-13",
      Released: "07 Nov 2014",
      Runtime: "169 min",
      Genre: "Adventure, Drama, Sci-Fi",
      Director: "Christopher Nolan",
      Writer: "Jonathan Nolan, Christopher Nolan",
      Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      Plot:
         "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Language: "English",
      Country: "USA, UK",
      Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.6",
      imdbVotes: "910,366",
      imdbID: "tt0816692",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "The Dark Knight",
      Year: "2008",
      Rated: "PG-13",
      Released: "18 Jul 2008",
      Runtime: "152 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer:
         "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      Plot:
         "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      Language: "English, Mandarin",
      Country: "USA, UK",
      Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      Metascore: "82",
      imdbRating: "9.0",
      imdbVotes: "1,652,832",
      imdbID: "tt0468569",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Batman Begins",
      Year: "2005",
      Rated: "PG-13",
      Released: "15 Jun 2005",
      Runtime: "140 min",
      Genre: "Action, Adventure",
      Director: "Christopher Nolan",
      Writer:
         "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      Plot:
         "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      Language: "English, Urdu, Mandarin",
      Country: "USA, UK",
      Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      Metascore: "70",
      imdbRating: "8.3",
      imdbVotes: "972,584",
      imdbID: "tt0372784",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      Plot:
         "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Language: "English, Spanish",
      Country: "USA, UK",
      Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      Metascore: "83",
      imdbRating: "7.9",
      imdbVotes: "876,575",
      imdbID: "tt0499549",
      Type: "movie",
      Response: "True",
   },
];

//get average rating of director inputed

function getAverageRating(directorName) {
   let filteredMovies = watchList.filter(
      (movie) => movie["Director"] == directorName
   );
   console.log(filteredMovies);
   let movieRatingSum = filteredMovies.reduce(
      (sum, movie) => sum + Number(movie.imdbRating),
      0
   );
   let averageRatings = movieRatingSum / filteredMovies.length;
   return averageRatings;
}

// using higher order functions map/filter/reduce
function squareArray(arr) {
   let positiveNum = arr.filter((num) => num > 0);
   let positiveInt = positiveNum.filter(
      (num) => String(num).indexOf(".") == -1
   );
   let squaredInt = positiveInt.map((num) => num * num);

   return squaredInt;
}

//  Sort an Array Alphabetically using the sort Method
function sortAlphabetically(input) {
   var listofBeerAndInput = [
      " kirin",
      " corona",
      " modelo",
      " sapporo",
      " pabst",
      " stella",
      " " + input,
   ];
   return listofBeerAndInput.sort();
}

// Split a String into an Array of Words Using the split Method

function splitStringIntoArray(stringInput) {
   let splitting = stringInput.split(/\W/);
   console.log(splitting);
   return splitting;
}

// Combine an Array into a String Using the join Method

let combinationString = str.split(/\W/).join(" ");
console.log(combinationString);
return combinationString;

// Apply Functional Programming to Convert Strings to URL Slugs

// Use the every Method to Check that Every Element in an Array Meets a Criteria
// Use the some Method to Check that Any Elements in an Array Meet a Criteria
