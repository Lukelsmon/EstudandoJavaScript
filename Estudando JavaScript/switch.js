// Estruturas tipo Switch em JavaScript
// A estrutura switch em JavaScript é usada para executar diferentes blocos de código com base no valor de uma expressão. A sintaxe básica é a seguinte:

var diaDaSemana = 7;

switch (diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia da semana inválido.");
}

// Neste exemplo, a variável diaDaSemana é avaliada no switch. O caso correspondente ao valor 3 é executado, resultando na exibição de "Terça-feira". O uso do break é importante para evitar que o código continue executando os casos seguintes após encontrar uma correspondência. O caso default é opcional e é executado quando nenhum dos casos anteriores corresponde ao valor da expressão.