// function myFunction() { 
//     document.getElementById("randomword").innerHTML = "But my full name is Jael Battana"; 
// } 

// // Variables can be assigned in 3 ways - var, let and const
// // using var you can redeclare variables and also reassign values 
// var x = 9;  
// var y = 5;  
// var z = x+y;  

// console.log("Sum of x and y is", z);  
// console.log(x);  

// var x = 7; 
// console.log(x)  

// x = 2;
// console.log(x); 

// // Using a let keyword, a variable cannot be redeclared but the values can be reassigned  

// let firstName = "Adam"; 
// let lastName = "Smith"; 
// console.log("My full name is:", firstName+ " " +lastName); 

// // reassign values
// lastName = "Sanders"; 
// console.log("My full name is:", firstName+ " " +lastName); 

// // Using a const keyword, a variable cannot be redeclared nor reassigned  
// const pi = 3.14; 
// console.log(pi); 

// // ------------------------------------------
// // OPERATORS:  In JavaScript, operators are symbols that perform operations on variables and values.  
// // These are Arithmetic, Assignment, Comparison, Logical operators 

 
// // Arithmetic: Perform mathematical operations. 

// var x = 5;  
// var y = 4;  

// console.log(x+y);  
// console.log(x-y);  
// console.log(x*y);  
// console.log(x/y);  
// console.log(x%y);  

 
// // Assignment: Assign values to variables and are shorthand notations for performing arithmetic operations and assigning the result back to the variable. 

// // let a = 10; 
// // let b = 5; 

// // a += b; // Equivalent to a = a + b; 
// // console.log(a);

// // a -= b; // Equivalent to a = a - b; 
// // console.log(a); 

// var x = 2; 
// var y = 4; 

// console.log(x += y); //x = x+y 
// console.log(x -= y); //x = x-y 
// console.log(x *= y ); //x = x * y 
// console.log(x /= y);//x = x / y 
// console.log(x %= y);//x = x % y 

// // Comparision: Compare values assigned to the variables and return a boolean result. 

// let num1 = 10;  
// let num2 = 5;  

// console.log(num1 > num2); 
// console.log(num1 < num2); 
// console.log(num1 >= num2);  
// console.log(num1 <= num2); 
// console.log(num1 === num2);  
// console.log(num1 !== num2); 

// // Logical: Perform logical operations. &&, ||, ! 

// // AND && - if both are true its result is true else its false 
// // Let us find out if a person can drive and use a logical operator 

// let isAdult = true; 
// let hasLicense = true; 
// let canDrive = isAdult && hasLicense; 
// console.log(canDrive);

 
// // OR || - if one condition out of two is true its result is true else false. If both conditions are False the the result is False
// // Let us check if a person has a vehicle 

// let hasCar = true; 
// let hasBike = false; 
// let hasVehicle = hasCar || hasBike; 
// console.log(hasVehicle);

// // ! - negation - If the operand is true, ! returns false, and vice versa. It negates the actual value

// let isStudent = false; 
// let isNotStudent = !isStudent; 
// console.log(isNotStudent); 
 
// // Example: Let us combine comparison operators and logical operators and check if a person is eligible for a driver's license. 

// let age = 25; 
// let hasExperience = true; 
// let isEligible = age >= 18 && hasExperience; 
// console.log(isEligible); 

// // ------------------------------------------
// // Conditionals: if, if - else , if – else if – else 
// // JavaScript conditionals are used to make decisions in your code based on certain conditions. 

// //if 

// var person_age = 20;  
// if (person_age >= 18) {  
//     console.log('You are an adult.');  
// } 

// // if - else: 

// var temperature = 25;  
// if (temperature >= 30) {  
//     console.log('It\'s a hot day!');  
// }  
// else {  
//     console.log('It\'s not too hot.');  
// } 

// // if if-else  else 

// let hour = 15;  
// if (hour < 12) {
//     console.log ('Good morning!');  
// }
// else if (hour > 17) {  
//     console.log ('Good evening!');  
// }  
// else {  
//     console.log ('Good afternoon!');  
// } 

// // Example: Sample game using operators: 

