//Dependencias
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const MongoDB = require('mongodb');



//Porta do servidor 
Porta  = 3000;


const app = express();

app.use(bodyParser.json());

//Rotas DA API
const produtosRoutes = require('./routes/produtosRoutes');

app.use('/Produtos',produtosRoutes);

//Rota Inicial
app.get("/",(req,res)=>{
    res.json({message:"SALVE GABRIELAA A API TA FUNCIONANDO"});
});

//Conexão Mongodb
mongoose.connect('mongodb+srv://JoaoPedro:68wH3sQSxpkXjHgv@produtos.22rgkv7.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

//Porta do servidor
app.listen(Porta,(req,res)=>{
    console.log(`servidor rodando na porta https://localhost:${Porta}`);
})

