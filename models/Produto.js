const mongoose = require('mongoose');

const produtosSchema = new mongoose.Schema({
    Nome: String,
    Preco: Number
});

const Produto = mongoose.model('Produto',produtosSchema);
module.exports = Produto;
