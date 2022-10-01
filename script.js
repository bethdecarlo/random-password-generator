// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write Password function 

function writePassword() {

// Generate Password Function

  generatePassword = function () {

    // These are universal variables to be called on in function. The pass will become the final function return. numbers, lowercase, uppercase, and symbol are all arrays that will be combined depending on user input.
    var pass = "";

    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var symbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

    // These functions will be based on number of character types selected by the user

    // This function creates a password if the user only choses one character type. 
    passOneCharacterType = function (arrayOption) {
      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, arrayOption[Math.floor(Math.random() * arrayOption.length)]);
      }
      return (pass);
    }

    // This function creates a password if the user selects two character types.
    passTwoCharacterTypes = function (option1, option2) {
      var options = option1.concat(option2);

      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, options[Math.floor(Math.random() * options.length)]);
      }
      return (pass);
    }

    // This function creates a password if the user selects three character types.
    passThreeCharacterTypes = function (option1, option2, option3) {
      var options = option1.concat(option2, option3);

      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, options[Math.floor(Math.random() * options.length)]);
      }
      return (pass);
    }

   // This function creates a password if the user selects all four character types.
    passFourCharacterTypes = function (option1, option2, option3, option4) {
      var options = option1.concat(option2, option3, option4);

      for (var i = 0; i <= char; i++) {
        pass = pass.padEnd(i, options[Math.floor(Math.random() * options.length)]);
      }
      return (pass);
    }

    // Checks if array elements are included in password.
    checkUsersInput = function (array) {
      var bool = "";
      for (var i = 0; i < char; i++) {
        if (array.includes(pass[i])) {
          bool = true;
        }
      }
      if (bool) {
        return (bool);
      } else {
        return (false);
      }
    }

    // This creates a loop until the password meets the criteria. 
    
    runChecks = function() {

      // alerts user to choose at least one character type. 
      if (!lower && !upper && !number && !symbol) {
        alert("Password must contain at least one type of character.");
        return("Try again");

      // only numbers are selected
      } else if (!lower && !upper && number && !symbol) {
        return (passOneCharacterType(numbers));

        // only lowercase is selected

      } else if (lower && !upper && !number && !symbol) {
        return (passOneCharacterType(lowercase));

        // only uppercase is selected
      } else if (!lower && upper && !number && !symbol) {
        return (passOneCharacterType(uppercase));
      
        // only symbols are selected

      } else if (!lower && !upper && !number && symbol) {
        return (passOneCharacterType(symbol));

        // lowercase and uppercase password
      } else if (lower && upper && !number && !symbol) {
        do {
          pass = "";
          passTwoCharacterTypes(lowercase, uppercase)
          var chLowercase = checkUsersInput(lowercase);
          var chUppercase = checkUsersInput(uppercase);
        } while (!chLowercase || !chUppercase);
        return(pass);

        // lowercase and number password
      } else if (lower && !upper && number && !symbol) {
        do {
          pass = "";
          passTwoCharacterTypes(lowercase, numbers);
          var chLowercase = checkUsersInput(lowercase);
          var chNumber = checkUsersInput(numbers);
        } while (!chLowercase || !chNumber);
        return(pass);

        // lowercase and symbol password
      } else if (lower && !upper && !number && symbol) {
        do {
          pass = "";
          passTwoCharacterTypes(lowercase, symbol);
          var chLowercase = checkUsersInput(lowercase);
          var chSymbol = checkUsersInput(symbol);
        } while (!chLowercase || !chSymbol);
        return(pass);

        // uppercase and number password
      } else if (!lower && upper && number && !symbol) {
        do {
          pass = "";
          passTwoCharacterTypes(uppercase, numbers);
          var chUppercase = checkUsersInput(uppercase);
          var chNumber = checkUsersInput(numbers);
        } while (!chUppercase || !chNumber);
        return(pass);

        // uppercase and symbol password
      } else if (!lower && upper && !number && symbol) {
        do {
          pass = "";
          passTwoCharacterTypes(uppercase, symbol);
          var chUppercase = checkUsersInput(uppercase);
          var chSymbol = checkUsersInput(symbol);
        } while (!chUppercase || !chSymbol);
        return(pass);

        // number and symbol password
      } else if (!lower && !upper && number && symbol) {
        do {
          pass = "";
          passTwoCharacterTypes(numbers, symbol);
          var chNumber = checkUsersInput(numbers);
          var chSymbol = checkUsersInput(symbol);
        } while (!chNumber || !chSymbol);
        return(pass);

        // lowercase, uppercase, and number password
      } else if (lower && upper && number && !symbol) {
        do {
          pass = "";
          passThreeCharacterTypes(lowercase, uppercase, numbers);
          var chLowercase = checkUsersInput(lowercase);
          var chUppercase = checkUsersInput(uppercase);
          var chNumber = checkUsersInput(numbers);
        } while (!chLowercase || !chUppercase || !chNumber);
        return(pass);

        // lowercase, uppercase, and symbol password
      } else if (lower && upper && !number && symbol) {
        do {
          pass = "";
          passThreeCharacterTypes(lowercase, uppercase, symbol);
          var chLowercase = checkUsersInput(lowercase);
          var chUppercase = checkUsersInput(uppercase);
          var chSymbol = checkUsersInput(symbol);
        } while (!chLowercase || !chUppercase || !chSymbol);
        return(pass);

        // lowercase, number, and symbol password
      } else if (lower && !upper && number && symbol) {
        do {
          pass = "";
          passThreeCharacterTypes(lowercase, numbers, symbol);
          var chLowercase = checkUsersInput(lowercase);
          var chNumber = checkUsersInput(numbers);
          var chSymbol = checkUsersInput(symbol);
        } while (!chLowercase || !chNumber || !chSymbol);
        return(pass);

        // uppercase, number, and symbol password
      } else if (!lower && upper && number && symbol) {
        do {
          pass = "";
          passThreeCharacterTypes(uppercase, numbers, symbol);
          var chUppercase = checkUsersInput(uppercase);
          var chNumber = checkUsersInput(numbers);
          var chSymbol = checkUsersInput(symbol);
        } while (!chUppercase || !chNumber || !chSymbol);
        return(pass);

        // all four character types password
      } else {
        do {
          pass = "";
          passFourCharacterTypes(lowercase, uppercase, numbers, symbol);
          var chLowercase = checkUsersInput(lowercase);
          var chUppercase = checkUsersInput(uppercase);
          var chNumber = checkUsersInput(numbers);
          var chSymbol = checkUsersInput(symbol);
        } while (!chLowercase || !chUppercase || !chNumber || !chSymbol);
        return(pass);
      }
    }

    // Prompts the user to select a password length. 
    charPrompt = function () {
      var char = prompt("How long would you like your password to be?\nPlease choose a number between 8-128.");

      // Checking if input is an integer between 7 and 129, and if not, prompts the user with an error message. 
      if (char % parseInt(char) !== 0) {
        alert("Please type a number.");
        return;
      } else if (char < 8) {
        alert("Password must be at least 8 characters long.");
        return;
      } else if (char > 128) {
        alert("Password must be under 129 characters long.");
        return;
      }
      return (char);
    }

    // runs charPrompt
    var char = charPrompt();

    // if char isn't an integer between 7 and 129, promps with an error message.
    if (char === undefined) {
      return ("Please try again.");
    }

    // Prompts user to select character types.
    var lower = confirm("Would you like to include lowercase characters?");
    var upper = confirm("Would you like to include uppercase characters?");
    var number = confirm("Would you like to include number characters?");
    var symbol = confirm("Would you like to include symbol characters?");

    // compiles password based on desired character types and loops until all are properly included
    pass = runChecks();

    // returns password and exits function
    return (pass);
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);