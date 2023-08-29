# Oque são as Funções Arrow no JavaScript?

> Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio `this`, `arguments`, `super` ou `new.target`. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

As **Arrow Functions**, ou funções de seta, são uma forma concisa e simplificada de criar funções em JavaScript introduzidas no ECMAScript 6 (ES6).

Informações retiradas do [link](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> exemplos:

```javascript

function exemplo() {
  console.log("Bloco de código em JavaScript.");
}

const saudacao = () => "Hello, World!";

const soma = (a, b) => a + b;

const quadrado = (x) => x * x;


