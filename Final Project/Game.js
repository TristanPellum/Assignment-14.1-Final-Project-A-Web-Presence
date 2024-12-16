// Function to flip the coin
function flipCoin() {
    // Randomly generate either 0 or 1
    let flip = Math.random() < 0.5 ? 'Heads' : 'Tails';

    // Call the displayResult function to show the result
    displayResult(flip);
}

// Function to display the result of the coin flip
function displayResult(result) {
    // Find the paragraph element with id 'result' and update its text
    document.getElementById('result').innerHTML = 'Result: ' + result;
}

var x = !false || ((false && false) && !(false || false));
console.log(x);

var a = true;
var b = false;

b = a;

console.log(b);