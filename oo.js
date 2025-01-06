// Classe de abstração
class Animal {
    constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    }

    emitirSom() {
    console.log(`${this.nome} está emitindo um som.`);
    }
}

  // Classes herdeiras
class Cachorro extends Animal {
    emitirSom() {
    console.log(`${this.nome} está latindo.`);
    }
}

class Gato extends Animal {
    emitirSom() {
    console.log(`${this.nome} está miando.`);
    }
}

// Instâncias de objetos
const cachorro1 = new Cachorro("Rex", 3);
const gato1 = new Gato("Mia", 2);
const cachorro2 = new Cachorro("Max", 5);

// Testando as instâncias
cachorro1.emitirSom(); // Stam está latindo.
gato1.emitirSom();     // Mimi está miando.
cachorro2.emitirSom(); // Caramelo está latindo.
