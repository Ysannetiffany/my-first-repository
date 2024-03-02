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
  let passwordInfo = ""
  let passwordCharacters = [];
  let special_Characters = getRandom(specialCharacters)
  let numeric_Characters = getRandom(numericCharacters) 
  let lowercased_Characters = getRandom(lowerCasedCharacters)
  let uppercased_Characters = getRandom(upperCasedCharacters) 

  let characterAmount = window.prompt("How many characters would you like your password to contain? NOTE: Must be between 8-128 characters")
 
  if(characterAmount >=8 && characterAmount < 129) {
    const getNumber = window.confirm("Click OK to confirm including numeric characters in your password.")
  
    if(getNumber) {
      passwordInfo += [...numericCharacters]
      passwordCharacters.push(numeric_Characters)
    }
  
    let getSpecialCharacters = window.confirm("Click OK to confirm including special characters in your password.");
  
    if(getSpecialCharacters) {
      passwordInfo += [...specialCharacters]
      passwordCharacters.push(special_Characters)
    }
  
    let getLowerCaseCharacters = window.confirm("Click OK to confirm including lowercase characters in your password.")
  
    if(getLowerCaseCharacters) {
      passwordInfo += [...lowerCasedCharacters]
      passwordCharacters.push(lowercased_Characters)
    }
  
    let getUpperCaseCharacters = window.confirm("Click OK to confirm including uppercase characters in your password.")
  
    if(getUpperCaseCharacters) {
      passwordInfo += [...upperCasedCharacters]
      passwordCharacters.push(uppercased_Characters)
    }
  
    if(!passwordInfo) {
      window.alert("Error: Please select at least one option to include in your password.")
    }
  
    while (passwordCharacters.length < characterAmount) {
      // pick a random character from passInfo
      passwordCharacters.push(getRandom(passwordInfo));
    }

    return passwordCharacters.join("")
  
  }else {
    window.alert("Error: Please provide a valid password length.")
  }
  }

// Function for getting a random element from an array
function getRandom(arr) {
  const randomCharactersIndex =  Math.floor(Math.random() * arr.length)
  const randomCharacters = arr[randomCharactersIndex]
  return randomCharacters
  }
  

// Function to generate password with user input
function generatePassword() {
  return getPasswordOptions()
  }
  
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  if(password){
  passwordText.value = password;
  }else {
    passwordText.value = ""
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);