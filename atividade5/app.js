const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// renderiza o formulário
app.get('/', (req, res) => {
  res.render('index'); // Renderiza o arquivo 'index.ejs' na pasta 'views'
});

// recebe os dados do formulário e renderizar a página dados.html
app.post('/dados', (req, res) => {
  const nome = req.body.nome;
  const endereco = req.body.endereco;
  const telefone = req.body.telefone;
  const data = req.body.data;
  const agendamento = req.body.agendamento;

  // Renderiza a página 'dados.ejs' e passa os dados como variáveis
  res.render('dados', {
    nome,
    endereco,
    telefone,
    data,
    agendamento,
  });
});

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});