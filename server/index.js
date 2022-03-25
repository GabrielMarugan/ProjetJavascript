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

let app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server lauch on port : ${port}`);

});

//configuration de express
const distDir = '../src/'
app.use('/pages', express.static(path.join(__dirname, distDir, '/pages')));
app.use('/assets', express.static(path.join(__dirname, distDir, '/assets')));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, distDir, 'index.html'));

});


