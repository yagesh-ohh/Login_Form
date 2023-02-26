/** @format */

var userName = document.getElementById("name");
var emailValue = document.getElementById("emailValue");
var password = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");
var userNameWarn = document.getElementById("userNameWarn");
var emailWarn = document.getElementById("emailWarn");
var passwordWarn = document.getElementById("passwordWarn");
console.log(userNameWarn.innerText);

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginStart();
});

function loginStart() {
  var userNames = userName.value;
  if (userNames.length == " " && userNames.length < 16) {
    userNameWarn.innerText = "User Name must be above 4 characeter";
  } else {
    userNameWarn.innerText = " ";
  }
  emailValidate();
  passwordValidate();
}

function emailValidate() {
  var emailValidate = emailValue.value;
  if (emailValidate == "") {
    console.log("empt");
    emailWarn.innerText = "Email Cannot be Blank";
  } else {
    console.log("text");
    isEmail(emailValidate);
  }
}

function isEmail(emailValidate) {
  var emailValue = emailValidate;
  //   console.log(emailValue.length);
  var at = emailValue.indexOf("@");
  var dot = emailValue.lastIndexOf(".");
  if (at >= 1 && dot >= 2 && at < emailValue.length) {
    emailWarn.innerText = " ";
  } else {
    emailWarn.innerText = " Email must present @ and two dot above 4 character";
  }
}

function passwordValidate(params) {
  var passwordValidate = password.value;
  if (passwordValidate.length < 7) {
    passwordWarn.innerText = " Password must above 8 character";
  } else {
    passwordWarn.innerText = "";
  }
}
