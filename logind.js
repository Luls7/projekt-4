window.addEventListener("DOMContentLoaded",load);

//Array 
const logindNavne = [
    {"brugernavn":"Studerende1","kodeord":"Studerende1"},
    {"brugernavn":"Studerende2","kodeord":"Studerende2"}
];

function load(){
    console.log("det virker");

    // Eventlistener som reagerer på at man klikker på "login" knappen. (e) for det her event.
    // => arrowfunction (kan få lov at lave en function uden et navn, men den kan ikke kaldes senere, den virker kun lige her)
    // PreventDefault() fordi der er en default på typen submit som vi gerne vil override.
    document.querySelector("#logind-knap").addEventListener("click", (e) => {
    e.preventDefault();

    // Variabler for at ungå at skrive det i funktionen.
    // queryselector er standarden at bruge, den kan bruges både til at target elementer ved brug af tags, id´er og class
    const usernameInput = document.querySelector("#brugernavn").value;
    const passwordInput = document.querySelector("#password-input").value;

    // vi bruger const fordi at det ikke er noget der skal ændre sig, vi bruger let når vi har en værdig vi ved der skal ændre sig

    for(let i = 0; i < logindNavne.length; i++){        
        if (logindNavne[i].brugernavn == usernameInput && logindNavne[i].kodeord == passwordInput){
            window.location = "index.html";
            break; // Stopper loopet hvis if-statement er true og den når til break (kan også bruges til andre ting)
        } else {
            document.querySelector("#invalid-input").innerHTML = "Brugernavn eller kodeord er forkert"; // Targeter en paragraf med invalid-input id, og replacer det med teksten.
        }
    }
});
};