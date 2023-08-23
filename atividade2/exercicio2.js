function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let linha = "";
        for (let j = 0; j < matriz[i].length; j++) {
            linha += matriz[i][j] + "\t"; 
        }
        console.log(linha);
    }
}

function matrizTransposta(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;

    const transposta = [];
    for (let i = 0; i < colunas; i++) {
        transposta.push([]);
    }

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            transposta[j][i] = matriz[i][j];
        }
    }

    return transposta;
}

const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matriz A:");
imprimirMatriz(matrizA);

const matrizATransposta = matrizTransposta(matrizA);

console.log("\nMatriz Transposta de A:");
imprimirMatriz(matrizATransposta);