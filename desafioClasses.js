class Heroi {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ["magia", "espada", "artes marciais", "shuriken"];
    }

    atacar(heroi) {
        if (heroi.tipo === "mago") {
            console.log(`O ${heroi.tipo} atacou usando ${this.ataque[0]}`);
        } else if(heroi.tipo === "guerreiro") {
            console.log(`O ${heroi.tipo} atacou usando ${this.ataque[1]}`);
        } else if(heroi.tipo === "monge") {
            console.log(`O ${heroi.tipo} atacou usando ${this.ataque[2]}`);
        } else if(heroi.tipo === "ninja") {
            console.log(`O ${heroi.tipo} atacou usando ${this.ataque[3]}`);
        } else {
            return "Tipo inválido"
        }
    }
}

let heroi = new Heroi("Goku", 25, "guerreiro");
let heroi2 = new Heroi("Veigar", 20, "mago");
let heroi3 = new Heroi("Aang", 12, "monge");
let heroi4 = new Heroi("Naruto", 15, "ninja")
heroi.atacar(heroi4);

