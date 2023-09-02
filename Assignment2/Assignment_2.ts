// Task 1: Remove all negative numbers from an array using filter
const numbers1: number[] = [1, -2, 3, -4, 5, -6];
const filteredNumbers1: number[] = numbers1.filter(num => num >= 0);
console.log("Array with negative numbers removed:", filteredNumbers1);

// Task 2: Multiply each number in an array by 2 using map
const numbers2: number[] = [1, 2, 3, 4, 5];
const doubledNumbers: number[] = numbers2.map(num => num * 2);
console.log("Array with numbers multiplied by 2:", doubledNumbers);

// Task 3: Filter strings with more than 5 characters from an array
const fruits: string[] = ["apple", "banana", "cherry", "date", "grape"];
const longFruits: string[] = fruits.filter(fruit => fruit.length > 5);
console.log("Fruits with more than 5 characters:", longFruits);

// Task 4: Create a new array containing squares of even numbers using map and filter
const numbers3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredEvenNumbers: number[] = numbers3
    .filter(num => num % 2 === 0)
    .map(num => num * num);
console.log("Squares of even numbers:", squaredEvenNumbers);

// Task 5: Convert temperatures from Celsius to Fahrenheit using map
const temperaturesCelsius: number[] = [0, 10, 20, 30, 40];
const temperaturesFahrenheit: number[] = temperaturesCelsius.map(
    celsius => (celsius * 9/5) + 32
);
console.log("Temperatures in Fahrenheit:", temperaturesFahrenheit);

// Task 6: Create a new array containing doubled values of odd numbers using map and filter
const numbers4: number[] = [3, 6, 9, 12, 15, 18];
const doubledOddNumbers: number[] = numbers4
    .filter(num => num % 2 !== 0)
    .map(num => num * 2);
console.log("Doubled values of odd numbers:", doubledOddNumbers);

// Task 7: Log names with exclamation marks at the end using forEach
const names: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach(name => console.log(name + "!"));
