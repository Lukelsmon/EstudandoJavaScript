// Ao contrário de uma variável, um objeto pode conter diversos valores e de tipos diferentes armazenados nele (atributos) e também possuir funções que operem sobre esses valores (métodos). Tanto os atributos, quanto os métodos, são chamados de propriedades do objeto.

// Em JavaScript, os objetos são estruturas de dados que permitem armazenar e organizar informações de maneira mais complexa. Eles são compostos por pares de chave-valor, onde a chave é uma string que identifica a propriedade do objeto e o valor pode ser de qualquer tipo, incluindo outros objetos ou funções.

// Para criar um objeto em JavaScript, você pode usar a sintaxe de objeto literal, que é uma maneira simples e direta de definir um objeto. Aqui está um exemplo de como criar um objeto chamado "pessoa" com algumas propriedades:

var pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    saudacao: function() {
        console.log("Olá, meu nome é " + this.nome + "!");
    }
};

// Neste exemplo, o objeto "pessoa" possui três propriedades: "nome", "idade" e "profissao", que armazenam informações sobre a pessoa. Além disso, ele possui um método chamado "saudacao", que é uma função que exibe uma mensagem de saudação usando a propriedade "nome" do objeto.

// Para acessar as propriedades do objeto, você pode usar a notação de ponto ou a notação de colchetes. Aqui estão exemplos de ambas as formas:

// Usando a notação de ponto
console.log(pessoa.nome); // Isso exibirá "João" no console
console.log(pessoa.idade); // Isso exibirá 30 no console

// Usando a notação de colchetes
console.log(pessoa["profissao"]); // Isso exibirá "Desenvolvedor" no console

// Para chamar o método do objeto, você pode usar a notação de ponto seguida do nome do método e parênteses:

pessoa.saudacao(); // Isso exibirá "Olá, meu nome é João!" no console

// Neste exemplo, o método "saudacao" é chamado, e ele utiliza a palavra-chave "this" para acessar a propriedade "nome" do objeto e exibir a mensagem de saudação. Os objetos são uma parte fundamental da programação em JavaScript e são amplamente utilizados para organizar dados e criar estruturas mais complexas em seus programas.

// E já falando em métodos, eles são funções associadas a um objeto e podem acessar e manipular as propriedades do objeto usando a palavra-chave "this". Os métodos são úteis para definir comportamentos específicos para um objeto e podem ser chamados para executar ações relacionadas ao objeto. No exemplo acima, o método "saudacao" é um exemplo de um método que exibe uma mensagem de saudação usando a propriedade "nome" do objeto "pessoa".

// Além disso, os objetos em JavaScript podem ser criados usando construtores, que são funções especiais usadas para criar instâncias de objetos. Aqui está um exemplo de como criar um objeto usando um construtor:

function Pessoa(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.saudacao = function() {
        console.log("Olá, meu nome é " + this.nome + "!");
    };
}

// Para criar uma instância do objeto "Pessoa", você pode usar a palavra-chave "new" seguida do nome do construtor e os argumentos necessários:

var pessoa1 = new Pessoa("Maria", 25, "Designer");
var pessoa2 = new Pessoa("Carlos", 40, "Gerente");

// Agora, você pode acessar as propriedades e métodos das instâncias criadas:

console.log(pessoa1.nome); // Isso exibirá "Maria" no console
console.log(pessoa2.profissao); // Isso exibirá "Gerente" no console

pessoa1.saudacao(); // Isso exibirá "Olá, meu nome é Maria!" no console
pessoa2.saudacao(); // Isso exibirá "Olá, meu nome é Carlos!" no console

// Neste exemplo, o construtor "Pessoa" é definido para criar objetos com as propriedades "nome", "idade" e "profissao", bem como o método "saudacao". As instâncias "pessoa1" e "pessoa2" são criadas usando o construtor, e cada uma possui suas próprias propriedades e métodos. Os construtores são uma maneira eficiente de criar múltiplos objetos com a mesma estrutura e comportamento em JavaScript.