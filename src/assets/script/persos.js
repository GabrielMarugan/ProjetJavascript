import { Perso } from "./perso.class.js";

let myHeaders = new Headers();
let url = '/persos';
let options = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

let containerTable = document.querySelector('table');

fetch(url, options)
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    })
    .then((response) => {
        // on enregistre les donnée dans le sessionStorage,
        //on aurait pu enregister dans le LocalStorage pour ne pas perdre les données à la fermeture de la session
        sessionStorage.setItem('data', JSON.stringify(response));
        response.forEach(perso => {       
            let personnage = new Perso(perso.id, perso.name, perso.card, perso.profilCard, perso.rarity, perso.element,perso.weapon, perso.statLvlMin, perso.statLvlMax, perso.releaseDate);
            personnage.AffichageListe(containerTable);
        });
    })
    .catch((err) => {
        console.log('Error fetch /persos', err);
    });





   document.querySelector('#btnSubmit').addEventListener('click', () => {
    window.location = '/form.html';
   });
