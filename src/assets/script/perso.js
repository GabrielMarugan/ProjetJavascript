let myId = window.location.hash.split('#')[1];
import { Perso } from "./perso.class.js";

let myHeaders = new Headers();
let url = `/perso/${myId}`;
let options = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

let containerTable = document.querySelector('div');

fetch(url, options)
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    })
    .then((perso) => {
        let personnage = new Perso(perso.id, perso.name, perso.card, perso.profilCard, perso.rarity, perso.element, perso.weapon, perso.statLvlMin, perso.statLvlMax, perso.releaseDate);
        personnage.AffichageDetail(containerTable);
  
    })
    .catch((err) => {
        console.log('Error fetch /perso', err);
        window.location = "/notfound.html";
    });


/* ----------------------------------- */
/*               DELETE                */
/* ----------------------------------- */
  document.querySelector('#btnDelete').addEventListener('click', () => {

    let accept = window.confirm("Êtes vous sûre de vouloir supprimer ce personnage ?");
    if(accept){
        let url = `/perso/${myId}`;
        let options = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        };
        
        fetch(url, options)
        .then((res) => {
            if(res.ok) {
            return res.json();
            }
            return Promise.reject(res);
        })
        .then((response) => {
            console.log(response);
            sessionStorage.setItem('data',Perso);
            let Msg = document.createElement('p');
            Msg.innerHTML = "Suppression du personnage réussie !\n vous allez être redirigé vers la liste des personnages";
            containerTable.appendChild(Msg);
            setTimeout(() => {window.location = "/persos.html"}, 5000);

        })
        .catch((err) => {
            console.log('Error  delete fetch /perso', err);
        })
    }
  });
