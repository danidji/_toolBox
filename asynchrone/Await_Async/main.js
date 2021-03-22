console.log('main.js');

// API - URL : https://www.songsterr.com/a/ra/songs.json?pattern=Marley
// doc : vidéo grafikart : https://grafikart.fr/tutoriels/promise-async-await-875#autoplay


//fonction qaui gère ma requère AJAX
const get = function (url) {
    let xhr = new window.XMLHttpRequest();

    xhr.onreadystatechange = function () {
        // mettre le tout dans un try catch pour gerer les erreurs
        if (xhr.readyState === 4) {
            let songsTab = JSON.parse(xhr.responseText)

            for (let song of songsTab) {
                console.log(song.title)

            }
        }
    }
    xhr.open('GET', url, true)
    xhr.send()
}

const asyncFunction = async function () {
    let response = await get('https://www.songsterr.com/a/ra/songs.json?pattern=Marley');
    // console.log(response)

}

asyncFunction()
// console.log(asyncFunction())