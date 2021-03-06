'use strict';

/** findAccount.js: Supposed to match a user input with the database on the server
  * and then send the password to the user's email address, once matched.
  */

// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById("search");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const context = document.getElementById("context");

btn.addEventListener("click", notify);


function notify(e) {
  e.preventDefault();
  let email = document.getElementsByTagName("input")[0];
  if (e.target.id === "search") {
    if (email.value === "") {
      alert("Email address must be filled out.");
      return False;
    } else {
    context.innerHTML = "Your password has been sent to your email."
    }
  }
}

/*
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span>(x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
  if(e.target == modal) {
    modal.style.display = "none";
  }
}
*/
