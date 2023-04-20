
// Define a function named myFunction
function myFunction() {
  // Declare and assign the variable x using the let keyword to get the element with the ID "myLinks"
  let x = document.getElementById("myLinks");
  
  // Use an if-else statement to check if the style property of the element x is set to "block"
  if (x.style.display === "block") {
    // If it is, set the style property to "none"
    x.style.display = "none";
  } else {
    // Otherwise, set the style property to "block"
    x.style.display = "block";
  }
}

// Define an event listener to call the myFunction() function when a user clicks on a button with the ID "myButton"
document.getElementById("myButton").addEventListener("click", myFunction);

// Declare an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use a for loop to iterate through the array and log each number to the console
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Define a function named multiply that takes two parameters and returns their product
function multiply(num1, num2) {
  return num1 * num2;
}

// Call the multiply function and assign the result to a variable named product
let product = multiply(2, 3);

// Use an if-else statement to check if the product is greater than 10
if (product > 10) {
  console.log("The product is greater than 10");
} else {
  console.log("The product is less than or equal to 10");
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



// Luana
function changeColor(element, color) {
  element.style.backgroundColor = color; 
}
function myFunction3() {
  document.getElementById("contenttidspunkt").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.droptidspunkt')) {
    var dropdowns = document.getElementsByClassName("help2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
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
    var dropdowns = document.getElementsByClassName("help3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


