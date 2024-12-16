// Function to display results, demonstrating decision logic, loops, and string manipulation
function displayResults() {
    // Get the user input from the input field
    var userInput = document.getElementById('loopInput').value;

    // Check if the input is a valid number (String manipulation and validation)
    if (isNaN(userInput) || userInput === '') {
        alert('Please enter a valid number!');
        return;
    }

    // Decision logic: Display different results based on input
    if (userInput % 2 === 0) {
        document.getElementById('result').innerText = 'The number ' + userInput + ' is even.';
    } else {
        document.getElementById('result').innerText = 'The number ' + userInput + ' is odd.';
    }

    // Loops: Display multiples of the entered number
    var output = '';
    for (var i = 1; i <= userInput; i++) {
        output += i + ' ';
    }

    // Append loop results below the decision logic result
    document.getElementById('result').innerText += '\nMultiples of ' + userInput + ': ' + output;

    // Changing the image dynamically based on input
    var image = document.getElementById('dynamicImage');
    if (userInput % 2 === 0) {
        image.src = "Bo 12_4_2024 11_24_46 PM.png";
    } else {
        image.src = "Bo 12_4_2024 5_16_42 PM.png";
    }
}