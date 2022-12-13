//A. Q+A
//1. How do we assign a value to a variable? With the assignment operator
//2. How do we change the value of a variable? By selecting the value and typing the new value
//3. How do we assign an existing variable to a new variable? by using the assignment operator
//4. Remind me, what are declare, assign, and define? Declare is creating a variable. Assign is givin. Define is to specify what those values mean.
//5. What is pseudocoding and why should you do it? Pseudocode is a break down in code in sections to outline that steps you will take to solve the program. Is is importang it because is easy to understand the steps a programmers takes to solve programs.

//B.String
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariablein a new variable called secondVariable
// Change the value of secondVariableto any string.
// What is the value of firstVariable?
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean


let firstVariable = "Hello World"
firstVariable = 32
let secondVariable = firstVariable
secondVariable = "my age"
console.log(firstVariable)
first variable is 32

 let yourName = "Porscha"
 let greeting = "Hello, my name is " + yourName
 console.log(greeting)

//C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

7. if (a<c){
     console.log (true)
   }

8. if (c>d){
     console.log(true)
 }

9.  if ("Name"=="Name"){
      console.log(true)
  }

11. Determine if daily affirmation are needed. True and false statement
 let feelingScale = 24
 let minimumScale = 39
 let myScale = 75

if(feelingScale < minimumScale && myScale > 79){
   console.log("Do Daily Affirmation")
 } else {
   console.log("No Affirmations needed")
 }



12.How are you feeling today?6 false and 1 true 

 let feelingScale = 19

 if(feelingScale > 100){
     console.log("Excellant")
 } else if (feelingScale > 80){
     console.log("Good")
 } else if (feelingScale > 60){
     console.log("Appcetable")
 } else if (feelingScale > 40){
     console.log("Badly")
 } else {
     console.log("Aweful")
 }

13. Determin if affirmation are needed or not. false and false

 let feelingScale = 80
 let minimumScale = 39
 let myScale = 75

 if(feelingScale < minimumScale && myScale > 79){
   console.log("Do Daily Affirmation")
 } else {
   console.log("No Affirmations needed")
 }


14.  if ("Kevin"=="Kevin"){
      console.log(true)
  }

15. if(a + b == c){
     console.log(true)
 }
16. if(a * a == d)
     console.log(true)

17. if (48==48){
     console.log(true)
 }

//D The Farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

let bigAnimal = "cow"
  if(bigAnimal == "cow")
  console.log("mooooo")

 let bigAnimal = "cow"
  if(bigAnimal>"cow"){
     console.log("moooo")
  } else {
     console.log("Hey! You're now a cow")
  }
//E Driver's Ed  
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."


 let personAge = 17
     if(personAge>16) {
         console.log("Here are the keys!")    
     } else {
         console.log("Sorry, you're too young")
     } 

//A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

for (i = 0; i < 10; i ++){
    console.log(i)
}

for (var i = 10; i <= 400; i ++){
    console.log(i)
}

for (var i = 12; i <= 4000; i+=3){
    console.log(i)
    }

//B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (i = 1; i <= 100; i ++){
     if ( i % 2 == 0){
        console.log(i + "is even")
    } else {
        console.log(i)
    }
}

//C.Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three    
// For numbers divisible by both three and five, be sure your code prints both messages

for (let i = 1; i <= 100; i++){
	if ( i % 5 == 0 && i % 3 == 0){
		console.log("I found a " + i + ". High five!");
		console.log("I found a " + i + ". Three is a crowd");
	} else if (i % 5 == 0){
		console.log("I found a " + i + ". High five!");
	} else if (i % 3 == 0){
		console.log("I found a " + i + ". Three is a crowd");
	}
}

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it

let bankAccount = 0;
 for (let i = 1; i <= 10; i++){
 	bankAccount += i;
 };
 console.log(bankAccount);

 let bankAccount = 0;
 for (i = 1; i <= 100; i++){
 	bankAccount += i * 2;
 };
 console.log(bankAccount);

//  A. Talk about it:
//  What are the things in an array called? Elements or Objects
//  Do Arrays guarantee those things will be in order? Arays does not guarantee order
//  What real-life thing could you model with an array? Stores and structure data. An array of computer brands is and example of real=life model

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

 let quotes =["I'll be there", "Mabe you're right","Got your back"]

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
// Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

const randomThings = [1, 10, "Hello", true]

console.log(randomThings[0])

const removedRandomThings = randomThings.splice(2,1, "World")

console.log(randomThings)

//D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log(ourClass[2])

const removedOurClass = ourClass.splice(4,1, "Octocat")
console.log(ourClass)

ourClass.unshift("Cloud City")
console.log(ourClass)

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

