const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Rotas
const ffxivApi = require('./routes/ffxiv');


app.use(express.json());
app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173', // substitua pelo seu domínio front-end
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.get('/', (req, res) => {
  const obj = [
    {
        title:"O que é um primal?",
        create_date: "2024-08-04T18:02:00"
    }
  ]
  res.json(obj);
});

// API FFXIV
app.use("/ffxiv", ffxivApi)


app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});