// var dice1 = 5;
// var dice2 = 5; 
// var sum = dice1+dice2;
// console.log('Sum:' + ' ' + sum);  
// if(sum == 7 || sum == 11){  
//     console.log("Win");  
// }  
// else if (dice1 == dice2 && dice1%dice2 == 0 ){  
//     console.log("Lose");  
// }  
// else{  
//     console.log("Try again");  
// } 

// // -----------------------------
// // Functions: Reusable Blocks of code
// // Syntax:
// // function functionName(parameter1, parameter2....){ //function declaration . Parameters are placeholders
// //      logic; //function logic
// // }
// // functionName(argument1, argument2) //function call and pass arguments to the parameters. Arguments are actual values

// function greet(name) { 
//     console.log("Hello, " + name); 
// } 
// greet("John"); 

// // We can have multiple parameters 
// function greeting(name1, name2){ 
//     console.log("Hello World" + name1 + ' '+ name2 ); 
// } 
// greeting('Adam', 'Smith'); 

// // Functions can also have return values
// function add(a, b) { 
//     return a + b; 
// } 
// let result = add(5, 3); 
// console.log(result); 

// // Variables declared in functions have a scope. Scope is how a value assigned to a variable can be accesses inside or outside a function.
// // A variable declared inside a function has local scope and its value can not be accessed outside the function
// // A variable declared outside a function has global scope and its value can  be accessed outside the function and inside the function.

// // Example demonstration: Local Scope 
// function exampleFunction() { 
//     let localVar = "I am local!"; // Local variable as its declared inside the function
//     console.log(localVar); // I can access its value inside the function
// } 
// exampleFunction(); //Call the function
// //console.log(localVar); //Try accessing this console statement. Local variable outside its scope results in an error.

// // Example demonstration: Global Scope 
// let globalVar = "I am global!"; //declaring a variable outside the function gives it a global scope.
// function exampleFunction() { 
//     console.log(globalVar); //You will be able to access the value from within the function 
// } 
// exampleFunction(); 
// console.log(globalVar); // You can also acceess the value outside the function

// // LOOPS:Loops in a programming language are used to repeatedly execute a block of code until a certain condition is met 
// // Example: I want to perform an action a number of times and a bad programming practice is to repeat the same logic multiple times and increases the code 

// console.log("Hello World")// repeat it 5 times. Instead we can do it in a loop.

// // for loop: It is used when you know in advance how many times the loop should run. 
// for ( i = 0; i< 5; i++){ 
//     console.log(i); 
// } 

// // ‘i’ is the initial expression. It is a short form of index and its a common convention in any programming language.
// // Then we have a condition, body of loop is executed
// // Increment/ decrement is executed based on the condition until the condition is met 

// for (i = 0; i< 5; i++){ 
//     if( i ==3){ 
//     continue; 
// } 
// if(i ==7){ 
//     break; 
// } 
// console.log(i); 
// } 
// // The continue statement will skip over the statement and continue the next iteration.  
// // When it reaches i = 3, it goes to continue which will continue valuation of conditions in the for loop without going to the body of the loop. 
// // To break out of the loop use a ‘break’ statement 

// // You can also nest your loops with conditionals 
// for(let i = 0; i<5; i++){ 
//     if(i%2 !=0){ 
//         console.log(i);
//     } 
// } 

// // While Loop: Used when you do not know in advance how many times you need to iterate.  
// // creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement
// let n = 1; 
// while (n <= 5) { 
//     console.log(n); 
//     n++; 
// } 

// //do-while: Similar to while loop but this loop guarantees that something in the body will be executed despite the condition and then performs like a while loop. 
// let i = 15; 
// do{ 
//     console.log(i); 
//     i--;	 
// } while (i > 15); 
 
// let a = 10; 
// do{ 
//     console.log(a); 
//     i--;	 
// } while (a < 15 && a>0);  

// // Password Guessing Game using a while and a do-while loop
// //while:
// function passwordGuessingGame() { 
//     const correctPassword = "password"; 
//     let attempts = 3; 
//     let userInput; 
//     console.log("Welcome to the Password Guessing Game!"); 
//     while (attempts > 0) { 
//         userInput = prompt("Enter the password:"); 
//         if (userInput === correctPassword) { 
//             console.log("Congratulations! You guessed the correct password."); 
//             return
//         }  
//         else { 
//             attempts--; 
//             console.log("Incorrect password. You have", attempts, "attempts remaining."); 
//         } 
//     } 
//     console.log("Sorry, you've run out of attempts. Better luck next time!"); 
// } 
// passwordGuessingGame(); //Function Call

