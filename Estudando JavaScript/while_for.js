// Os laços While, For e Do...While em JavaScript são estruturas de controle de fluxo que permitem executar um bloco de código repetidamente enquanto uma condição for verdadeira. Aqui estão exemplos de cada um:

// Laço While
var contador = 0;

while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}

// Laço For
for (var i = 0; i < 5; i++) {
    console.log("Índice: " + i);
}

// Laço Do...While
var numero = 0;

do {
    console.log("Número: " + numero);
    numero++;
} while (numero < 5);

// Laço for In
var pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };

for (var propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade]);
}


// Resumo dos laços em JavaScript:
// - O laço While Os laços do tipo while são usados quando se deseja que uma sequência de ações seja executada apenas no caso da expressão de condição ser válida. Assim, primeiro a expressão é testada, para depois o conteúdo do laço ser executado ou não.
// - O laço For é uma estrutura mais compacta que inclui a inicialização, a condição e a atualização em uma única linha. Ele é útil para iterar sobre um número conhecido de vezes.
// - Diferentemente do While, o do ... while primeiro executa o conteúdo do laço uma vez e, depois disso, realiza o teste da expressão para decidir se continuará executando o laço ou irá seguir o resto do programa.