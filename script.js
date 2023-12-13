// Global Variables
let pwdLowerCase = null;
let pwdUpperCase = null;
let pwdNumeric = null;
let pwdSpecial = null;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// My Code Goes Below Here

// Get user's requirement for length of password
function promptLength() { 
  let pwdLength = '';
  let checkInput =  '';
  do {
    pwdLength = prompt("How long of a password? Minimum of 8, Maximum of 128: ", "8")
    checkInput = pwdLength >= 8 && pwdLength <= 128;
  } while (!checkInput || pwdLength === null)
  
  if(pwdLength === null) { return 0; } // Return 0 if user pressed cancel
  return pwdLength; // Return value(s) of Criteria
}