// JavaScript source code
var naam = document.getElementById("naam");
var cont = document.getElementById("contact");
var email = documnet.getElementById("email");

function Validate() {
    if (isNaN(b1) || isNaN(b2) || isNaN(b3) ||
        b1 == "" || b2 == "" || b3 == "" ||
        b1 == null || b2 == null || b3 == null ||
        /\s/.test(b1) || /\s/.test(b2) || /\s/.test(b3)) {
        alert("Incorrect input, try again.")
    }
    
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(mailformat)) {
        alert("Valid email address!");       
        return true;
    }
    else {
        alert("You have entered an invalid email address!");        
        return false;
    }
}