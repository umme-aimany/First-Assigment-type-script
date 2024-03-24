//////////////////////question :01///////////////////////////////////////////
console.log("1.hello world");
/////////////////////////QUESTION:02//////////////////////////////////
let name1: string = "UMME AIMAN";
console.log(`2. hello ${name1}, would you like to learn TypeScript today.`);

//////////////////////QUESTION:03////////////////////////////////
let personName: string = "UMME AIMAN";
console.log("3.");
// Convert to lowercase
console.log("Lowercase: " + personName.toLowerCase());

// Convert to uppercase
console.log("Uppercase: " + personName.toUpperCase());

// Convert to title case
console.log("Title case: " + personName.replace(/\b\w/g, (char) => char.toUpperCase()));

/////////////////////question 04/////////////////////////////////
let quote1: string = "In the end, we will remember not the words of our enemies, but the silence of our friends.";
let author1: string = "Martin Luther King Jr.";

console.log(`"${quote1}" - ${author1}`);

//////////////////////QUESTION :05///////////////////////////////
let famous_person: string = "Albert Einstein";
let einstein_quote: string = "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.";
let message: string = `"${einstein_quote}" - ${famous_person}`;

console.log(message);

//////////////////////////QUESTION:06//////////////////////////////////////////////
// Store a person's name with whitespace characters
let personNamesWithWhitespaces: string = "\t\n   John Doe   \n\t";

// Print the name with whitespace
console.log("Name with whitespace:", personNamesWithWhitespaces);

// Strip the whitespace using trim() function
let strippeddName: string = personNamesWithWhitespaces.trim();

// Print the stripped name
console.log("Stripped name:", strippeddName);

//////////////////////////QUESTION:07/////////////////////////////////
console.log("Addition:", 5 + 3);
console.log("Subtraction:", 10 - 2);
console.log("Multiplication:", 4 * 2);
console.log("Division:", 16 / 2);

///////////////////////QUESTION:08///////////////////////////////
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

/////////////////////////QUESTION:09///////////////////////////////
let favoritesNumber = 7;
let messagee = `My favorite number is ${favoritesNumber}.`;
console.log(messagee);

////////////////QUESTION:10///////////////////////////////
let names1 = ["Alice", "Bob", "Charlie", "David", "Eve"];
for (let i = 0; i < names1.length; i++) {
    console.log(names1[i]);
}

////////////////QUESTION:11////////////////////////////////////////
let inames1 = ["Aiman", "aroma", "khan", "ayesha", "fatima"];
for (let i = 0; i < inames1.length; i++) {
    console.log(`Hello, ${inames1[i]}! Have a great day!`);
}

///////////////////////question:12////////////////////////////////
// Store the names of your friends in an array called names
let names2 = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Print a personalized greeting message for each person in the array
for (let i = 0; i < names2.length; i++) {
    console.log(`Hello, ${names2[i]}! Have a great day!`);
}

//////////////////////QUESTION:13////////////////////////////////////
let bicycles1 = ["mountain bike", "road bike", "commuter bike", "electric bike"];
for (let i = 0; i < bicycles1.length; i++) {
    console.log(`I would like to own a ${bicycles1[i]}.`);
}

//////////////////////////////QUESTION:14/////////////////////////////// 
let guestLists1 = ["BROTHER", "ABDULLAH", "ALI"];
for (let i = 0; i < guestLists1.length; i++) {
    console.log(`Dear ${guestLists1[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\n\nSincerely,\n[Your Name]`);
}

///////////////////////////QUESTION:15///////////////////////////
let guestList: string[] = ["Aiman", "Abdullah", "Ali"];

function printInvitations(guests: string[]): void {
    for (let guest of guests) {
        console.log(`Dear ${guest},\nYou are invited to dinner at my place. Please join us!\n`);
    }
}

printInvitations(guestList);

let guestCantMakeIts: string = guestList[1];
guestList.splice(1, 1, "Aiman"); // Corrected the name "aiman" to "Aiman"
console.log(`${guestCantMakeIts} can't make it to the dinner.\n`);
printInvitations(guestList); // Corrected function name from printInvitationss to printInvitations


