console.log('main.js');

// rieng /error / undefined
// La variable est définie sur la page 1
let cat = localStorage.getItem('monChat');


// Avec la méthode getItem je peux récupérer un élément contenue dans mon localStorage
let test = localStorage.getItem('Comment ca marche le localStorage')


console.log(cat)
console.log(test)


let monTab = localStorage.getItem("monTab") // on récupère les valeurs du tableau en chaine de caractère avec chacune des valeurs du tableau séparé d'une virgule
console.log(monTab)


let monObj = localStorage.getItem("monObj")
console.log(monObj)
