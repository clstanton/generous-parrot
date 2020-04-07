// Assignment code here 

// ** DIALOG BOXES **
var length = prompt("How many characters would you like your password to contain? Enter a number between 8 and 128.");
var special = confirm("Click OK to confirm including special characters.");
var numeric = confirm("Click OK to confirm including numeric characters.");
var upperCase = confirm("Click OK to confirm including uppercase characters.");
var lowerCase = confirm("Click OK to confirm including lowercase characters.");

// ** CALCULATE PASSWORD **
// Values
special = "!@#$%^&*";
numeric = "0123456789";
upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lowerCase = "abcdefghijklmnopqrstuvwxyz";

// **DIALOG BOX SELECTIONS
var selection = function() {
  if (special && numeric && upperCase && lowerCase) {
    selection = special + numeric + upperCase + lowerCase;
  }
  else if (special && numeric && upperCase) {
    selection = special + numeric + upperCase;
  }
  else if (special && numeric && lowerCase) {
    selection = special + numeric + lowerCase;
  }
  else if (special && upperCase && lowerCase) {
    selection = special + upperCase + lowerCase;
  }
  else if (special && numeric) {
    selection = special + numeric;
  }
  else if (special && lowerCase) {
    selection = special + lowerCase;
  }
  else if (special && upperCase) {
    selection = special + upperCase;
  }
  else if (numeric && upperCase && lowerCase) {
    selection = numeric + upperCase + lowerCase;
  }
  else if (numeric && upperCase) {
    selection = numeric + upperCase;
  }
  else if (numeric && lowerCase) {
    selection = numeric + lowerCase;
  }
  else if (upperCase && lowerCase) {
    selection = upperCase + lowerCase
  }
  else if (special || numeric || upperCase || lowerCase) {
    selection = special;
    selection = numeric;
    selection = upperCase;
    selection = lowerCase;
  }
};

var generatePassword = function() {
  for (var i = 0; i < length; i++) {
    password = selection[Math.floor(Math.random() * selection.length)];
  }
  console.log(password)

  return password
};

// ** CLICK BUTTON **
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}