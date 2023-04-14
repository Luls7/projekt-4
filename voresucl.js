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