////////////////////////QUESTION:16///////////////////////////
let originalGuestList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
originalGuestList.forEach(guest => {
    console.log(`Dear ${guest},\nYou are invited to dinner at my place. Please join us!\n`);
});

// Guest who can't make it
const guestCantMakeIt = originalGuestList[1]; // Assuming Marie Curie can't make it
console.log(`${guestCantMakeIt} can't make it to the dinner.\n`);

// Modify the guest list
originalGuestList.splice(1, 1); // Removing Marie Curie
const newGuest = "Isaac Newton";
originalGuestList.push(newGuest); // Adding Isaac Newton

// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.\n");

// Add three more guests
originalGuestList.unshift("Galileo Galilei"); // Adding Galileo Galilei to the beginning
originalGuestList.splice(3, 0, "Nikola Tesla"); // Adding Nikola Tesla to the middle
originalGuestList.push("Stephen Hawking"); // Adding Stephen Hawking to the end

// Print new set of invitation messages
originalGuestList.forEach(guest => {
    console.log(`Dear ${guest},\nYou are invited to dinner at my place. Please join us!\n`);
});
// ////////////////////////////QUESTION:17/////////////////////////////////////////////
let guests: string[] = ["Aiman", "Abdullah", "Shahzaib", "Ali", "Bisma"];

console.log("Unfortunately, due to a delay, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
    }
}

console.log();

for (let guest of guests) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}

console.log();

guests.pop();
guests.pop();

console.log("Rema-ining guests list:", guests);

////////////////////////QUESTION NO : 18///////////////////////////////
let placesToVisit: string[] = ["Kinza", "Bisma", "Ayesha", "Anabia", "Shakila", "Aroma", "Amara"];
// Print original order
console.log("Original order:", placesToVisit);

// Print alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Print to show original order is unchanged
console.log("Original order:", placesToVisit);

// Print reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Print to show original order is unchanged
console.log("Original order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

/////////////////////////////QUESTION :19//////////////////////////
let guestsNew: string[] = ["Aiman", "Abdullah", "Shahzaib", "Ali", "Bisma"];

console.log("Unfortunately, due to a delay, I can only invite two people for dinner.");

while (guestsNew.length > 2) {
    let removedGuest = guestsNew.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
    }
}

console.log();

for (let guest of guestsNew) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}

console.log();

guestsNew.pop();
guestsNew.pop();

console.log("Remaining guests list:", guestsNew);

console.log(`Total number of people invited to dinner: ${5 - guestsNew.length}`);

/////////////////////////QUESTION NO :20////////////////////
let guestsNews: string[] = ["Aiman", "Abdullah", "Shahzaib", "Ali", "Bisma"];

console.log("Unfortunately, due to a delay, I can only invite two people for dinner.");

while (guestsNews.length > 2) {
    let removedGuest = guestsNews.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
    }
}

console.log();

for (let guest of guestsNews) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}

console.log();

guestsNews.pop();
guestsNews.pop();

console.log("Remaining guests list:", guestsNews);

console.log(`Total number of people invited to dinner: ${5 - guestsNews.length}`);

//////////////////QUESTION NO:21////////////////////////////////
let landmarks: string[] = [
    "Eiffel Tower",
    "Great Wall of China",
    "Taj Mahal",
    "Machu Picchu",
    "Statue of Liberty",
    "Pyramids of Giza",
    "Colosseum",
    "Sydney Opera House",
    "Petra",
    "Mount Everest"
];

console.log("List of Famous Landmarks:");
for (let landmark of landmarks) {
    console.log(landmark);
}
//////////////////////////QUESTION NO :22//////////////////////////////
let countries: { [key: string]: { capital: string, population: number, language: string } } = {
    "USA": {
        capital: "Washington D.C.",
        population: 331002651,
        language: "English"
    },
    "France": {
        capital: "Paris",
        population: 65273511,
        language: "French"
    },
    "Japan": {
        capital: "Tokyo",
        population: 126476461,
        language: "Japanese"
    },
    "Brazil": {
        capital: "Brasília",
        population: 212559417,
        language: "Portuguese"
    },
    "India": {
        capital: "New Delhi",
        population: 1380004385,
        language: "Hindi"
    }
};

console.log("Information about Countries:");

