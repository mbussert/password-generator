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

// User Inputs
let passwordLength;
let useLowers;
let useUppers;
let useSymbols;
let useNumbers;

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "'"];
let passString = [];

// Function to take user inputs and generate a random password.
function generatePassword() {
  let pWord = [];

  // Get user inputs.
  getPasswordLength();
  getUseLowers();
  getUseUppers();
  getUseNumbers();
  getUseSymbols();

  // Check if password length has been input, if not, then return nothing.
  if (passwordLength == null || passwordLength == NaN) {
    return;
  }
  // Error if user did not select any criteria. 
  else if (!useLowers && !useUppers && !useNumbers && !useSymbols) {
    alert("Cannot create a password!\nPlease select what characters you would like to use.");

    // Use Lowercase, Uppercase, Numbers, and Symbols
  } else if (useLowers && useUppers && useNumbers && useSymbols) {
    passString = numbers.concat(lowerCase, upperCase, symbols);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Lowercase, Uppercase, Numbers, but not Symbols.
  } else if (useLowers && useUppers && useNumbers && !useSymbols) {
    passString = numbers.concat(lowerCase, upperCase);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Lowercase, Uppercase, Symbols, but not Numbers.
  } else if (useLowers && useUppers && !useNumbers && useSymbols) {
    passString = lowerCase.concat(upperCase, symbols);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Lowercase, Numbers, Symbols, but not Uppercase.
  } else if (useLowers && !useUppers && useNumbers && useSymbols) {
    passString = numbers.concat(lowerCase, symbols);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Uppercase, Numbers, Symbols, but not Lowercase.
  } else if (!useLowers && useUppers && useNumbers && useSymbols) {
    passString = numbers.concat(upperCase, symbols);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Lowercase only.
  } else if (useLowers && !useUppers && !useNumbers && !useSymbols) {
    passString = lowerCase;
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Uppercase only.
  } else if (!useLowers && useUppers && !useNumbers && !useSymbols) {
    passString = upperCase;
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Numbers only.
  } else if (!useLowers && !useUppers && useNumbers && !useSymbols) {
    passString = numbers;
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Symbols only.
  } else if (!useLowers && !useUppers && !useNumbers && useSymbols) {
    passString = symbols;
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Lowercase and Uppercase only.  
  } else if (useLowers && useUppers && !useNumbers && !useSymbols) {
    passString = lowerCase.concat(upperCase);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Lowercase and Numbers only.
  } else if (useLowers && !useUppers && useNumbers && !useSymbols) {
    passString = lowerCase.concat(numbers);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Lowercase and Symbols only.
  } else if (useLowers && !useUppers && !useNumbers && useSymbols) {
    passString = lowerCase.concat(symbols);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Uppercase and Symbols only.  
  } else if (!useLowers && useUppers && !useNumbers && useSymbols) {
    passString = upperCase.concat(symbols);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Uppercase and Numbers only.
  } else if (!useLowers && useUppers && useNumbers && !useSymbols) {
    passString = upperCase.concat(numbers);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Numbers and Symbols only.
  } else if (!useLowers && !useUppers && useNumbers && useSymbols) {
    passString = numbers.concat(symbols);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");
  }
}

// User Input Functions
function getPasswordLength() {
  while (true) {
    passwordLength = prompt('How many characters would you like your password to be?\nPlease enter a value between 8 and 128.');
    if (passwordLength === null) {
      alert('Your password must be at least 8 characters long but no more than 128 characters.');
      return true;
    } else {
      if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) || passwordLength == null) {
        alert('Your password must be at least 8 characters long, but no more than 128 characters.');
      } else {
        return parseInt(passwordLength);
      }
    }
  }
};

function getUseLowers() {
  if (passwordLength) {
    useLowers = confirm('Would you like to include lower case letters?\n[OK] for Yes, [CANCEL] for No.');
  };
  if (!useLowers) {
    return false;
  } else {
    return true;
  }
};

function getUseUppers() {
  if (passwordLength) {
    useUppers = confirm('Would you like to include upper case letters?\n[OK] for Yes, [CANCEL] for No.');
  };
  if (!useUppers) {
    return false;
  } else {
    return true;
  }
};

function getUseSymbols() {
  if (passwordLength) {
    useSymbols = confirm('Would you like to include symbols?\n[OK] for Yes, [CANCEL] for No.');
  };
  if (!useSymbols) {
    return false;
  } else {
    return true;
  }
};

function getUseNumbers() {
  if (passwordLength) {
    useNumbers = confirm('Would you like to include numbers?\n[OK] for Yes, [CANCEL] for No.');
  };
  if (!useNumbers) {
    return false;
  } else {
    return true;
  }
};