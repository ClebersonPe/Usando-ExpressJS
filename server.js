const express = require('express');
const connectDB = require("./config/config");
const motoRoutes = require('./routes/motoRoutes');
const app = express();

connectDB();

app.use(express.json());
// Essencial para carregar CSS/JS da pasta public
app.use(express.static("public")); 

// Use as rotas na raiz '/' para facilitar o acesso às páginas
app.use('/', motoRoutes);

app.listen(4000, () => console.log('Servidor rodando em http://localhost:4000'));