// // do-while:
// function passwordGuessingGame() { 
//     const correctPassword = "password"; 
//     let attempts = 3; 
//     let userInput; 
//     console.log("Welcome to the Password Guessing Game!"); 
//     do { 
//         userInput = prompt("Enter the password:"); 
//         if (userInput === correctPassword) { 
//             console.log("Congratulations! You guessed the correct password."); 
//             return; 
//         } 
//         else { 
//             attempts--; 
//             console.log("Incorrect password. You have", attempts, "attempts remaining."); 
//         } 
//     } while (attempts > 0); 
//     console.log("Sorry, you've run out of attempts. Better luck next time!"); 
// } 
// passwordGuessingGame(); //Function Call

// //Difference: 
// //The main difference between while and do-while loops in this scenario is that the do-while loop guarantees that the loop body is executed at least once, 
// // ensuring that the user is prompted to enter the password even if they have zero attempts left. 
// // In contrast, the while loop checks the condition before entering the loop body, so it might skip the password prompt if the initial number of attempts is zero.  

// // Error Handling:
// let a_num = 6; 
// let b_num = 9; 
// let c_num = a_num * b_num; 
// debugger; 
// console.log(c); 

// let playerSpeed = 5; // Initial player speed 
// function collectPowerUp() { 
//     console.log("Power-up collected!"); 
//     playerSpeed -= 2; // Decrease player speed instead of increasing it 
// } 
// function movePlayer() { 
//     console.log("Moving player with speed:", playerSpeed); 
// } 
// movePlayer(); // Initial speed before collecting power-up 
// collectPowerUp(); // collecting power-up 
// movePlayer(); // Speed after collecting power-up  

// // Throwing errors:

// function divideNumbers(a, b) { 
//     if (typeof a !== 'number' || typeof b !== 'number') { 
//         throw new Error('Both arguments must be numbers'); 
//     } 
//     if (b === 0) { 
//         throw new Error('Cannot divide by zero'); 
//     } 
//     return a / b; 
// } 
// console.log(divideNumbers(4,0)); 

// // try-catch block
// function performDivision() { 
//     try { 
//         const numerator = prompt('Enter the numerator:'); 
//         const denominator = prompt('Enter the denominator:'); 
//         const result = divideNumbers(numerator, denominator); 
//         console.log("The result of", numerator /denominator, "is", result); 
//     } 
//     catch (error){ 
//         console.error('An error occurred:', error.message); 
//     } 
// } 

// // Usecase: Write a function to calculate the total checkout price on an e-commerce platform
// // Books can be ordered in any quantity. If more than one book is ordered and the price of each book
// // is a 1000$ and above, give the customer a 10% discount.

// function calculateDiscountedPrice(itemPrice, quantity) { 
//     let totalPrice = itemPrice * quantity; // Calculate total price without discount 
//     const discountPercentage = 10; // 10% discount 
//     const discountThreshold = 1000; // Apply discount if item price is greater than $1000 
//     // Check if quantity is greater than 1 and item price is greater than $1000 
//     if (quantity > 1 && itemPrice >= discountThreshold) { 
//     let discountAmount = (totalPrice * discountPercentage) / 100; 
//     totalPrice -= discountAmount;  // Apply discount 
//     } 
//     return totalPrice; 
// } 
// // Plug different values and check for all possible outputs
// const itemPrice = 1200; // Price of the item is $1200 
// const quantity = 3; // Quantity of the item is 3 
// const totalPrice = calculateDiscountedPrice(itemPrice, quantity); 
// console.log("Total Price: $" + totalPrice); 

// Input Validation: Check HTML for the form code
function validateForm() { 
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value; 
    const confirmPassword = document.getElementById('confirmPassword').value; 
    if (password !== confirmPassword) { 
        alert('Passwords do not match'); 
        return;
    } 
    // You can add more complex validation rules here 
    // If all validation passes, you can submit the form 
    alert('Registration successful!'); 
    document.getElementById('registrationForm').submit(); 
} 