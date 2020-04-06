// Assignment code here

//ask for character type
var lower = window.prompt("Contains lower case letters?");
var upper = window.prompt("Contains upper case letters?");
var numeric = window.prompt("Contains numbers?");
var special = window.prompt("Contains special characters?");
var length = Number(window.prompt("How many characters will your password be? Enter a number between 8 and 128"));

// OBJECT
var random = {
  lower: getRandomLower,
  upper: getRandomUpper,
  numeric: getRandomNumeric,
  special: getRandomSpecial,
}

// FUNCTIONS
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());

function getRandomNumeric() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumeric());

function getRandomSpecial() {
  var special = '!@#$%^&*';
  return special[Math.floor(Math.random() * special.length)];
}
console.log(getRandomSpecial());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(lower, upper, numeric, special, length) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  let generatePassword = '';

  for(var i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var password = Object.keys(type)[0];
      console.log('password: ', password);

      generatedPassword += random[password]();
    });
  }
  
  if (typesCount === "YES") {
    var typesCount = lower + upper + numeric + special;
    var typesArr = [{lower}, {upper}, {numeric}, {special}].filter
  (item => Object.values(item)[0]); // filters out unchecked/false types
  }
  if (typesCount === 0) {
    return '';
  }

  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);