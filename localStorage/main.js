console.log('main.js');


// Comment faire pour faire passer/conserver de l'information
//  d'une page à l'autre ?

//// Cookies > localStorage
//      https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage

// on déclare une paire de clé valeur dans le localStorage, celle ci reste stocker tant qu'on ne l'a pas supprimer 
localStorage.setItem('Comment ca marche le localStorage', 'Ca marche comme ça')

//localStorage.removeItem('monChat');
//                          ^
// Je retire l'élément désigné en paramètre 

// Effacer tous les éléments du localStorage 
//localStorage.clear()
console.log(localStorage);

// voir main2.js pour le getItem qui récupère les valeur contenue dans le localStorage

// test de stockage d'une tableau
let tab = ["toto", 2, 3, 4]

localStorage.setItem("monTab", tab);


// Convertir en JSON : 

// Transformer en chaine de caractère : 
// doc : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
let monTableauEnJSON = JSON.stringify(tab);
console.log(monTableauEnJSON)
localStorage.setItem('tableau JSON', monTableauEnJSON)

// Transformer en JSON 
let monTabDuStorage = localStorage.getItem("tableau JSON"); // on récupère le tableau du storage
let objParse = JSON.parse(monTableauEnJSON) // On le converti en obj javascript
console.log(objParse)
console.log(objParse[2])

// Bonne pratique : renseigner le nom du site dans le nom de la clé pour pouvoir s'y retrouver 
