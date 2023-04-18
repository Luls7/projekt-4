//Mathilde
let countDownDate = new Date("Jun 1, 2023 00:00:00").getTime();

// Nedtællingen bliver opdateret hvert sekund
let x = setInterval(function() {

  // Dato og tid for i dag
  let now = new Date().getTime();

  // Afstanden mellem nu og nedtællingsdatoen
  let distance = countDownDate - now;

  // Tidsberegninger for dage, timer, minutter og sekunder
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Udskriv resultatet i et element med id="demo"
  document.getElementById("ur").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Når countdown er ovre, vil der står dette...
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("ur").innerHTML = "EXPIRED";
  }
}, 1000);



function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  let slideShow = 0;
kørSlide();

function kørSlide() {
  let i;
  let slides = document.getElementsByClassName("billedeslide");
  let prikker = document.getElementsByClassName("prik");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideShow++;
  if (slideShow > slides.length) {slideShow = 1}    
  for (i = 0; i < prikker.length; i++) {
    prikker[i].className = prikker[i].className.replace(" active", "");
  }
  slides[slideShow-1].style.display = "block";  
  prikker[slideShow-1].className += " active";
  setTimeout(kørSlide, 4000); // skift ved 4 sek
}

function changeColor(element, color) {
  element.style.backgroundColor = color; 
}
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


