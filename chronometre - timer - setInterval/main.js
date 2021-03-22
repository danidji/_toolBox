console.log('main.js');
//      https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
// Timer qui apelle la fonction     v toutes les v millisecondes
//                                                 1000ms = 1 seconde
const intervalID = window.setInterval(myCallback, 1000);
// const intervalID2 = window.setInterval(myCallback, 1000);

function myCallback() {
    // Your code here
    // Parameters are purely optional.
    console.log("Hello");

    // Permet d'arreter une intervalle, a partir de son numero
    //                                      (créé lors de la création de l'intervalle)
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
    // clearInterval(intervalID);
}


// L'ID (nombre entier) qui permet d'identifier l'intervalle
//  dans le but de l'arreter plus tard, via clearInterval
console.log(intervalID);
console.log(typeof intervalID);
// console.log(intervalID2);


/// LA VERSION COURTE SANS COMMENTAIRES

// const intervalID = window.setInterval(myCallback, 1000);

// function myCallback() {
//     console.log("Hello");
// }