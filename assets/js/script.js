// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Button
// Adds event listener to the generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

///Password Length Selection Section///
// allows user to select password length and alerts user if the password length is not within parameters
  var inValid = true;
  while (inValid) {
    var passwordLength = Number(prompt('How long would you like your password to be?\nPlease choose a number between 8-128.'));
    if (passwordLength > 7 && passwordLength < 129) {
      inValid = false;
    } else if (passwordLength == 0) {
      Window.close()
    } else {
      alert ('Please try again.');
    }
  }
  

///Character Selection Section///
//allows the user to choose between 1-4 character types, and alerts the user if at least one type is not selected
  while (!inValid) {
    var lowerCase = confirm('Would you like your password to include lower base letters?');
    var upperCase = confirm('Would you like your password to include upper case letters?');
    var numeric = confirm('Would you like your password to include numbers?');
    var special = confirm('Would you like your password to include special characters?');
    
    if (lowerCase == true || upperCase == true || numeric == true || special == true) {
      inValid = true;
    } else {
      alert('Please select at least one character type. Try again.');
    }
  }
  
  if (lowerCase == true) {
    lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  } else {
    lowerCase = ''
  } if (upperCase == true) {
    upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  } else {
    upperCase = ''
  } if (numeric == true) {
    numeric = '123456789'
  } else {
    numeric = ''
  } if (special == true) {
    special = '~`!@#$%^&*()-+={}[]|/:;<>,.?'
  } else {
    special = ''
  }

  
  var passwordString = special.concat(lowerCase, upperCase, numeric);

///Randomizer///
//generates a string of random characters that matches the selected length and character selection
  var randomNumber = '';
  for (var i = 0; i < passwordLength; i++) {
    randomNumber += passwordString[Math.floor(Math.random() * passwordString.length)];
  } 
  return randomNumber;
}