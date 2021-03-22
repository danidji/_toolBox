console.log('main.js');

// setTimeout 
// doc : https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

// var identifiant = scope.setTimeout(fonction[, delai, param1, param2, ...]);
// var identifiant = scope.setTimeout(fonction[, delai]);
// var identifiant = scope.setTimeout(code[, delai]);

// params : 
//          - function : fonction qui sera éxécuter à l'issu du délai
//          - code : chaine de caract qui représente le code à exécuter 
//          - délai (facultatif) : temps après lequel la fonction s'exécute par défaut à 0, en ms
//          - param1..paramN (facultatif) : paramètres passé à la fonction une fois exécuté

// Valeur de retour : un entier qui représente l'id du minuteur créé, 


let timeoutID; // id du timer 
let button = document.querySelector(".test")
let buttonClear = document.querySelector(".testClear")

function delayedAlert() {

    // on met en paramètre une fonction qui sera exécuté après le temps défini en paramètre en ms

    timeoutID = window.setTimeout(slowAlert, 2000);
    console.log(timeoutID)
}

// Fonction appeler dans le timer 
function slowAlert() {
    alert("C'était long…");
}



function clearAlert() {

    // prend en paramètre l'id du minuteur créé
    window.clearTimeout(timeoutID);
    console.log("timeOut stoppé")
}


button.addEventListener("click", delayedAlert)
buttonClear.addEventListener('click', clearAlert)