for (let country in countries) {
    console.log(`${country}:`);
    console.log(`Capital: ${countries[country].capital}`);
    console.log(`Population: ${countries[country].population}`);
    console.log(`Official Language: ${countries[country].language}`);
    console.log();
}
///////////////////////////QUESTION  NO :23//////////////////////////////////
let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);

// console.log("Does car start with 's'? I predict True.");
// console.log(car.startsWith('s'));

// console.log("Does car include 'a'? I predict True.");
// console.log(car.includes('a'));

console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');

////////////////////////// QUESTION NO :24///////////////////////////////////////////////
let string1: string = "apple";
let string2: string = "banana";
let number1: number = 5;
let number2: number = 10;
let fruits: string[] = ["apple", "banana", "orange"];

console.log("Tests for equality and inequality with strings:");
console.log(`Is string1 == 'apple'? ${string1 == 'apple'}`);
console.log(`Is string1 != string2? ${string1 != string2}`);

console.log("\nTests using the lower case function:");
console.log(`Is string1 in lowercase == 'apple'? ${string1.toLowerCase() == 'apple'}`);
console.log(`Is string2 in lowercase == 'banana'? ${string2.toLowerCase() == 'banana'}`);

// Numerical tests
console.log("\nNumerical tests:");
console.log(`Is number1 > number2? ${number1 > number2}`);
console.log(`Is number1 < number2? ${number1 < number2}`);
console.log(`Is number1 >= number2? ${number1 >= number2}`);
console.log(`Is number1 <= number2? ${number1 <= number2}`);

// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log(`Is string1 == 'apple' and string2 == 'banana'? ${string1 == 'apple' && string2 == 'banana'}`);
console.log(`Is string1 == 'apple' or string2 == 'grape'? ${string1 == 'apple' || string2 == 'grape'}`);

// Test whether an item is in an array
console.log("\nTest whether an item is in an array:");
// console.log(`Is 'banana' in the fruits array? ${fruits.includes('banana')}`);

// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
// console.log(`Is 'grape' not in the fruits array? ${!fruits.includes('grape')}`);

//////////////////////////QUESTION NO :25///////////////////////////////////////////
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
let alien_colors: string = 'red'; // or 'yellow'

if (alien_colors === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
/////////////////////////QUESTION NO :26////////////////////////////////////
let aliens_color: string = 'green';

if (aliens_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
}

///////////////////////////////QUESTION NO :27/////////////////////////////////////////
let alienColor: string = 'green';

if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alienColor === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alienColor === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}

let alienColors: string = 'yellow';

if (alienColors === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alienColors === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alienColors === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}

let alienColorss: string = 'red';

if (alienColorss === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alienColorss === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alienColorss === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}

///////////////////QUESTION NO :28///////////////////////////////////////////////////
let age: number = 25; // You can set the age value here

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

///////////////////////////////QUESTION NO:29//////////////////////////
let favorite_fruits: string[] = ["banana", "apple", "mango"];

if (favorite_fruits.indexOf("banana") !== -1) {
    console.log("You really like bananas!");
}

if (favorite_fruits.indexOf("apple") !== -1) {
    console.log("You really like apples!");
}

if (favorite_fruits.indexOf("mango") !== -1) {
    console.log("You really like mangoes!");
}

if (favorite_fruits.indexOf("strawberry") !== -1) {
    console.log("You really like strawberries!");
} else {
    console.log("You don't like strawberries.");
}

if (favorite_fruits.indexOf("kiwi") !== -1) {
    console.log("You really like kiwis!");
} else {
    console.log("You don't like kiwis.");
}


//////////////////////QUESTION NO :30/////////////////////////
let usernames: string[] = ["fatima", "mahnoor", "rimsha", "umme", "aiman", "iqra"];

for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

//////////////////////////QUESTION NO :31///////////////////////////////
let userList: string[] = [];

if (userList.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of userList) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

//////////////////////////QUESTION NO :32////////////////////////////

let current_users: string[] = ["john", "mary", "alice", "bob", "emma"];
let new_users: string[] = ["jane", "peter", "John", "ALICE", "sarah"];

for (let newUser of new_users) {
    let usernameExists = false;
    for (let currentUser of current_users) {
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log(`Sorry, the username "${newUser}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${newUser}" is available.`);
    }
}

