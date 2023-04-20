
// Define a function named myFunction
function burgermenu() {
  // Declare and assign the variable x using the let keyword to get the element with the ID "burgermenu"
  let x = document.getElementById("burgermenu");
  
  // Use an if-else statement to check if the style property of the element x is set to "block"
  if (x.style.display === "block") {
    // If it is, set the style property to "none"
    x.style.display = "none";
  } else {
    // Otherwise, set the style property to "block"
    x.style.display = "block";
  }
}


// Amalie - galleri //
let galleriShow = 0;
runGalleri();

function runGalleri() {
  let i;
  let galleri = document.getElementsByClassName("billedeslide");
  let prikkerne = document.getElementsByClassName("prik");
  for (i = 0; i < galleri.length; i++) {
    galleri[i].style.display = "none";  
  }
  galleriShow++;
  if (galleriShow > galleri.length) {galleriShow = 1}    
  for (i = 0; i < prikkerne.length; i++) {
    prikkerne[i].className = prikkerne[i].className.replace(" active", "");
  }
  galleri[galleriShow-1].style.display = "block";  
  prikkerne[galleriShow-1].className += " active";
  setTimeout(runGalleri, 4000); // skift ved 4 sek
}

function skiftFarve(element, Farve) {
  element.style.backgroundColor = Farve; 
}
// galleri slut //

// Luana //
function myFunction2() {
  document.getElementById("contentdato").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdato')) {
    var dropdowns = document.getElementsByClassName("help");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

function myFunction3() {
  document.getElementById("contenttidspunkt").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.droptidspunkt')) {
    let dropdowns = document.getElementsByClassName("help2");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFunction4() {
  document.getElementById("contentkategori").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropkategori')) {
    let dropdowns = document.getElementsByClassName("help3");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


