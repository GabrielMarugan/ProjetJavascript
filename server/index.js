/* *********************************************************************************

                configuration NODE

*********************************************************************************** */
/* const http = require('http');
/ const server = http.createServer((req, res) => {
/     console.log('Serveur démarré !');
/     res.end('Message envoyé');
/ });


/ server.listen(3000); 
*/

/* *********************************************************************************

            configuration NODE avec EXPRESS

*********************************************************************************** */
//autre manière de faire en 1 seul ligne
//let app = require('express')();
const express = require('express');
const path = require('path');
const Perso = require('./data/persos');

let app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server lauch on port : ${port}`);

});

//configuration de express
const distDir = '../src/'
app.use('/', express.static(path.join(__dirname, distDir, '/pages')));
app.use('/assets', express.static(path.join(__dirname, distDir, '/assets')));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, distDir, 'index.html'));

});

app.get('/persos', (req, res) => {
    res.send(Perso);
});

app.get('/perso/:id', (req, res) => {
        let myId = parseInt(req.params.id);
        let result = undefined;
        Perso.forEach((elt) => {
          if(elt.id == myId) {
            result = res.send(elt);
          }
        });
        
        if (result === undefined){
            //si aucun résultat n'a été renvoyé, aucun personnage n'a été trouvé
            res.status(404).json({ error: 'Ce personnage n\' exsite pas.' })
        }
          
      });
      
app.post('/form', (req, res) => {
    console.log(req.body);
        Perso.push(req.body);
        res.send(Perso);

});

app.put('/form/:id', (req, res) => {
    let myId = req.params.id;
    let trouver = Perso.findIndex((perso) => perso.id === parseInt(myId));
    Perso.splice(trouver,1,req.body);

    res.send(Perso);

});

app.delete('/perso/:id', (req, res) => {
    let myId = req.params.id;
    let trouver = Perso.findIndex((perso) => perso.id === parseInt(myId));
    Perso.splice(trouver,1);
    res.send(Perso);

});

app.get('/form/:id?', (req, res) => {
    let myId = req.params.id;
    let result = undefined;
    if (!req.params.id) {
        res.send({id: -1});
        result = {};
    }
    else{
        Perso.forEach((elt) => {
        if(elt.id == myId) {
            result = res.send(elt);
            }

        });
        
        if (result === undefined){
            //si aucun résultat n'a été renvoyé, aucun personnage n'a été trouvé
            res.status(404).json({ error: 'Ce personnage n\' exsite pas.' })
        }
    }

});
