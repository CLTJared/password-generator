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

//
// Get user's requirement for length of password
//
function promptLength() { 
  let pwdLength = ''; // Stores user submitted password length
  let checkInput = ''; // For validating the users input

  // Do While loop so that we can continue to prompt user for length if they enter an invalid number.
  do {
    pwdLength = prompt("How many characters for your password?\n\nMinimum of 8, Maximum of 128. ", "8")
    checkInput = pwdLength===null || pwdLength >= 8 && pwdLength <= 128; // validates if user pressed cancel or if the password is outside of the valid length

    console.log("Check Length: " + pwdLength); //confirm the user's length submitted
    console.log("Check Input: " + checkInput); //check if we should exit the prompt loop
  } while (!checkInput);
  
  if(pwdLength == null) { return 0; } // Return 0 if user pressed cancel
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

// These strings are used to build the valid chars information
let numbers = '0123456789';
let lowerLetter = 'abcdefghijklmnopqrstuvwxyz';
let upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let specialChars ='~!@#$%^&*()_{}|[]:";+<>?,./';


function generatePassword() {
  let userLength = promptLength();
  if (userLength===0) { return "Generate function was cancelled."; } // if user cancelled the function, don't continue on.

  let userLower = promptLower()
  let userUpper = promptUpper()
  let userNumber = promptNumber()
  let userSpecial = promptSpecial()

  // Validation that the user selected at least one criteria
  if (!userLower && !userUpper && !userNumber && !userSpecial) { return "User entered no valid criteria for password."; };

  // Console Log for debugging
  console.log("User Length: " + userLength);
  console.log("Use Lower: " + userLower);
  console.log("Use Upper: " + userUpper);
  console.log("Use Number: " + userNumber);
  console.log("Use Special: " + userSpecial);

  // Combines the user choices into a master string for the password valid
  let tempPWDString = ''; // Create temp string to hold valid char(s) from user choices
  if(userLower) tempPWDString = tempPWDString + lowerLetter;
  if(userUpper) tempPWDString = tempPWDString + upperLetter;
  if(userNumber) tempPWDString = tempPWDString + numbers;
  if(userSpecial) tempPWDString = tempPWDString + specialChars;


  console.log("Valid Char(s): " + tempPWDString);
  //
  // Generate Password
  //
  let tempPWD = '';
  for(let i=1;i<=userLength;i++) { // Loops the amount of times the user entered in for the length
    tempPWD = tempPWD + tempPWDString.charAt(Math.floor(Math.random()*tempPWDString.length));
    console.log("User Length: " + userLength + " - Current Length: " + i + " - Current Pwd: " + tempPWD); // Log out each step of the password being generated
  }

  return tempPWD; // Returns the password generated
}