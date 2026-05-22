
const path = require('path');



const home = (req, res) => {
    // Note o '..' para subir uma pasta antes de entrar em 'views'
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html')); 
};

const modelos = (req, res) =>{
    res.sendFile(path.join(__dirname, '..', 'views', 'modelos.html'));
};


module.exports = { home, modelos};

