const express = require('express');
const router = express.Router();

// Rota para obter informações da loja
router.get('/', (req, res) => {
  res.send('Bem-vindo a API de FFXIV nova');
});

router.post("/", (req, res) => {
    const body = req.body;
    let mensagem = JSON.stringify(body);

    res.status(201).send("Adicionado com sucesso. " + mensagem);

})

module.exports = router;