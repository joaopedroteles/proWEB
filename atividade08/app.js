const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Rota raiz, exibe o formulário
app.get('/', (req, res) => {
  res.render('index.ejs');
});

// Função middleware para calcular o resultado
const calcularResultado = (req, res, next) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const operacao = req.body.operacao;

  let resultado;

  switch (operacao) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num1 / num2;
      break;
    default:
      resultado = 'Operação inválida';
  }

  res.locals.resultado = resultado; // Armazena o resultado na resposta local
  next(); // Continua para a próxima função middleware
};

// Rota /calcular, realiza o cálculo
app.post('/calcular', calcularResultado, (req, res) => {
  res.render('resultado.ejs'); // Renderiza a página com o resultado
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});