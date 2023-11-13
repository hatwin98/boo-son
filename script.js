
  
// ARRAYS SETUP FOR PASS

  var characterSets = {
    numeric: "0123456789",
    special: "!@#$%^&*()_-+=?{}[]:;",
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

  }
  
// RANDOM GENERATOR

    var getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }


//RANGE/LENGTH FOR PASS

    var range = {
    minLength: 10,
    maxLength: 150
  }

  
  // GENERATE THE PASS

    var generatePassword = function() {
    var length = window.prompt("PLEASE CHOOSE A RANGE FOR YOUR PASSWORD?\n Enter a number of digits between " +
      range.minLength + "-" + range.maxLength + ".");
    if (length === null)
      return "";

  
    // MAKE SURE PASS IS IN CORRECT RANGE

    length = parseInt(length);
    if (Number.isNaN(length) || length < range.minLength || length > range.maxLength) {
      window.alert("Please enter a number between " + range.minLength + "-" + range.maxLength + ".");
      return generatePassword();
    }
  
    //WINDOW PROMPTS
    var typedYes = false;

    var useNumeric = window.prompt("WOULD YOU LIKE TO INCLUDE NUMBERS?\nType \"Y\" or \"N\"");
    if (useNumeric === null)
      return "";

    var useSpecial = window.prompt("WOULD YOU LIKE TO INCLUDE SPECIAL CHARACTERS?\nType \"Y\" or \"N\"");
    if (useSpecial === null)
      return "";

    var useUpper = window.prompt("WOULD YOU LIKE TO INCLUDE UPPERCASE LETTERS?\nType \"Y\" or \"N\"");
    if (useUpper === null)
      return "";

    var useLower = window.prompt("WOULD YOU LIKE TO INCLUDE LOWERCASE LETTERS?\nType \"Y\" or \"N\"");
    if (useLower === null)
      return "";

    if (useNumeric === "Y" || useNumeric === "y")
      typedYes = true;
    if (useSpecial === "Y" || useSpecial === "y")
      typedYes = true;
    if (useUpper === "Y" || useUpper === "y")
      typedYes = true;
    if (useLower === "Y" || useLower === "y")
      typedYes = true;
    
    if (!typedYes) {
      window.alert("Please answer at least one of the prompts. Please try again to generate password.");
      return generatePassword();
    }
  
    // FUNCTION TO GENERATE PASSWORD WITH ARRAY SET UP
    var password = "";
    var i = 0;
    while (i < length) {
      if (useLower === "Y" || useLower === "y") {
        var characterIndex = getRandom(0, characterSets.lower.length - 1);
        var character = characterSets.lower[characterIndex];
        password = password + character;
        i++;
        if (i >= length)
          break;
      }

      if (useUpper === "Y" || useUpper === "y") {
        var characterIndex = getRandom(0, characterSets.upper.length - 1);
        var character = characterSets.upper[characterIndex];
        password = password + character;
        i++;
        if (i >= length)
          break;
      }

      if (useNumeric === "Y" || useNumeric === "y") {
        var characterIndex = getRandom(0, characterSets.numeric.length - 1);
        var character = characterSets.numeric[characterIndex];
        password = password + character;
        i++;
        if (i >= length)
          break;
      }

      if (useSpecial === "Y" || useSpecial === "y") {
        var characterIndex = getRandom(0, characterSets.special.length - 1);
        var character = characterSets.special[characterIndex];
        password = password + character;
        i++;
        if (i >= length)
          break;
      }
    }
    return password;
  }
  
  
  var generateBtn = document.querySelector("#generate");
  

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
  }
  
  generateBtn.addEventListener("click", writePassword);