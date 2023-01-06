// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = prompt("How many characters would you like your password to be?");
  console.log(passwordLength);
  
  if (passwordLength < 10) {
    alert("Password needs to be atleast 10 characters");
    return;
  } else if (isNaN(passwordLength) === true) {
    alert ("Password must be a number");
    return;
  }
  if (passwordLength > 64) { 
    alert("Password needs to be less than 64 characters")
    return;
  }
  let hasSpecialCharacters = confirm("Press 'okay' if you want special characters to be in your password.")
  let hasLowerCase = confirm("Press 'okay' if you want lowercase letters in your password.")
  let hasUpperCase = confirm("Press 'okay' if you want uppercase letters in your password.")
  let hasNumbers = confirm("Press 'okay' if you want numbers in your password.")   
  
  let userPasswordOptions = {
    length: passwordLength,
    specialCharacters: hasSpecialCharacters,
    lowerCasedCharacters: hasLowerCase,
    upperCasedCharacters: hasUpperCase,
    numbers: hasNumbers
  }
  
  let meetsRequirements = (hasSpecialCharacters + hasLowerCase + hasUpperCase + hasNumbers)
  console.log("meetsRequirements: " + meetsRequirements);

  if (meetsRequirements < 1) {
    alert("Your password must contain one of the following:\n- lowercase\n- uppercase\n- numbers\n- special characters")
    return;
  }

  return userPasswordOptions;
}

let passwordOptions = getPasswordOptions()
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}


// Function to generate password with user input
function generatePassword() {
  // pwd is our empty string which we will populate with random characters
  let pwd = ""
  // characterPool is our array, we will concatenate the relevant chosen arrays into characterPool
  let characterPool = []

  // if we have selected to use special characters,
  if (passwordOptions["specialCharacters"]) {
    // then add specialCharacters to our characterPool
    characterPool = characterPool.concat(specialCharacters)
  }
  if (passwordOptions["lowerCasedCharacters"]) {
    characterPool = characterPool.concat(lowerCasedCharacters)
  }
  if (passwordOptions["upperCasedCharacters"]) {
    characterPool = characterPool.concat(upperCasedCharacters)
  }
  if (passwordOptions["numbers"]) {
    characterPool = characterPool.concat(numericCharacters)
  }
  
  // for loop to add each letter onto the pwd string until i reaches the desired password length
  for (let i=0; i < passwordOptions['length']; i++) {
    pwd = pwd + getRandom(characterPool)
    console.log(pwd)
  }

  return pwd;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);