//////////////////////QUESTION NO :33//////////////////////////////////////
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}
/////////////////////////QUESTION NO :34/////////////////////////
let favorite_pizzas: string[] = ["Margherita", "Pepperoni", "Hawaiian"];

for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");

/////////////////////////////////QUESTION NO :35//////////////////////
let animals: string[] = ["dog", "cat", "rabbit"];

for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

//////////////////////////////QUESTION NO :36/////////////////////////
function make_shirtS(size: string, message: string): void {
    console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
}

make_shirtS("medium", "Hello, world!");

///////////////////////////////QUESTION NO :37/////////////////////////////
function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
}

make_shirt();
make_shirt("medium");
make_shirt("small", "Keep coding!");
////////////////////////////////QUESTION NO :38/////////////////////////////
function describe_city(city: string, country: string = "default country"): void {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Tokyo");

//////////////////////////////QUESTION NO :39//////////////////////////////////
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("New York", "USA");
let city3 = city_country("Tokyo", "Japan");

console.log(city1);
console.log(city2);
console.log(city3);

///////////////////////////////QUESTION NO :40//////////////////////////////////
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

let album1: Album = make_album("Artist1", "Album1");
let album2: Album = make_album("Artist2", "Album2", 12);
let album3: Album = make_album("Artist3", "Album3");

// Print each return value to show album information
console.log(album1);
console.log(album2);
console.log(album3);

////////////////////////question no :41//////////////////////////////
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let muslim_magicians: string[] = ["Mahdi Gilbert", "Youssef Eid", "Ahmed El-Bayed", "Nizar Dakwar"];

show_magicians(muslim_magicians);
////////////////////////////////////QUESTION NO :42///////////////////////////
function show_items(items: string[]): void {
    for (let item of items) {
        console.log(item);
    }
}

function make_great(items: string[]): void {
    for (let i = 0; i < items.length; i++) {
        items[i] = "the Great " + items[i];
    }
}

let items_list: string[] = ["Mahdi Gilbert", "Youssef Eid", "Ahmed El-Bayed", "Nizar Dakwar"];

make_great(items_list);
show_items(items_list);

////////////////////////////QUESTION NO:43/////////////////////////
function display_items(itemsToDisplay: string[]): void {
    for (let item of itemsToDisplay) {
        console.log(item);
    }
}

function modify_items(itemsToModify: string[]): string[] {
    let modifiedItems: string[] = [];
    for (let item of itemsToModify) {
        modifiedItems.push("the Great " + item);
    }
    return modifiedItems;
}

let originalItemsArray: string[] = ["Mahdi Gilbert", "Youssef Eid", "Ahmed El-Bayed", "Nizar Dakwar"];

let greatModifiedItems: string[] = modify_items([...originalItemsArray]); // Passing a copy of the array

display_items(originalItemsArray);
console.log("----------------------");
display_items(greatModifiedItems);

//////////////////////////////////QUESTION NO :44//////////////////////////////////////
function makeSandwich(...toppings: string[]): void {
    console.log("Making a sandwich with the following toppings:");
    for (let topping of toppings) {
        console.log("- " + topping);
    }
    console.log("Sandwich is ready!");
}

// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce");
console.log("----------------------");
makeSandwich("Turkey", "Swiss cheese");
console.log("----------------------");
makeSandwich("Tuna salad");

////////////////////////////QUESTION NO :45//////////////////////////////////////////
function createCar(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): { manufacturer: string, modelName: string, extras: { [key: string]: any } } {
    let car: { manufacturer: string, modelName: string, extras: { [key: string]: any } } = {
        manufacturer: manufacturer,
        modelName: modelName,
        extras: {}
    };

    // Store additional information in the 'extras' object
    for (let extra of extras) {
        for (let key in extra) {
            car.extras[key] = extra[key];
        }
    }

    return car;
}

// Call the function with required information and additional name-value pairs
let myCar = createCar("Toyota", "Camry", { paintColor: "red", additionalFeatures: ["Sunroof", "Navigation"] });

console.log(myCar);

////////////////////////////////////////END/////////////////////////////////////////////////////////////////////



