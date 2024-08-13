// Get the HTML elements
const textImput = document.getElementById("text-input"); // Get the text input element
const checkBtn = document.getElementById("check-btn"); // Get the check button element
const result = document.getElementById("result"); // Get the result paragraph element

// Define a function to check if a string is a palindrome
function verificarPalindromo(input) {
  // Remove non-alphanumeric characters from the input string
  const replaced = input.replace(/[^a-zA-Z0-9]/g, "");
  
  // Convert to lowercase
  const lowerCase = replaced.toLowerCase();
  
  // Check if the input string is the same when reversed
  return lowerCase === [...lowerCase].reverse().join("");
}

// Add an event listener to the check button
checkBtn.addEventListener("click", () => {
  // Get the input value from the text input element
  const input = textImput.value.trim(); // Remove leading and trailing whitespace
  
  // Check if the input is empty
  if (input === "") {
    // Display an alert message if the input is empty
    alert("Please input a value");
  } else if (input.length === 1) {
    // If the input has only one character, consider it a palindrome
    result.innerText = `${input} is a palindrome`;
  } else if (verificarPalindromo(input)) {
    // If the input is a palindrome, display the result
    result.innerText = `${input} is a palindrome`;
  }
  else {
    // If the input is not a palindrome, display the result
    result.innerText = `${input} is not a palindrome`;
  }
});