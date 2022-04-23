var generateBtn = document.querySelector("#generate");

var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "`", "|", "}", "{", "[", "]", "\:", ";", "?", ">", "<", ",", ".", "/", "-", "="];

var profile = {
  length: 0,
  upperCase: false,
  lowerCase: false,
  numeric: false,
  specChar: false,
  rawPassword: "",

  pwdLength: function () {
    this.length = parseInt(prompt("Choose your password length (must be a number between 8 and 128 characters"));
  
    while (this.length < 8 || this.length > 128 || isNaN(this.length)) {
      this.length = parseInt(prompt("Choose your password length (must be a number between 8 and 128 characters"));
    }
    
    return (this.length);
  },

  pwdUpperCase: function () {
   
    this.upperCase = confirm("Do you want to include upper case letters?");

    if (this.upperCase === true) {
      for (var u = 0; u < this.length; u++) {
        var upperRandom = Math.floor(Math.random() * upperAlpha.length);
        this.rawPassword += upperAlpha[upperRandom];
      }
    }
   
    return this.rawPassword;
  },

  pwdLowerCase: function () {
    
    this.lowerCase = confirm("Do you want to include lower case letters?");
 
    if (this.lowerCase === true) {
      for (var l = 0; l < this.length; l++) {
        var lowerRandom = Math.floor(Math.random() * lowerAlpha.length);
        this.rawPassword += lowerAlpha[lowerRandom];
      }
    }

    return this.rawPassword;
  },

  pwdNumeric: function () {
 
    this.numeric = confirm("Do you want to include numbers?");

    if (this.numeric === true) {
      for (var n = 0; n < this.length; n++) {
        var numbersRandom = Math.floor(Math.random() * numbers.length);
        this.rawPassword += numbers[numbersRandom];
      }
    }

    return this.rawPassword;
  },

  pwdSpecChar: function () {   
    this.specChar = confirm("Do you want to include special characters?");
    
    if (this.specChar === true) {
      for (var s = 0; s < profile.length; s++) {
        var symbolsRandom = Math.floor(Math.random() * symbols.length);
        this.rawPassword += symbols[symbolsRandom];  
      }
    }
    else if (this.upperCase === false && this.lowerCase === false && this.numeric === false && this.specChar === false) {
      alert("At least one criteria must be selected. Please generate a new password.");
      return;
    }
    return(this.rawPassword);  
  }
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  
  while (profile.length !== null) {
    profile.pwdLength();
    profile.pwdUpperCase();
    profile.pwdLowerCase();
    profile.pwdNumeric();
    profile.pwdSpecChar();

    var rawPasswordLength = profile.rawPassword.length;
    var result = "";

    for (var i = 0; i < profile.length; i++) {
      result += profile.rawPassword.charAt(Math.floor(Math.random() * rawPasswordLength));
    }
   
    return result;
  }
}