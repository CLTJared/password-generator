// Global Variables
let pwdLowerCase = '';
let pwdUpperCase = '';
let pwdNumeric = '';
let pwdSpecial = '';

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

//
// Get user's requirement for length of password
//
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

//
// Prompt for user choices
//
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

//
// Generate Password
//
  let numbers = '0123456789';
  let lowerLetter = 'abcdefghijklmnopqrstuvwxyz';
  let upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let specialChars ='!@#$%^&*()-+_=';

function generatePassword() {
  let userLength = promptLength();
  //
  // Come back and create loop through these prompts if the user says NO to all
  //
  let userLower = promptLower()
  let userUpper = promptUpper()
  let userNumber = promptNumber()
  let userSpecial = promptSpecial()

  // Console Log for debugging
  console.log(userLength);
  console.log(userLower);
  console.log(userUpper);
  console.log(userNumber);
  console.log(userSpecial);

  let tempPWDString = ''; // Create temp string to hold valid char(s) from user choices
  if(userLower) tempPWDString = tempPWDString + lowerLetter;
  if(userUpper) tempPWDString = tempPWDString + upperLetter;
  if(userNumber) tempPWDString = tempPWDString + numbers;
  if(userSpecial) tempPWDString = tempPWDString + specialChars;

  console.log(tempPWDString);

  let tempPWD = '';
  for(let i=0;i<userLength;i++) {
    tempPWD = tempPWD + tempPWDString.charAt(Math.floor(Math.random()*tempPWDString.length));
    console.log(tempPWD); // Log out each step of the password being generated
  }

  return tempPWD;
}