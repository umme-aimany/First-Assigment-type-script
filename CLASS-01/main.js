var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//////////////////////question :01///////////////////////////////////////////
console.log("1.hello world");
/////////////////////////QUESTION:02//////////////////////////////////
var name1 = "UMME AIMAN";
console.log("2. hello ".concat(name1, ", would you like to learn TypeScript today."));
//////////////////////QUESTION:03////////////////////////////////
var personName = "UMME AIMAN";
console.log("3.");
// Convert to lowercase
console.log("Lowercase: " + personName.toLowerCase());
// Convert to uppercase
console.log("Uppercase: " + personName.toUpperCase());
// Convert to title case
console.log("Title case: " + personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
/////////////////////question 04/////////////////////////////////
var quote1 = "In the end, we will remember not the words of our enemies, but the silence of our friends.";
var author1 = "Martin Luther King Jr.";
console.log("\"".concat(quote1, "\" - ").concat(author1));
//////////////////////QUESTION :05///////////////////////////////
var famous_person = "Albert Einstein";
var einstein_quote = "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.";
var message = "\"".concat(einstein_quote, "\" - ").concat(famous_person);
console.log(message);
//////////////////////////QUESTION:06//////////////////////////////////////////////
// Store a person's name with whitespace characters
var personNamesWithWhitespaces = "\t\n   John Doe   \n\t";
// Print the name with whitespace
console.log("Name with whitespace:", personNamesWithWhitespaces);
// Strip the whitespace using trim() function
var strippeddName = personNamesWithWhitespaces.trim();
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
var favoritesNumber = 7;
var messagee = "My favorite number is ".concat(favoritesNumber, ".");
console.log(messagee);
////////////////QUESTION:10///////////////////////////////
var names1 = ["Alice", "Bob", "Charlie", "David", "Eve"];
for (var i = 0; i < names1.length; i++) {
    console.log(names1[i]);
}
////////////////QUESTION:11////////////////////////////////////////
var inames1 = ["Aiman", "aroma", "khan", "ayesha", "fatima"];
for (var i = 0; i < inames1.length; i++) {
    console.log("Hello, ".concat(inames1[i], "! Have a great day!"));
}
///////////////////////question:12////////////////////////////////
// Store the names of your friends in an array called names
var names2 = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Print a personalized greeting message for each person in the array
for (var i = 0; i < names2.length; i++) {
    console.log("Hello, ".concat(names2[i], "! Have a great day!"));
}
//////////////////////QUESTION:13////////////////////////////////////
var bicycles1 = ["mountain bike", "road bike", "commuter bike", "electric bike"];
for (var i = 0; i < bicycles1.length; i++) {
    console.log("I would like to own a ".concat(bicycles1[i], "."));
}
//////////////////////////////QUESTION:14/////////////////////////////// 
var guestLists1 = ["BROTHER", "ABDULLAH", "ALI"];
for (var i = 0; i < guestLists1.length; i++) {
    console.log("Dear ".concat(guestLists1[i], ",\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\n\nSincerely,\n[Your Name]"));
}
///////////////////////////QUESTION:15///////////////////////////
var guestList = ["Aiman", "Abdullah", "Ali"];
function printInvitations(guests) {
    for (var _i = 0, guests_2 = guests; _i < guests_2.length; _i++) {
        var guest = guests_2[_i];
        console.log("Dear ".concat(guest, ",\nYou are invited to dinner at my place. Please join us!\n"));
    }
}
printInvitations(guestList);
var guestCantMakeIts = guestList[1];
guestList.splice(1, 1, "Aiman"); // Corrected the name "aiman" to "Aiman"
console.log("".concat(guestCantMakeIts, " can't make it to the dinner.\n"));
printInvitations(guestList); // Corrected function name from printInvitationss to printInvitations
////////////////////////QUESTION:16///////////////////////////
var originalGuestList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
originalGuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are invited to dinner at my place. Please join us!\n"));
});
// Guest who can't make it
var guestCantMakeIt = originalGuestList[1]; // Assuming Marie Curie can't make it
console.log("".concat(guestCantMakeIt, " can't make it to the dinner.\n"));
// Modify the guest list
originalGuestList.splice(1, 1); // Removing Marie Curie
var newGuest = "Isaac Newton";
originalGuestList.push(newGuest); // Adding Isaac Newton
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table.\n");
// Add three more guests
originalGuestList.unshift("Galileo Galilei"); // Adding Galileo Galilei to the beginning
originalGuestList.splice(3, 0, "Nikola Tesla"); // Adding Nikola Tesla to the middle
originalGuestList.push("Stephen Hawking"); // Adding Stephen Hawking to the end
// Print new set of invitation messages
originalGuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are invited to dinner at my place. Please join us!\n"));
});
// ////////////////////////////QUESTION:17/////////////////////////////////////////////
var guests = ["Aiman", "Abdullah", "Shahzaib", "Ali", "Bisma"];
console.log("Unfortunately, due to a delay, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
    }
}
console.log();
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
}
console.log();
guests.pop();
guests.pop();
console.log("Rema-ining guests list:", guests);
////////////////////////QUESTION NO : 18///////////////////////////////
var placesToVisit = ["Kinza", "Bisma", "Ayesha", "Anabia", "Shakila", "Aroma", "Amara"];
// Print original order
console.log("Original order:", placesToVisit);
// Print alphabetical order without modifying the actual list
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
// Print to show original order is unchanged
console.log("Original order:", placesToVisit);
// Print reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);
/////////////////////////////QUESTION :19//////////////////////////
var guestsNew = ["Aiman", "Abdullah", "Shahzaib", "Ali", "Bisma"];
console.log("Unfortunately, due to a delay, I can only invite two people for dinner.");
while (guestsNew.length > 2) {
    var removedGuest = guestsNew.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
    }
}
console.log();
for (var _a = 0, guestsNew_1 = guestsNew; _a < guestsNew_1.length; _a++) {
    var guest = guestsNew_1[_a];
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
}
console.log();
guestsNew.pop();
guestsNew.pop();
console.log("Remaining guests list:", guestsNew);
console.log("Total number of people invited to dinner: ".concat(5 - guestsNew.length));
/////////////////////////QUESTION NO :20////////////////////
var guestsNews = ["Aiman", "Abdullah", "Shahzaib", "Ali", "Bisma"];
console.log("Unfortunately, due to a delay, I can only invite two people for dinner.");
while (guestsNews.length > 2) {
    var removedGuest = guestsNews.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
    }
}
console.log();
for (var _b = 0, guestsNews_1 = guestsNews; _b < guestsNews_1.length; _b++) {
    var guest = guestsNews_1[_b];
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
}
console.log();
guestsNews.pop();
guestsNews.pop();
console.log("Remaining guests list:", guestsNews);
console.log("Total number of people invited to dinner: ".concat(5 - guestsNews.length));
//////////////////QUESTION NO:21////////////////////////////////
var landmarks = [
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
for (var _c = 0, landmarks_1 = landmarks; _c < landmarks_1.length; _c++) {
    var landmark = landmarks_1[_c];
    console.log(landmark);
}
//////////////////////////QUESTION NO :22//////////////////////////////
var countries = {
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
for (var country in countries) {
    console.log("".concat(country, ":"));
    console.log("Capital: ".concat(countries[country].capital));
    console.log("Population: ".concat(countries[country].population));
    console.log("Official Language: ".concat(countries[country].language));
    console.log();
}
///////////////////////////QUESTION  NO :23//////////////////////////////////
var car = 'subaru';
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
var string1 = "apple";
var string2 = "banana";
var number1 = 5;
var number2 = 10;
var fruits = ["apple", "banana", "orange"];
console.log("Tests for equality and inequality with strings:");
console.log("Is string1 == 'apple'? ".concat(string1 == 'apple'));
console.log("Is string1 != string2? ".concat(string1 != string2));
console.log("\nTests using the lower case function:");
console.log("Is string1 in lowercase == 'apple'? ".concat(string1.toLowerCase() == 'apple'));
console.log("Is string2 in lowercase == 'banana'? ".concat(string2.toLowerCase() == 'banana'));
// Numerical tests
console.log("\nNumerical tests:");
console.log("Is number1 > number2? ".concat(number1 > number2));
console.log("Is number1 < number2? ".concat(number1 < number2));
console.log("Is number1 >= number2? ".concat(number1 >= number2));
console.log("Is number1 <= number2? ".concat(number1 <= number2));
// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log("Is string1 == 'apple' and string2 == 'banana'? ".concat(string1 == 'apple' && string2 == 'banana'));
console.log("Is string1 == 'apple' or string2 == 'grape'? ".concat(string1 == 'apple' || string2 == 'grape'));
// Test whether an item is in an array
console.log("\nTest whether an item is in an array:");
// console.log(`Is 'banana' in the fruits array? ${fruits.includes('banana')}`);
// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
// console.log(`Is 'grape' not in the fruits array? ${!fruits.includes('grape')}`);
//////////////////////////QUESTION NO :25///////////////////////////////////////////
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
var alien_colors = 'red'; // or 'yellow'
if (alien_colors === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
/////////////////////////QUESTION NO :26////////////////////////////////////
var aliens_color = 'green';
if (aliens_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
}
///////////////////////////////QUESTION NO :27/////////////////////////////////////////
var alienColor = 'green';
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alienColor === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alienColor === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
var alienColors = 'yellow';
if (alienColors === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alienColors === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alienColors === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
var alienColorss = 'red';
if (alienColorss === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alienColorss === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alienColorss === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
///////////////////QUESTION NO :28///////////////////////////////////////////////////
var age = 25; // You can set the age value here
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
///////////////////////////////QUESTION NO:29//////////////////////////
var favorite_fruits = ["banana", "apple", "mango"];
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
}
else {
    console.log("You don't like strawberries.");
}
if (favorite_fruits.indexOf("kiwi") !== -1) {
    console.log("You really like kiwis!");
}
else {
    console.log("You don't like kiwis.");
}
//////////////////////QUESTION NO :30/////////////////////////
var usernames = ["fatima", "mahnoor", "rimsha", "umme", "aiman", "iqra"];
for (var _d = 0, usernames_1 = usernames; _d < usernames_1.length; _d++) {
    var username = usernames_1[_d];
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
//////////////////////////QUESTION NO :31///////////////////////////////
var userList = [];
if (userList.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _e = 0, userList_1 = userList; _e < userList_1.length; _e++) {
        var username = userList_1[_e];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
//////////////////////////QUESTION NO :32////////////////////////////
var current_users = ["john", "mary", "alice", "bob", "emma"];
var new_users = ["jane", "peter", "John", "ALICE", "sarah"];
for (var _f = 0, new_users_1 = new_users; _f < new_users_1.length; _f++) {
    var newUser = new_users_1[_f];
    var usernameExists = false;
    for (var _g = 0, current_users_1 = current_users; _g < current_users_1.length; _g++) {
        var currentUser = current_users_1[_g];
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log("Sorry, the username \"".concat(newUser, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username \"".concat(newUser, "\" is available."));
    }
}
//////////////////////QUESTION NO :33//////////////////////////////////////
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _h = 0, numbers_1 = numbers; _h < numbers_1.length; _h++) {
    var number = numbers_1[_h];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
/////////////////////////QUESTION NO :34/////////////////////////
var favorite_pizzas = ["Margherita", "Pepperoni", "Hawaiian"];
for (var _j = 0, favorite_pizzas_1 = favorite_pizzas; _j < favorite_pizzas_1.length; _j++) {
    var pizza = favorite_pizzas_1[_j];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
/////////////////////////////////QUESTION NO :35//////////////////////
var animals = ["dog", "cat", "rabbit"];
for (var _k = 0, animals_1 = animals; _k < animals_1.length; _k++) {
    var animal = animals_1[_k];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
//////////////////////////////QUESTION NO :36/////////////////////////
function make_shirtS(size, message) {
    console.log("A ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
make_shirtS("medium", "Hello, world!");
///////////////////////////////QUESTION NO :37/////////////////////////////
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("A ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Keep coding!");
////////////////////////////////QUESTION NO :38/////////////////////////////
function describe_city(city, country) {
    if (country === void 0) { country = "default country"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Tokyo");
//////////////////////////////QUESTION NO :39//////////////////////////////////
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
var city1 = city_country("Lahore", "Pakistan");
var city2 = city_country("New York", "USA");
var city3 = city_country("Tokyo", "Japan");
console.log(city1);
console.log(city2);
console.log(city3);
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2", 12);
var album3 = make_album("Artist3", "Album3");
// Print each return value to show album information
console.log(album1);
console.log(album2);
console.log(album3);
////////////////////////question no :41//////////////////////////////
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var muslim_magicians = ["Mahdi Gilbert", "Youssef Eid", "Ahmed El-Bayed", "Nizar Dakwar"];
show_magicians(muslim_magicians);
////////////////////////////////////QUESTION NO :42///////////////////////////
function show_items(items) {
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log(item);
    }
}
function make_great(items) {
    for (var i = 0; i < items.length; i++) {
        items[i] = "the Great " + items[i];
    }
}
var items_list = ["Mahdi Gilbert", "Youssef Eid", "Ahmed El-Bayed", "Nizar Dakwar"];
make_great(items_list);
show_items(items_list);
////////////////////////////QUESTION NO:43/////////////////////////
function display_items(itemsToDisplay) {
    for (var _i = 0, itemsToDisplay_1 = itemsToDisplay; _i < itemsToDisplay_1.length; _i++) {
        var item = itemsToDisplay_1[_i];
        console.log(item);
    }
}
function modify_items(itemsToModify) {
    var modifiedItems = [];
    for (var _i = 0, itemsToModify_1 = itemsToModify; _i < itemsToModify_1.length; _i++) {
        var item = itemsToModify_1[_i];
        modifiedItems.push("the Great " + item);
    }
    return modifiedItems;
}
var originalItemsArray = ["Mahdi Gilbert", "Youssef Eid", "Ahmed El-Bayed", "Nizar Dakwar"];
var greatModifiedItems = modify_items(__spreadArray([], originalItemsArray, true)); // Passing a copy of the array
display_items(originalItemsArray);
console.log("----------------------");
display_items(greatModifiedItems);
//////////////////////////////////QUESTION NO :44//////////////////////////////////////
function makeSandwich() {
    var toppings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toppings[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following toppings:");
    for (var _a = 0, toppings_1 = toppings; _a < toppings_1.length; _a++) {
        var topping = toppings_1[_a];
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
function createCar(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
        extras: {}
    };
    // Store additional information in the 'extras' object
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        for (var key in extra) {
            car.extras[key] = extra[key];
        }
    }
    return car;
}
// Call the function with required information and additional name-value pairs
var myCar = createCar("Toyota", "Camry", { paintColor: "red", additionalFeatures: ["Sunroof", "Navigation"] });
console.log(myCar);
////////////////////////////////////////END/////////////////////////////////////////////////////////////////////
