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
    pwdLength = prompt("How many characters for your password?\n\nMinimum of 8, Maximum of 128. ", "8")
    checkInput = pwdLength >= 8 && pwdLength <= 128;
  } while (!checkInput || pwdLength === null)
  
  if(pwdLength === null) { return 0; } // Return 0 if user pressed cancel
  return pwdLength; // Return value(s) of Criteria
}

function promptLower() { // Confirm if wanting lowercase letters
  pwdLowerCase = confirm("Do you want to include Lower Case letters?\n\nOK = Yes | Cancel = No");
  return pwdLowerCase;
}
function promptUpper() { // Confirm if wanting uppercase letters
  pwdUpper = confirm("Do you want to include Upper Case letters?\n\nOK = Yes | Cancel = No");
  return pwdUpper;
}
function promptNumber() { // Confirm if wanting numbers letters
  pwdNumber = confirm("Do you want to include Numbers?\n\nOK = Yes | Cancel = No");
  return pwdNumber;
}
function promptSpecial() { // Confirm if wanting special chars letters
  pwdSpecial = confirm("Do you want to include Special Characters?\n\nOK = Yes | Cancel = No");
  return pwdSpecial;
}

console.log(promptLength());

console.log(promptLower());
console.log(promptUpper());
console.log(promptNumber());
console.log(promptSpecial());