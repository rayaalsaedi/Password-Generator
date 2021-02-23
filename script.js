// Assignment Code
var generateBtn = document.querySelector("#generate");
  var capitalLetter="ABCDEFGHIJKLMNOPQRSTU";
  var smallLetter= "abcdefghijklmnopqrstu";
  var numbers="0123456789";
  var specialCharacters="!@#$%^&*()~_+-{}[]|\?/.,><;";
  var length;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function password_generator() {
var passwordLength=window.prompt("How many characters would you like your password to be?");
if (!passwordLength){
  alert ("Not a valid input");
}
else if (passwordLength<8|| passwordLength >128){
  var passwordLength= window.prompt("You must choose between 8 and 128 character");
}
var special=window.confirm("Click ok to confirm special characters");
var number=window.confirm("Click ok to confirm numbers");
var small=window.confirm("Click ok to confirm small letters");
var large=window.confirm("Click ok to confirm capital letters");

if (special===false && number===false && small===false && large===false){
  alert("You must select at least 1 character type")
}
var passwordChoices={
  length:passwordLength,
  special: special,
  number:number,
  small:small,
  large:large,
}
return passwordChoices;
}
function generatePassword(){
var passwordOptions= password_generator()
var possibleCharacters=[]
if (passwordOptions.special===true){
  var specialArray=specialCharacters.split ("")
  possibleCharacters=possibleCharacters.concat(specialArray)
}

if (passwordOptions.number===true){
  var specialArray=numbers.split ("")
  possibleCharacters=possibleCharacters.concat(specialArray)
}
if (passwordOptions.small===true){
  var specialArray=smallLetter.split ("")
  possibleCharacters=possibleCharacters.concat(specialArray)
}
if (passwordOptions.large===true){
  var specialArray=capitalLetter.split ("")
  possibleCharacters=possibleCharacters.concat(specialArray)
}
var finalPassword=[]
for (i=0;i<passwordOptions.length;i++){
  var randomIndex=Math.floor (Math.random()*possibleCharacters.length)
  var randomElement=possibleCharacters[randomIndex]
  finalPassword.push(randomElement)
  console.log(finalPassword)
}
return finalPassword.join("")
}
