const router = require('express').Router()

//Importando Arquivo Produtos.js
const Produto = require("../models/Produto");


//Rota POST
router.post("/", async (req,res)=>{

    const {Nome,Preco} = req.body

    const produtos = {
        Nome,
        Preco
    }

    //VALIDAÇÕES

    if(!Nome){
        return res.status(422).json({message:"Nome do produto é obrigatório"});
    }

    //CRIAR PRODUTO

    try {
        await Produto.create(produtos);
        res.status(201).json({message:"Produto Criado com sucesso"});
    } catch (error) {
        res.status(500).json({ error: error});    
    }

})

//READ

router.get("/", async (req,res)=>{
    try {

        const produto = await Produto.find()
        res.status(200).json(produto)

    } catch (error) {
        
        res.status(500).json({error:error})

    }
})

router.get('/:id', async (req,res)=>{
    const id = req.params.id
    try {
        const produto = await Produto.findOne({_id:id})
        res.status(200).json(produto)

    } catch (error) {
        res.status(500).json({error:error})
    }
})

//UPDATE

router.patch('/:id', async (req,res)=>{
    const id = req.params.id

    const {Nome,Preco} = req.body

    const produtos = {
        Nome,
        Preco
    }

    try{
        const updateProduto = await Produto.updateOne({_id:id},produtos)

        res.status(200).json({message:`Produto Atualizado com sucesso `})

    }catch(error){
        res.status(500).json({error:error})
    }


})

router.delete("/:id", async (req,res)=>{

    const id = req.params.id
  
    const produto = await Produto.findOne({_id:id})

    if(!produto){
        res.status(422).json({message:"O produto não existe"})
    }

    try {
        await Produto.deleteOne({_id:id})
        res.status(200).json({message:"Produto deletado do sistema"})
    } catch (error) {
        res.status(500).json({error:error})
    }
    
})

module.exports = router