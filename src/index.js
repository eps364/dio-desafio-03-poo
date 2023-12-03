class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar(heroi) {
    let tipo = heroi.tipo;
    let ataque = this.verificarAtaque(heroi);
    console.log(`o ${tipo} atacou usando ${ataque}`);
  }

  verificarAtaque(heroi) {
    if (heroi.tipo == "mago") return "magia";
    if (heroi.tipo == "guerreiro") return "espada";
    if (heroi.tipo == "monge") return "artes marciais";
    if (heroi.tipo == "ninja") return "shuriken";
  }
}

const mago = new Heroi("Mago", 30, "mago");
mago.atacar(mago);

const guerreiro = new Heroi("Guerreiro", 30, "guerreiro");
guerreiro.atacar(guerreiro);

const monge = new Heroi("Monge", 30, "monge");
monge.atacar(monge);

const ninja = new Heroi("Ninja", 30, "ninja");
ninja.atacar(ninja);
