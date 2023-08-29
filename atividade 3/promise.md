# O que são Promises em JavaScript?

> Uma Promise é um proxy para um valor que não é necessariamente conhecido quando a promise é criada. Ela permite associar manipuladores (handlers) com o valor de sucesso eventual ou a razão de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promise para fornecer o valor em algum momento no futuro.

Informações detalhadas sobre Promises podem ser encontradas [aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

> Exemplos:

```javascript

const minhaPromise = new Promise((resolve, reject) => {

setTimeout(() => {
    const sucesso = true;
    if (sucesso) {
      resolve("A operação foi bem-sucedida!");
    } else {
      reject("A operação falhou!");
    }
  }, 2000);
});


minhaPromise
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.error(erro);
  });