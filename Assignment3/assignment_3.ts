// Task 1: Convert temperature from Celsius to Fahrenheit and vice versa
function convertTemperature(temperature: number) {
    const celsiusToFahrenheit = (temperature * 9/5) + 32;
    const fahrenheitToCelsius = (temperature - 32) * 5/9;
    console.log(`Celsius to Fahrenheit: ${celsiusToFahrenheit}°F`);
    console.log(`Fahrenheit to Celsius: ${fahrenheitToCelsius}°C`);
}

// Task 2: Calculate percentage
function calculatePercentage(total: number, partial: number) {
    const percentage = (partial / total) * 100;
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
}

// Task 3: Convert days into weeks and days
function convertDaysToWeeksAndDays(days: number) {
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    console.log(`${days} days = ${weeks} weeks and ${remainingDays} days.`);
}

// Task 4: Calculate discount based on product price
function calculateDiscount(price: number) {
    let discount;
    if (price > 100) {
        discount = 0.10;
    } else {
        discount = 0.05;
    }
    const discountedPrice = price - (price * discount);
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
}

// Task 5: Determine the category based on age
function determineCategory(age: number) {
    let category;
    if (age >= 0 && age <= 12) {
        category = "Child";
    } else if (age >= 13 && age <= 19) {
        category = "Teenager";
    } else {
        category = "Adult";
    }
    console.log(`Category: ${category}`);
}

// Task 6: Check and suggest clothing based on temperature
function suggestClothing(temperature: number) {
    if (temperature < 10) {
        console.log("It's cold. Wear warm clothes.");
    } else if (temperature >= 10 && temperature < 20) {
        console.log("It's cool. A light jacket may be needed.");
    } else {
        console.log("It's warm. Enjoy the weather!");
    }
}

// Task 7: Check divisibility by 3 and 5
function checkDivisibility(number: number) {
    let output = "";
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
function isLeapYear(year: number) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

// Task 9: Determine the day of the week
function determineDayOfWeek(dayNumber: number) {
    let day;
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
    console.log(`Day of the week: ${day}`);
}

// Task 10: Calculate tax based on units consumed
function calculateTax(unitsConsumed: number) {
    let taxPercentage = 0;
    if (unitsConsumed > 500) {
        taxPercentage = 0.25;
    } else if (unitsConsumed > 200) {
        taxPercentage = 0.15;
    } else if (unitsConsumed > 100) {
        taxPercentage = 0.10;
    }
    const billAmount = unitsConsumed * (1 + taxPercentage);
    console.log(`Bill Amount: $${billAmount.toFixed(2)}`);
}


