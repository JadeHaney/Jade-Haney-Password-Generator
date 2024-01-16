// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);

// THEN I am presented with a series of prompts for password criteria
function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

// WHEN prompted for the length of the password
  var passwordLength = prompt("Enter password length (8-128):");
  passwordLength = parseInt(passwordLength); // Convert input to a number

  // THEN I choose a length of at least 8 characters and no more than 128 characters
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length (8-128).");
    return "";
  }

// WHEN prompted for password criteria
// WHEN asked for character types to include in the password
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");
// THEN I select which criteria to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert("Please select at least one character type.");
    return "";
  }

  // WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
  var allChars = "";
  if (includeLowercase) allChars += lowercaseChars;
  if (includeUppercase) allChars += uppercaseChars;
  if (includeNumeric) allChars += numericChars;
  if (includeSpecial) allChars += specialChars;

  if (allChars === "") {
    alert("No character types selected. Please try again.");
    return "";
  }

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars.charAt(randomIndex);
  }

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  return generatedPassword;
}