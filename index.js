"use strict";
// Task 1: Function to insert a value at a specified index in an array
function insertValueAtIndex(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
// Task 2: Simple shopping cart program using an array
let shoppingCart = [];
function addItem(item) {
    shoppingCart.push(item);
    console.log("Added item: " + item);
    console.log("Cart contents: " + shoppingCart);
}
function removeItem(item) {
    const index = shoppingCart.indexOf(item);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
        console.log("Removed item: " + item);
    }
    else {
        console.log("Item not found in cart: " + item);
    }
    console.log("Cart contents: " + shoppingCart);
}
function updateQuantity(item, quantity) {
    const index = shoppingCart.indexOf(item);
    if (index !== -1) {
        shoppingCart[index] = quantity.toString();
        console.log("Updated quantity of item: " + item);
    }
    else {
        console.log("Item not found in cart: " + item);
    }
    console.log("Cart contents: " + shoppingCart);
}
// Task 3: While loop to print the first 25 integers
let i = 1;
console.log("Task 3: Printing the first 25 integers");
while (i <= 25) {
    console.log(i);
    i++;
}
// Task 4: While loop to print the first 10 even numbers
i = 2;
let count = 0;
console.log("\nTask 4: Printing the first 10 even numbers");
while (count < 10) {
    console.log(i);
    i += 2;
    count++;
}
// Task 5: Function to calculate the factorial of a positive integer using a while loop
function calculateFactorial(n) {
    let factorial = 1;
    let j = 1;
    while (j <= n) {
        factorial *= j;
        j++;
    }
    return factorial;
}
console.log("\nTask 5: Calculating the factorial of 5");
const factorialOf5 = calculateFactorial(5);
console.log("Factorial of 5: " + factorialOf5);
// Task 6: Remove negative numbers from an array
function removeNegativeNumbers(numbers) {
    let k = 0;
    while (k < numbers.length) {
        if (numbers[k] < 0) {
            numbers.splice(k, 1);
        }
        else {
            k++;
        }
    }
    return numbers;
}
console.log("\nTask 6: Removing negative numbers from an array");
const numbersArray = [1, -2, 3, -4, 5];
const filteredArray = removeNegativeNumbers(numbersArray);
console.log("Filtered Array: " + filteredArray);
// Task 7: Function to calculate the sum of all numbers in an array using a while loop
function calculateSum(numbers) {
    let sum = 0;
    let l = 0;
    while (l < numbers.length) {
        sum += numbers[l];
        l++;
    }
    return sum;
}
console.log("\nTask 7: Calculating the sum of numbers in an array");
const sumOfNumbers = calculateSum([1, 2, 3, 4, 5]);
console.log("Sum of numbers: " + sumOfNumbers);
// Task 8: Program to convert Celsius temperatures to Fahrenheit using a while loop
const temperaturesInCelsius = [0, 25, 100];
const convertedTemperatures = [];
let m = 0;
console.log("\nTask 8: Converting Celsius temperatures to Fahrenheit");
while (m < temperaturesInCelsius.length) {
    const celsius = temperaturesInCelsius[m];
    const fahrenheit = (celsius * 9 / 5) + 32;
    convertedTemperatures.push(fahrenheit);
    console.log(`Celsius: ${celsius} => Fahrenheit: ${fahrenheit}`);
    m++;
}
