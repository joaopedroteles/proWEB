//joao pedro de oliveira teles
//UC21104804

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

rl.question('Digite um número: ', (input) => {
    const number = parseInt(input);

    console.log(`${number} ${isPrime(number) ? 'é primo.' : 'não é primo.'}`);

    rl.close();
});