function checkCredentials() { //elegxos twn stoixeiwn tou login form
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  if (user === "admin" && pass === "admin") { //admin credentials
    alert("Suceessful admin login");
    document.querySelector('#set6').style.display = 'block'; //emfanise ta admin controlls
    document.querySelector('#loginform').style.display = 'none';
    document.querySelector('#set5').style.display = 'none';

  } else if (user === "user" && pass === "user") { //user credentials
    alert("Suceessful user login");
    document.querySelector('#set7').style.display = 'block';
    document.querySelector('#set6').style.display = 'none';
    document.querySelector('#loginform').style.display = 'none';
    document.querySelector('#set5').style.display = 'none';
  }
  else {
    alert("Wrong username or password");
  }
}
function logout() { //function gia logout otan patithei to button
  document.getElementById("user").value = "";
  document.getElementById("pass").value = "";
  alert("You have been logged out");
  document.querySelector('#loginform').style.display = 'block';
  document.querySelector('#set5').style.display = 'block';
  document.querySelector('#set6').style.display = 'none';
  document.querySelector('#set7').style.display = 'none';
}
function editLinks() {
  // edit work links as an admin
}
function editExchibitions() {
  //edit exhibitions as an admin
}