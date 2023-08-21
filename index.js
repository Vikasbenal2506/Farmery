var EmailArray = [];
var passwordArray = [];

var loginpage = document.getElementById("Login");
var registerpage = document.getElementById("register");

var logintab = document.getElementById("log");
var registertab = document.getElementById("reg");

function regfun() {
    event.preventDefault();
    registerpage.style.visibility = "visible";
    loginpage.style.visibility = "hidden";

    registertab.style.backgroundColor = "background-color: rgb(0, 0, 33);";
    logintab.style.backgroundColor = "background-color: rgb(0, 0, 33);";

}
function loginfun() {
    event.preventDefault();
    registerpage.style.visibility = "hidden";
    loginpage.style.visibility = "visible";

    logintab.style.backgroundColor = "background-color: rgb(0, 0, 33);";
    registertab.style.backgroundColor = "background-color: rgb(0, 0, 33);";


}

function register() {
    event.preventDefault();

    var email = document.getElementById("emailId").value;
    var password = document.getElementById("passWordR").value;
    if (email == "") {
        alert("Email is required");
        return;
    }
    else if (password == "") {
        alert("password is required");
        return;
    }
    else if (EmailArray.indexOf(email) == -1) {
        EmailArray.push(email);
        passwordArray.push(password);

        alert(email + "  Thanks for registration. \nTry to login Now");

        document.getElementById("emailId").value = "";
        document.getElementById("passWordR").value = "";
    }
    else {
        console.log("Already exists, please login");
        return;
    }

}
function login() {
    event.preventDefault();

    var email = document.getElementById("username-field").value;
    var password = document.getElementById("password-field").value;

    var i = EmailArray.indexOf(email);
    if (EmailArray.indexOf(email) == -1) {
        if (email == "") {
            alert("Email required");
            return;
        }
        console.log("Email does not exist");
        return;
    }
    else if (passwordArray[i] != password) {
        if (password == "") {
            alert("Password required");
            return;
        }
        alert("Enter correct password");
        return;
    }
    else {
        alert("success");
        window.location.href = "Homepage.html";
        document.getElementById("username-field").value = "";
        document.getElementById("password-field").value = "";

    }
}
document.querySelector(onclick())