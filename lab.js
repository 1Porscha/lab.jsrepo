//A. Q+A
//1. How do we assign a value to a variable? With the assignment operator
//2. How do we change the value of a variable? By selecting the value and typing the new value
//3. How do we assign an existing variable to a new variable? by using the assignment operator
//4. Remind me, what are declare, assign, and define? Declare is creating a variable. Assign copies enumerable and own properties from a source object to a target object. Define is used to load the modules.
//5. What is pseudocoding and why should you do it? Pseudocode is a break down in code in sections to outline that steps you will take to solve the program. Is is important because is easy to understand the steps a programmers takes to solve programs.

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


// let firstVariable = "Hello World"
// firstVariable = 32
// let secondVariable = firstVariable
// secondVariable = "my age"
// console.log(firstVariable)

// let yourName = "Porscha"
// let greeting = "Hello, my name is " + yourName
// console.log(greeting)

//C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

//7. if (4<53){
//     console.log (true)
//   }

//8. if (57>16){
//     console.log(true)
// }

//9.  if ("Kevin"=="Kevin"){
//      console.log(true)
//  }

//11. Determine if daily affirmation are needed
// let feelingScale = 24
// let minimumScale = 39
// let myScale = 75

// if(feelingScale < minimumScale && myScale > 79){
//   console.log("Do Daily Affirmation")
// } else {
//   console.log("No Affirmations needed")
// }



//12.How are you feeling today?

// let feelingScale = 19

// if(feelingScale > 100){
//     console.log("Excellant")
// } else if (feelingScale > 80){
//     console.log("Good")
// } else if (feelingScale > 60){
//     console.log("Appcetable")
// } else if (feelingScale > 40){
//     console.log("Badly")
// } else {
//     console.log("Aweful")
// }

//13. Determin if affirmation are needed or not

// let feelingScale = 80
// let minimumScale = 39
// let myScale = 75

// if(feelingScale < minimumScale && myScale > 79){
//   console.log("Do Daily Affirmation")
// } else {
//   console.log("No Affirmations needed")
// }


//14.  if ("Kevin"=="Kevin"){
//      console.log(true)
//  }

// if (44==44){
//     console.log(true)
// }

//D The Farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// let bigAnimal = "cow"
//  if(bigAnimal == "cow")
//  console.log("mooooo")

// let bigAnimal = "cow"
//  if(bigAnimal>"cow"){
//     console.log("moooo")
//  } else {
//     console.log("Hey! You're now a cow")

//E Driver's Ed  
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."


// let personAge = 17
//     if(personAge>16) {
//         console.log("Here are the keys!")    
//     } else {
//         console.log("Sorry, you're too young")
//     } 

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

// /let bankAccount = 0;
// for (let i = 1; i <= 10; i++){
// 	bankAccount += i;
// };
// console.log(bankAccount);

 let bankAccount = 0;
 for (i = 1; i <= 100; i++){
 	bankAccount += i * 2;
 };
 console.log(bankAccount);


