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
  document.getElementById("ur2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";


  // Når countdown er ovre, vil der står dette...
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("ur2").innerHTML = "EXPIRED";
  }
}, 1000);