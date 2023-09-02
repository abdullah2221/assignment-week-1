// Task 1: Convert temperature from Celsius to Fahrenheit and vice versa
function convertTemperature(temperature) {
    var celsiusToFahrenheit = (temperature * 9 / 5) + 32;
    var fahrenheitToCelsius = (temperature - 32) * 5 / 9;
    console.log("Celsius to Fahrenheit: ".concat(celsiusToFahrenheit, "\u00B0F"));
    console.log("Fahrenheit to Celsius: ".concat(fahrenheitToCelsius, "\u00B0C"));
}
// Task 2: Calculate percentage
function calculatePercentage(total, partial) {
    var percentage = (partial / total) * 100;
    console.log("Percentage: ".concat(percentage.toFixed(2), "%"));
}
// Task 3: Convert days into weeks and days
function convertDaysToWeeksAndDays(days) {
    var weeks = Math.floor(days / 7);
    var remainingDays = days % 7;
    console.log("".concat(days, " days = ").concat(weeks, " weeks and ").concat(remainingDays, " days."));
}
// Task 4: Calculate discount based on product price
function calculateDiscount(price) {
    var discount;
    if (price > 100) {
        discount = 0.10;
    }
    else {
        discount = 0.05;
    }
    var discountedPrice = price - (price * discount);
    console.log("Discounted Price: $".concat(discountedPrice.toFixed(2)));
}
// Task 5: Determine the category based on age
function determineCategory(age) {
    var category;
    if (age >= 0 && age <= 12) {
        category = "Child";
    }
    else if (age >= 13 && age <= 19) {
        category = "Teenager";
    }
    else {
        category = "Adult";
    }
    console.log("Category: ".concat(category));
}
// Task 6: Check and suggest clothing based on temperature
function suggestClothing(temperature) {
    if (temperature < 10) {
        console.log("It's cold. Wear warm clothes.");
    }
    else if (temperature >= 10 && temperature < 20) {
        console.log("It's cool. A light jacket may be needed.");
    }
    else {
        console.log("It's warm. Enjoy the weather!");
    }
}
// Task 7: Check divisibility by 3 and 5
function checkDivisibility(number) {
    var output = "";
    if (number % 3 === 0) {
        output += "Divisible by 3 ";
    }
    if (number % 5 === 0) {
        output += "Divisible by 5 ";
    }
    if (output === "") {
        output = "Not divisible by 3 or 5";
    }
    console.log(output);
}
// Task 8: Check if a year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("".concat(year, " is a leap year."));
    }
    else {
        console.log("".concat(year, " is not a leap year."));
    }
}
// Task 9: Determine the day of the week
function determineDayOfWeek(dayNumber) {
    var day;
    switch (dayNumber) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Invalid day number";
            break;
    }
    console.log("Day of the week: ".concat(day));
}
// Task 10: Calculate tax based on units consumed
function calculateTax(unitsConsumed) {
    var taxPercentage = 0;
    if (unitsConsumed > 500) {
        taxPercentage = 0.25;
    }
    else if (unitsConsumed > 200) {
        taxPercentage = 0.15;
    }
    else if (unitsConsumed > 100) {
        taxPercentage = 0.10;
    }
    var billAmount = unitsConsumed * (1 + taxPercentage);
    console.log("Bill Amount: $".concat(billAmount.toFixed(2)));
}
