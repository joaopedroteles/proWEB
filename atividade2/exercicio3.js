function imprimirMatriz(matriz) {
    matriz.forEach(row => console.log(row.join("\t")));
}

function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;

    if (colunasA !== linhasB) {
        return "Não é possível calcular";
    }

    const matrizC = [];
    for (let i = 0; i < linhasA; i++) {
        matrizC.push([]);
        for (let j = 0; j < colunasB; j++) {
            matrizC[i][j] = 0;
        }
    }

    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return matrizC;
}

const matrizA = [
    [1, 2],
    [3, 4]
];

console.log("Matriz A:");
imprimirMatriz(matrizA);

const matrizB = [
    [5, 6],
    [7, 8]
];

console.log("Matriz b:");
imprimirMatriz(matrizB);

const resultado = multiplicarMatrizes(matrizA, matrizB);

if (resultado === "Não é possível calcular") {
    console.log(resultado);
} else {
    console.log("Matriz Resultante C:");
    for (let i = 0; i < resultado.length; i++) {
        console.log(resultado[i]);
    }
}