const myArray = [5, 10, 500, 20]

 myArray.push("Aegon","Find")
 console.log(myArray)

 myArray.shift(5)
 console.log(myArray)

 myArray.unshift("Bob Marley")
 console.log(myArray)

 myArray.pop("find")
 console.log(myArray)

myArray.reverse()
console.log(myArray)
//Yes, it mutates the original array. Mutate changes the properties of a value. Yes the return method returned the numbers of the element in reverse.

// F. Biggie Smalls
// Create a variable that contains an integer.

//  Write an if ... elsestatement that:

//  console.log()s "little number" if the number is entered is less than 100
//  console.log()s big numberif the number is greater than or equal to 1

let numberDisplay = 57
if (numberDisplay < 100){
    console.log("little number")
} else {
    console.log(" alert big number")
}

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

let numberData = 4
if (numberData < 5){
    console.log("little number")
} else if (numberData >= 10){
    console.log("big number")
} else {
    console.log("monkey")
}
////   H. What's in Your Closet?
//     Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

   console.log("Kristyn is rocking that " + kristynsCloset [2] + " today!")

kristynsCloset.splice(6,0, "raybans" )
  console.log (kristynsCloset)

kristynsCloset.splice(5,1, "stained knit hat")
  console.log (kristynsCloset)

thomsCloset[0]
const thomsShirt = thomsCloset [0]
console.log (thomsShirt)  

thomsCloset[1]
const thomsPants = thomsCloset [1][1]
console.log (thomsPants)

 thomsCloset[2]
 const thomsAccessories = thomsCloset [2][0]
 console.log(thomsAccessories)

console.log("Thom is looking fierce " + thomsCloset[0][1] + "," + thomsCloset[1][0] + " and " + thomsCloset [2][2] + "!")

// 
// IV. Functions

// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

// Like so?

//Skip

//B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

 const printCool = (argument) => {
   return argument + " is cool "
 } 

 console.log(printCool("Captin Reynolds"))

// C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

 const calculateCube = (singleNumber) => {
     return singleNumber * singleNumber * singleNumber
 }

 console.log(calculateCube(5))

// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

 const vowelChecker = (letter) => {
     if (letter == "a" || "e" ||"i" ||"o"||"u"){
     console.log("true")
 } else { 
     console.log("false")
     }
 }
 console.log(vowelChecker("a")) 

// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

const getTwoLength = (string1, string2) => {
   const lengthArray = [string1.length, string2.length]
   return lengthArray
}
console.log(getTwoLength("Hank", "Hippopopalous"))

// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths(arr){
    let resultArray=[];
      arr.forEach(function(string){
        resultArray.push( string.length);
      });
    console.log(resultArray);
    return resultArray;
    }
 console.log(getMultipleLengths(["hello","what", "is","up", "dude"]))

//  G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

const maxOfThree = (number1, number2, number3) => {
	const threeNumArray = [number1, number2, number3];
	threeNumArray.sort(function(a, b){return a - b});
	return threeNumArray[2];
};
console.log(maxOfThree(6, 9, 1));

// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = (stringArray) => {
	let longestWord = '';
	for (let i = 0; i < stringArray.length; i++){
		if (stringArray[i].length > longestWord.length){
			longestWord = stringArray[i];
		}
	};
	return longestWord;
};
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

let users = {
    name: "Porscha",
    age: 32,
    email: "porscha_osler@yahoo.com",
    purchased: []
}
  users.email = "porscha.osler@gmail.com"

 console.log(users) 

 users.age = users.age + 1
 console.log(users)

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).


 users.location = "Colorado"
 console.log(users)

//  D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
 Console.log just the "Merino jodhpurs" from the purchasedarray.

   users.purchased.push("carbohydrates", "peace of mind","Merino jodhpurs")
   console.log(users)

 console.log(users.purchased[2])

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:
// hen we console.log user, we would see the friendobject added to our user object.

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.

 

 users.friend = {
 name: "Josh", 
 age: 31, 
 location: "Georgia",
 purchased:[]
 } 

console.log(users.friend.name)

console.log(users.friend.location)

users.friend.age = 55
console.log(users.friend)

users.friend.purchased.push("The One Ring", "A latte")
console.log(users.friend)

console.log(users.friend.purchased[1])  

// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for (i = 0; i< users.purchased.length; i++){
    console.log(users.purchased[i])
}

for (i = 0; i< users.friend.purchased.length; i++){
    console.log(users.friend.purchased[1])

}

// G. Functions can operate on objects
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.


 const updateUsers = () => {
 	users.age++;
 	users.name = users.name.toUpperCase();	
 }
 updateUsers(users)
 console.log(users)

 const oldAndLoud = (person) => {
	person.age++;
 	person.name + person.name.toUpperCase();
 	return users;
}

 oldAndLoud(users)
/console.log(users)


