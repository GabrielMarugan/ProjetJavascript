const dir = '../src/assets/img/';

export class Perso {
    _id
    _name;
    _card;
    _profilCard;
    _rarity;
    _element;
    _weapon;
    _statLvlMin;
    _statLvlMax;
    _releaseDate;

    _dom;

    constructor(Id, Name, Card, ProfilCard, Rarity, Element, Weapon, StatLvlMin, StatLvlMax , ReleaseDate) {
        this.id = Id;
        this.name = Name;
        this.card = Card;
        this.profilCard = ProfilCard;
        this.rarity = Rarity;
        this.element = Element;
        this.weapon = Weapon;
        this.statLvlMin = StatLvlMin;
        this.statLvlMax = StatLvlMax;
        this.releaseDate = ReleaseDate;


    }

    /* *************************************************************
    
                                GET & SET
    
    *************************************************************** */
    get id() {
        return this._id;
    }

    set id(tmp) {
        this._id = tmp;
    }


    get name() {
        return this._name;
    }

    set name(tmp) {
        this._name = tmp;
    }

    get card() {
        return this._card;
    }

    set card(tmp) {
        this._card = tmp;
    }

    get profilCard() {
        return this._profilCard;
    }

    set profilCard(tmp) {
        this._profilCard = tmp;
    }


    get rarity() {
        return this._rarity;
    }


    set rarity(tmp) {
        this._rarity = tmp;
    }
    get element() {
        return this._element;
    }

    set element(tmp) {
        this._element = tmp;
    }
    get weapon() {
        return this._weapon;
    }

    set weapon(tmp) {
        this._weapon = tmp;
    }

  
    get statLvlMin() {
        return this._statLvlMin;
    }

    set statLvlMin(tmp) {
        this._statLvlMin = tmp;
    }

    get statLvlMax() {
        return this._statLvlMax;
    }

    set statLvlMax(tmp) {
        this._statLvlMax = tmp;
    }

    get releaseDate() {
        return this._releaseDate;
    }

    set releaseDate(tmp) {
        this._releaseDate = tmp;
    }

    /* ***********************************************************
    
    
    
    ************************************************************ */
    

    AffichageListe(target) {

        //on creer une ligne de tableau
        this._dom = document.createElement('tr');



        //creation de span avec les éléments noms,rareté,element et armes
        let tCard = document.createElement('td');
        let imgProfil = document.createElement('img');
        imgProfil.setAttribute('src', this.profilCard);
        imgProfil.setAttribute('alt', "profilCard");
        tCard.appendChild(imgProfil);
        
        let tName = document.createElement('td');
        tName.innerText = `${this.name}`;


        let tRarity = document.createElement('td');
        tRarity.innerText = `Rareté: ${this.rarity}`;


        let tElement = document.createElement('td');
        tElement.innerText = `Element: ${this.element}`;


        let tWeapon = document.createElement('td');
        tWeapon.innerText = `Arme: ${this.weapon}`;

        let det = document.createElement('a');
        det.setAttribute('href', `./perso.html#${this.id}`);
        det.innerText = 'Détail';

        //ajout des éléments au dom
        this._dom.appendChild(tCard);
        this._dom.appendChild(tName);
        this._dom.appendChild(tRarity);
        this._dom.appendChild(tElement);
        this._dom.appendChild(tWeapon);
        this._dom.appendChild(det);

        //ajout du dom à la page ciblé
        target.appendChild(this._dom);

        console.log(this);

    }
    
    AffichageDetail(target) {

        //on creer une ligne de tableau
        this._dom = document.createElement('div');



        //creation de span avec les éléments noms,rareté,element et armes
        let tName = document.createElement('span');
        tName.innerText = `${this.name}`;


        let tRarity = document.createElement('span');
        tRarity.innerText = `Rareté: ${this.rarity}`;


        let tElement = document.createElement('span');
        tElement.innerText = `Element: ${this.element}`;


        let tWeapon = document.createElement('span');
        tWeapon.innerText = `Arme: ${this.weapon}`;

        let imgCard = document.createElement('img');
        imgCard.setAttribute('src', this.card);
        imgCard.setAttribute('alt', "Card");

        let tAffiliation = document.createElement('span');
        tAffiliation.innerText = `statlvlmin: ${this.statLvlMin}`;
        let tableStat = document.createElement('table');



        let tReleaseDate = document.createElement('span');
        tReleaseDate.innerText = `Date de sortie: ${this.releaseDate}`;

 


        //ajout des éléments au dom
        this._dom.appendChild(tName);
        this._dom.appendChild(tRarity);
        this._dom.appendChild(tElement);
        this._dom.appendChild(tWeapon);
        this._dom.appendChild(imgCard);
        this._dom.appendChild(tAffiliation);
        this._dom.appendChild(tReleaseDate);
        this._dom.appendChild(btnDelete);

        console.log(target);


        //ajout du dom à la page ciblé
        target.appendChild(this._dom);

        console.log(this);

    }


    createForm(target){
        //si myId est null, on créer un formulaire vide pour la création
        let btn = document.querySelector('#btnSubmit');
            
            //on change le titre du formulaire
             let titlePage = target.querySelector('h1');
             titlePage.innerText = `Modification de ${this.name}`;

            //on remplit le formulaire avec les données du perso
           let inpName = target.querySelector('#InpName');
           inpName.setAttribute('value', this.name);

           let inpRarity = target.querySelector(`#rarity${this.rarity}`);
           inpRarity.setAttribute('checked' , true);

           let inpWeapon = target.querySelector(`#${this.weapon}`);
           inpWeapon.setAttribute('checked', true);

           let inpElement = target.querySelector(`#${this.element}`);
           inpElement.setAttribute('checked', true);

            let InpStatLvlMinAtq = target.querySelector(`#InpStatLvlMinAtq`);
            InpStatLvlMinAtq.setAttribute('value', this.statLvlMin.Atq);

            let InpStatLvlMaxAtq = target.querySelector(`#InpStatLvlMaxAtq`);
            InpStatLvlMaxAtq.setAttribute('value', this.statLvlMax.Atq);

            let InpStatLvlMinDef = target.querySelector(`#InpStatLvlMinDef`);
            InpStatLvlMinDef.setAttribute('value', this.statLvlMin.Def);

            let InpStatLvlMaxDef = target.querySelector(`#InpStatLvlMaxDef`);
            InpStatLvlMaxDef.setAttribute('value', this.statLvlMax.Def);

            let InpStatLvlMinPv = target.querySelector(`#InpStatLvlMinPv`);
            InpStatLvlMinPv.setAttribute('value', this.statLvlMin.Pv);

            let InpStatLvlMaxPv = target.querySelector(`#InpStatLvlMaxPv`);
            InpStatLvlMaxPv.setAttribute('value', this.statLvlMax.Pv);

            let InpReleaseDate = target.querySelector('#InpReleaseDate');
            InpReleaseDate.setAttribute('value', this.releaseDate);

            btn.innerHTML = "Modifier";




            console.log(this);
        
    }

}