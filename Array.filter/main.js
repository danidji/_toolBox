console.log('main.js');

// Methode Array.filter
// doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// syntaxe : 
//              arr.filter(callback); // callback(elementCourant[, index[, tableauEntier]])
//              var nouveauTableau = arr.filter(callback, thisArg);

// Params : 
//          - callback : fonction de test appliqué à chaque élément du tableau 
//                 avec comme paramètre : 
//                                          - element courant = élément à traiter 
//                                          - index (facultatif)
//                                          - le tableau (facultatif)


const entier = [5, 4, 5, 85, 7, 44, 55, 87, 1, 15];

function supp(element) {
    return element >= 5;
}

const result = entier.filter(supp);
//                             ^ on appelle la fonction sur lequel sera appliqué le filter
console.log(result);




const fruits = ['pomme', 'banane', 'raisin', 'mangue'];


// Fonctionnement du filter pour faire une recherche dans un tableau
const filtreTexte = (arr, requete) => {
    return arr.filter((el, monIndex, monTableau) => {
        // console.log(el);
        // console.log(monIndex);
        // console.log(monTableau);
        // console.log("---");

        el.toLowerCase().indexOf(requete.toLowerCase()) !== -1

        console.log(requete.toLowerCase())
        // console.log(el.toLowerCase().indexOf(requete.toLowerCase()))
    });
}

console.log(filtreTexte(fruits, 'an')); // ['banane', 'mangue'];
console.log(filtreTexte(fruits, 'm')); // ['pomme', 'mangue'];