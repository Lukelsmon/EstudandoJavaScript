// A estrutura if-else em JavaScript é usada para executar um bloco de código se uma condição for verdadeira e outro bloco de código se a condição for falsa. A sintaxe básica é a seguinte:

var idade = 17;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Neste exemplo, a condição verifica se a variável idade é maior ou igual a 18. Se for verdadeira, a mensagem "Você é maior de idade." será exibida. Caso contrário, a mensagem "Você é menor de idade." será exibida.

// Você também pode usar a estrutura if-else if para verificar múltiplas condições:

var nota = 85;

if (nota >= 90) {
    console.log("Excelente!");
} else if (nota >= 80) {
    console.log("Muito bom!");
} else if (nota >= 70) {
    console.log("Bom!");
} else {
    console.log("Precisa melhorar.");
}

// Neste exemplo, a estrutura if-else if verifica várias faixas de notas e exibe uma mensagem correspondente com base na nota fornecida.