// Assignment code here 

// Dialog boxes
var passwordLength = prompt("How many characters would you like your selection to contain? Enter a number between 8 and 128.");
var special = confirm("Click OK to confirm including special characters.");
var numeric = confirm("Click OK to confirm including numeric characters.");
var upperCase = confirm("Click OK to confirm including uppercase characters.");
var lowerCase = confirm("Click OK to confirm including lowercase characters.");

// Values
special = getRandomSpecial;
numeric = getRandomNumeric;
upperCase = getRandomUpper;
lowerCase = getRandomLower;

function getRandomSpecial() {
  const specials = '!@#$%^&*';
  return specials[Math.floor(Math.random() * specials.length)];
}
console.log(getRandomSpecial());

function getRandomNumeric() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumeric());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

// Concatenate
generatePassword = function() {
  if (special && numeric && upperCase && lowerCase) {
    var selection = special + numeric + upperCase + lowerCase;
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
    selection = upperCase + lowerCase;
  }
  else if (special || numeric || upperCase || lowerCase) {
    selection = special;
    selection = numeric;
    selection = upperCase;
    selection = lowerCase;
  }

  for (var i = 0; i < passwordLength; i++) {
    selection.value = Math.floor(Math.random() * selection.length);
  
  return selection.value;
  }

};
  
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
  document.getElementById("placeholder").textArea = ps;
}

// Get references to the #generate element 
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write selection to the #selection input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 