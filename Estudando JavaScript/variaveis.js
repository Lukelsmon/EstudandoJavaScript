// Variáveis em JavaScript
var nome = "João";
var idade = 25;
var altura = 1.75;

// Exibindo as variáveis
console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Altura: " + altura);

// Variáveis com let e const; Significam que let pode ser reatribuída, enquanto const não pode ser reatribuída. Portanto, tentar modificar a variável pais resultará em um erro.

let cidade = "São Paulo";
const pais = "Brasil";

console.log("Cidade: " + cidade);
console.log("País: " + pais);

// Modificando a variável cidade

cidade = "Rio de Janeiro";
console.log("Cidade modificada: " + cidade);

// Váriavel Booleana; Significa que a variável pode assumir apenas dois valores: true (verdadeiro) ou false (falso). No exemplo abaixo, a variável isStudent é do tipo booleano e indica se a pessoa é estudante ou não.

var isStudent = true; // A variável isStudent é do tipo booleano e indica que a pessoa é estudante.
console.log("É estudante? " + isStudent);

// Variável undefined; Significa que a variável não foi inicializada. No exemplo abaixo, a variável endereco é declarada, mas não recebe um valor, portanto seu valor é undefined.

var endereco;
console.log("Endereço: " + endereco);

// Variável null; Significa que a variável foi intencionalmente definida como vazia ou sem valor. No exemplo abaixo, a variável telefone é definida como null, indicando que não há um número de telefone associado a ela.

var telefone = null;
console.log("Telefone: " + telefone);

// Strings; Significa que a variável pode armazenar uma sequência de caracteres. No exemplo abaixo, a variável mensagem é do tipo string e contém a frase "Olá, Mundo!".

var mensagem = "Olá, Mundo!";
console.log(mensagem);

// Arrays; Significa que a variável pode armazenar uma coleção de valores. No exemplo abaixo, a variável frutas é um array que contém três elementos: "maçã", "banana" e "laranja".

var frutas = ["maçã", "banana", "laranja"];
console.log("Frutas: " + frutas);

// Objetos; Significa que a variável pode armazenar uma coleção de propriedades e valores. No exemplo abaixo, a variável pessoa é um objeto que contém as propriedades nome, idade e cidade.

var pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "Rio de Janeiro"
};

console.log("Pessoa: " + pessoa.nome + ", " + pessoa.idade + " anos, " + pessoa.cidade);