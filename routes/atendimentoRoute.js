const { Router} = require("express");
const router = Router();

router.get('/atendimentos', (req, res) =>{
    res.send("chegou")
})

router.post('/atendimentos', (req, res) =>{
    res.send("chegou o post")
})

router.put('/atendimento/:id', (req, res) =>{
    const { id } = req.params;
    res.send(`Atualizando o atendimento ${id}`)
})

router.delete('/atendimento/:id', (req, res) =>{
    const { id } = req.params;
    res.send(`Deletando o atendimento ${id}`)
})

module.exports = router;