let myId = window.location.hash.split('#')[1];
import { Perso } from "./perso.class.js";



let myMethod = 'PUT';


 //si myId est null, on va créer un nouveau personne, nouvelle ID
 if (!myId){
    let btn = document.querySelector('#btnSubmit');
    btn.innerHTML = "Nouveau Personnage";

    myId ='';
    myMethod = 'POST';
    }

    


let myHeaders = new Headers();
let url = `/form/${myId}`;
let options = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

let containerForm = document.querySelector('form');

fetch(url, options)
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    })
    .then((perso) => {
        console.log(perso);
        if (perso.id === -1) {
            //c'est un nouveau personnage
            
        } 
        else {
            //on modifie un personnage
            let personnage = new Perso(perso.id, perso.name, perso.card, perso.profilCard, perso.rarity, perso.element, perso.weapon, perso.statLvlMin, perso.statLvlMax, perso.releaseDate);
            personnage.createForm(containerForm);
         }
  
    })
    .catch((err) => {
        console.log('Error fetch /perso', err);
        window.location = "/notfound.html";
    });

/* ----------------------------------- */
/*               POST                  */
/* ----------------------------------- */
  document.querySelector('#btnSubmit').addEventListener('click', () => {


let url = `/form/${myId}`;   
 if(myId===''){
    let data = sessionStorage.getItem('data');
    let jsonData = JSON.parse(data);
    let newId = (jsonData[jsonData.length-1].id) + 1;
    myId = newId;
    url = '/form';
 }

    let perso ={id: myId, 
                name: document.forms.form.InpName.value,
                card: 'card',
                profilCard: 'profilCard',
                name: document.forms.form.InpName.value,
                rarity: document.forms.form.rarity.value,
                element: document.forms.form.element.value,
                weapon: document.forms.form.weapon.value,
                statLvlMin: {Atq: document.forms.form.InpStatLvlMinAtq.value,Def: document.forms.form.InpStatLvlMinDef.value, Pv: document.forms.form.InpStatLvlMinPv.value},
                statLvlMax: {Atq: document.forms.form.InpStatLvlMaxAtq.value,Def: document.forms.form.InpStatLvlMaxDef.value, Pv: document.forms.form.InpStatLvlMaxPv.value},
                releaseDate: document.forms.form.InpReleaseDate.value};


    
    let options = {
       method: myMethod,
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       mode: 'cors',
       cache: 'default',
       body: JSON.stringify(perso)
     };
    
    fetch(url, options)
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((response) => {
        sessionStorage.setItem('data',Perso);
        console.log(response);
        let Msg = document.createElement('p');
        Msg.innerHTML = "Création du personnage réussie !\n vous allez être redirigé vers la liste des personnages";
        containerForm.appendChild(Msg);
        setTimeout(() => {window.location = "/persos.html"}, 5000);



      })
      .catch((err) => {
        console.log('Error fetch /form', err);
      })
  });



