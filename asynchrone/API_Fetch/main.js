console.log('main.js');

// doc : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
// https://www.taniarascia.com/how-to-use-the-javascript-fetch-api-to-get-json-data/
// https://grafikart.fr/tutoriels/fetch-1017


const InfoARecuperer = "https://foodish-api.herokuapp.com/api/"

function getFetch() {
    fetch(InfoARecuperer) // Fetch récupèrer le fichier de l'URL ensuite on appele une fonction
        .then((response) => {
            console.log("1")
            console.log(response)
            return response.json(); //on récupère le contenue JSON
        })
        // On demande ensuite d'effectuer une action si l'action précédente fonctionne
        // Le contenue du response.json sont contenue dans le data
        // Il est important de bien mettre son code traitant les données dans le then pour bien que les actions soient réalisées quand on a récupérer les informations 
        .then((data) => {
            console.log(data)
            div.innerHTML = `<img src="${data.image}" alt="test" width="500px" height="500px">`;
        })

        .catch((err) => {
            console.log("3")
            console.log(err)
            // Do something for an error here
        })
}

let button = document.querySelector(".test");

let div = document.querySelector("#photo")

button.addEventListener('click', getFetch)







