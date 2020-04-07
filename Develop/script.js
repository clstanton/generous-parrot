// Assignment code here

// VARIABLES & DIALOG BOXES
var length = prompt("How many characters would you like your password to contain?");
var special = confirm("Click OK to confirm including special characters.");
var numeric = confirm("Click OK to confirm including numeric characters.");
var upperCase = confirm("Click OK to confirm including uppercase characters.");
var lowerCase = confirm("Click OK to confirm including lowercase characters.");



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
