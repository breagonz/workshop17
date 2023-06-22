// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers. 
// b. All items should be strings. 
// c. Objects and properties should have commas seperating them. 
// d. Connect the coffee_data.js file to the index.js file. 

const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },

    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
]

module.exports = coffeeMenu

// Print an array of all the drinks on the menu.

const printDrinks = (item) => {
    return item.name;
} 
console.log(coffeeMenu.map(printDrinks));

// Print an array of drinks that cost 5 and under.

const underFive = (item) => {
    return item.price <= 5;
}
const itemsUnderFive = coffeeMenu.filter(underFive);
console.table(itemsUnderFive);

// Print an array of drinks that are priced at an even number.

const evenNumber = (item) => {
    return item.price %2 == 0; 
}
const evenDrinks = coffeeMenu.filter(evenNumber);
console.table(evenDrinks);

// Print the total if you were to order one of every drink.

const numbers = (item) => {
    return item.price;
}

const numbersFiltered = coffeeMenu.map(numbers)

const sumTotalCost = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
const totalPrice = numbersFiltered.reduce(sumTotalCost);
console.log(totalPrice)

// Print an array with all the drinks that are seasonal.

const isSeasonal = (name) => {
    return name.seasonal === true;
}

const seasonal = coffeeMenu.filter(isSeasonal);
console.table (seasonal);

// Print all the seasonal drinks with the words 
//"with imported beans" after the item name. 

const seasonalText = (item) => {
    return item.name;
}

console.log(seasonal.map(seasonalText) + ' with imported beans')

