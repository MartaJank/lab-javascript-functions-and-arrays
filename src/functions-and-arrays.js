//Iteration 1

function maxOfTwoNumbers(num1, num2){
  if (num1 > num2){
    return num1;
  } else if (num1 < num2){
    return num2;
  } else {
    return num1;
  }
}

maxOfTwoNumbers(6, 9);

//Iteration 2

function findLongestWord(array){
  let word = "";
  if(array[0]){
  for (let i = 0; i < array.length; i++) {
    if (word.length < array[i].length) {
      word = array[i];
    }
  }
    return word;
  } else {
    return null;
}
}

const words = ['mystery', 'brother', 'pristrdew', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot']

findLongestWord(words);

//Iteration 3

function sumNumbers(array){
  var total = 0;

  for(var i = 0; i < array.length; i++){                  
    if(typeof array[i] !== 'number'){
      continue;
    }
      total += array[i];
    }
      return total;
}            

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]
sumNumbers(numbers);

//Bonus Iteration 3.1
function sum(array) {
  var total = 0;

  for(var i = 0; i < array.length; i++) {                  
      if (typeof array[i] === 'object') {
        throw new Error("Unsupported data type sir or ma'am");
      } else if (typeof array[i] === 'string') {
        total += array[i].length
      }else {
        total += array[i];
      } 
    }
  return total;
}

//Iteration 4
//Level 1
function averageNumbers(array) {
    if (array.length === 0 ) {
        return null;
    }
    return sumNumbers(array) / array.length;
}

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
averageNumbers(numbers2)

//Level 2
function averageWordLength(array){
  if (array.length === 0) {
    return null
  }
  var suma = 0;
  for(var x = 0; x < array.length; x++){
    suma += array[x].length;
  } 
  var promedio = suma / array.length;
  return promedio
}

const words2 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
averageWordLength(words2);

//Bonus Iteration 4.1
function avg(arr) {
  if (arr.length === 0) {
    return null
  }
  var sum = 0;

  for(var i = 0; i < arr.length; i++) {                  
      if (typeof arr[i] === 'object') {
        throw new Error("Unsupported data type sir or ma'am");
      } else if (typeof arr[i] === 'string') {
        sum += arr[i].length
      } else {
        sum += arr[i];
      } 
    }
  let average = sum / arr.length;
  return Number(average.toFixed(2))
}

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

avg(mixedArr);

//Iteration 5
const words3 = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];


function uniquifyArray(array) { 
  if (array.length === 0) {
    return null
  }
  
  const unique = new Set(array);
  const backToArray = [...unique];
    return backToArray;
}

//Iteration 6
function doesWordExist (array, term){
  if (array.length === 0) {
    return null
  }
  
  for(var i=0; i<array.length; i++) {
    if (array[i] === term) {
      return true
     }
    }
  return false
}


const words4 = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

doesWordExist (words4, 'parrot');

//Iteration 7
function howManyTimes (array, term) {
  var n = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] == term){n++}
    }
    return n;
}

const words5 = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter',
  'disobedience'
];

howManyTimes (words5, 'disobedience');

