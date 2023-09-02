// Task 1: Remove all negative numbers from an array using filter
var numbers1 = [1, -2, 3, -4, 5, -6];
var filteredNumbers1 = numbers1.filter(function (num) { return num >= 0; });
console.log("Array with negative numbers removed:", filteredNumbers1);
// Task 2: Multiply each number in an array by 2 using map
var numbers2 = [1, 2, 3, 4, 5];
var doubledNumbers = numbers2.map(function (num) { return num * 2; });
console.log("Array with numbers multiplied by 2:", doubledNumbers);
// Task 3: Filter strings with more than 5 characters from an array
var fruits = ["apple", "banana", "cherry", "date", "grape"];
var longFruits = fruits.filter(function (fruit) { return fruit.length > 5; });
console.log("Fruits with more than 5 characters:", longFruits);
// Task 4: Create a new array containing squares of even numbers using map and filter
var numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var squaredEvenNumbers = numbers3
    .filter(function (num) { return num % 2 === 0; })
    .map(function (num) { return num * num; });
console.log("Squares of even numbers:", squaredEvenNumbers);
// Task 5: Convert temperatures from Celsius to Fahrenheit using map
var temperaturesCelsius = [0, 10, 20, 30, 40];
var temperaturesFahrenheit = temperaturesCelsius.map(function (celsius) { return (celsius * 9 / 5) + 32; });
console.log("Temperatures in Fahrenheit:", temperaturesFahrenheit);
// Task 6: Create a new array containing doubled values of odd numbers using map and filter
var numbers4 = [3, 6, 9, 12, 15, 18];
var doubledOddNumbers = numbers4
    .filter(function (num) { return num % 2 !== 0; })
    .map(function (num) { return num * 2; });
console.log("Doubled values of odd numbers:", doubledOddNumbers);
// Task 7: Log names with exclamation marks at the end using forEach
var names = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach(function (name) { return console.log(name + "!"); });
