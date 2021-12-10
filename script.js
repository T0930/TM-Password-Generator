// Assignment Code
var generateBtn = document.querySelector("#generate");
var lCase = ["abcdefghijklmnopqrstuvwxyz"];
var uCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var sCase = ["!@#$%^&*()-_=+`~,.<>/[]{}?"];
var nCase = ["1234567890"];
var ulowerChoice = !Boolean(window.prompt(" Use Lower-Case? Leave Blank for Yes, Enter N for No"));
var uupperChoice = !Boolean(window.prompt("Use Upper-Case? Leave Blank for Yes, Enter N for No"));
var uspecialChoice = !Boolean(window.prompt("Use Special-Characters? Leave Blank for Yes, Enter N for No"));
var unumberChoice = !Boolean(window.prompt("Use Numbers? Leave Blank for Yes, Enter N for No"));
var pLength = String(window.prompt("Password Length? 8-128 Characters"));



function chooseSpecs() {

  if (Number.isNaN(pLength)) {
    alert("You must enter a number for length")
    window.location.reload(true)
  } else if (pLength < 8 || pLength > 128) {
    alert("Password needs to be between 8 and 128 Characters")
    window.location.reload(true)
  } 
  console.log("Lower Case = " + ulowerChoice);
  console.log("Upper Case = " + uupperChoice);
  console.log("Special Characters = " + uspecialChoice);
  console.log("Numbers = " + unumberChoice);
  console.log("Password Length = " + pLength);
}

chooseSpecs();


function generatePassword() {

  var genChar = "";
  var genPassword = "";

  if (ulowerChoice && uupperChoice && uspecialChoice && unumberChoice) {
    genChar += lCase + uCase + sCase + nCase;
    console.log(genChar);
  } else if (uupperChoice && uspecialChoice && unumberChoice) {
    genChar += uCase + sCase + nCase;
    console.log(genChar);
  } else if (ulowerChoice && uspecialChoice && unumberChoice) {
    genChar += lCase + sCase + nCase;
    console.log(genChar);
  } else if (ulowerChoice && uupperChoice && unumberChoice) {
    genChar += lCase + uCase + nCase;
    console.log(genChar);
  } else if (ulowerChoice && uspecialChoice && uspecialChoice) {
    genChar += lCase + sCase + sCase;
    console.log(genChar);
  } else if (ulowerChoice && uupperChoice) {
    genChar += lCase + uCase;
    console.log(genChar);
  } else if (ulowerChoice && uspecialChoice) {
    genChar += lCase + sCase;
    console.log(genChar);
  } else if (ulowerChoice && unumberChoice) {
    genChar += lCase + nCase;
    console.log(genChar);
  } else if (uupperChoice && uspecialChoice) {
    genChar += uCase + sCase;
    console.log(genChar);
  } else if (uupperChoice && unumberChoice) {
    genChar += uCase + nCase;
    console.log(genChar);
  } else if (uspecialChoice && unumberChoice) {
    genChar += sCase + nCase;
    console.log(genChar);
  } else if (ulowerChoice) {
    genChar += lCase;
    console.log(genChar);
  } else if (uupperChoice) {
    genChar += uCase;
    console.log(genChar);
  } else if (uspecialChoice) {
    genChar += sCase;
    console.log(genChar);
  } else if (unumberChoice) {
    genChar += nCase;
    console.log(genChar);
  } else {
     alert("You selected no on all options!")
     window.location.reload(true)
  }

  for (var i = 0; i < pLength; i++) {
    genPassword += genChar.charAt(Math.floor(Math.random() * genChar.length));
  } console.log(genPassword);


  return genPassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



