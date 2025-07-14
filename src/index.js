// Classe herói
class Heroi {
    constructor(tipo, nome, idade, sexo) {
        this.tipo = tipo;        
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    atacar() {
        let ataque ="";
        switch(this.tipo) {
            case "Guerreiro":
            case "Guerreira":
                ataque = "espada";
                break;
            case "Mago":
            case "Maga":
                ataque = "magia";
                break;
            case "Monge":
            case "Monja":
                ataque = "artes marciais";
                break;
            case "Ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "genérico";
        }
        if (this.sexo === "F") {
            return `A ${this.tipo} ${this.nome} ataca usando ${ataque}.`;    
        } else {
            return `O ${this.tipo} ${this.nome} ataca usando ${ataque}.`;
        }
    }
}

// Função que recebe a lista de heróis
function escolherHeroiAleatorio(lista) {
    if (lista.length === 0) {
        return "Nenhum herói ou heroina na lista.";
    }
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
}

// A função deve perguntar ao usuário se ele deseja jogar novamente após cada simulação
function simulaJogo(lista) {
    let jogarNovamente = "";
    do {
        const heroiAuxiliar = escolherHeroiAleatorio(lista);

        if (heroiAuxiliar === null) {
            console.log("Não há neróis na lista para simular.");
            break;
        }

        const heroiEscolhido = new Heroi(
            heroiAuxiliar.tipo,
            heroiAuxiliar.nome,
            heroiAuxiliar.idade,
            heroiAuxiliar.sexo
        );

        console.log(heroiEscolhido.atacar()); 

        jogarNovamente = Math.floor(Math.random() * 2) === 0 ? 's' : 'n'; // Simula a resposta do usuário aleatoriamente

    } while (jogarNovamente === 's'); // Continua jogando enquanto o usuário responder 's'
    console.log("Fim da simulação.");
}

// Lista aleatória objetos com tipo, nome, idade e sexo de heróis e heroinas populares.
const listaDeHerois = [
    // Guerreiros/Guerreiras
    { tipo: "Guerreiro", nome: "Luke Skywalker", idade: 23, sexo: "M" },
    { tipo: "Guerreira", nome: "Princesa Leia Organa", idade: 23, sexo: "F" },
    { tipo: "Guerreiro", nome: "Han Solo", idade: 29, sexo: "M" },
    { tipo: "Guerreiro", nome: "Darth Vader", idade: 45, sexo: "M" },
    { tipo: "Guerreiro", nome: "Frodo Bolseiro", idade: 50, sexo: "M" },
    { tipo: "Guerreiro", nome: "Aragorn", idade: 87, sexo: "M" },
    { tipo: "Guerreiro", nome: "Gimli", idade: 139, sexo: "M" },
    { tipo: "Guerreiro", nome: "Capitão América", idade: 106, sexo: "M" },
    { tipo: "Guerreiro", nome: "Homem de Ferro", idade: 48, sexo: "M" },
    { tipo: "Guerreiro", nome: "Thor", idade: 1500, sexo: "M" },
    { tipo: "Guerreiro", nome: "Hulk", idade: 49, sexo: "M" },
    { tipo: "Guerreira", nome: "Mulher-Maravilha", idade: 800, sexo: "F" },
    { tipo: "Guerreiro", nome: "Superman", idade: 34, sexo: "M" },
    { tipo: "Guerreiro", nome: "Batman", idade: 40, sexo: "M" },
    { tipo: "Guerreiro", nome: "Aquaman", idade: 35, sexo: "M" },
    { tipo: "Guerreira", nome: "Lara Croft", idade: 30, sexo: "F" },
    { tipo: "Guerreiro", nome: "Master Chief", idade: 47, sexo: "M" },
    { tipo: "Guerreiro", nome: "Link", idade: 17, sexo: "M" },
    { tipo: "Guerreiro", nome: "Geralt de Rívia", idade: 97, sexo: "M" },
    { tipo: "Guerreiro", nome: "Kenshin Himura", idade: 28, sexo: "M" },
    { tipo: "Guerreiro", nome: "Dante", idade: 20, sexo: "M" },
    { tipo: "Guerreira", nome: "Katniss Everdeen", idade: 16, sexo: "F" }, // Guerreira (arco e flecha)
    { tipo: "Guerreira", nome: "Xena", idade: 30, sexo: "F" }, // Guerreira (espada e chakram)
    { tipo: "Guerreira", nome: "Sarah Connor", idade: 30, sexo: "F" }, // Guerreira (armas de fogo)
    { tipo: "Guerreira", nome: "Furiosa", idade: 40, sexo: "F" }, // Guerreira (combate e mecânica)
    { tipo: "Guerreira", nome: "Samus Aran", idade: 28, sexo: "F" }, // Guerreira (armadura e canhão)
    { tipo: "Guerreira", nome: "Buffy Summers", idade: 20, sexo: "F" }, // Guerreira (combate físico e estaca)
    { tipo: "Guerreira", nome: "Eowyn", idade: 24, sexo: "F" }, // Guerreira (espada e escudo)

    // Magos/Magas
    { tipo: "Mago", nome: "Obi-Wan Kenobi", idade: 57, sexo: "M" },
    { tipo: "Mago", nome: "Gandalf", idade: 2019, sexo: "M" },
    { tipo: "Mago", nome: "Harry Potter", idade: 17, sexo: "M" },
    { tipo: "Maga", nome: "Hermione Granger", idade: 18, sexo: "F" },
    { tipo: "Mago", nome: "Ron Weasley", idade: 18, sexo: "M" },
    { tipo: "Mago", nome: "Alvo Dumbledore", idade: 115, sexo: "M" },
    { tipo: "Mago", nome: "Doutor Estranho", idade: 45, sexo: "M" },
    { tipo: "Maga", nome: "Feiticeira Escarlate", idade: 30, sexo: "F" },
    { tipo: "Mago", nome: "Merlin", idade: 1500, sexo: "M" },
    { tipo: "Maga", nome: "Yennefer de Vengerberg", idade: 94, sexo: "F" }, // Maga (magia elemental)
    { tipo: "Maga", nome: "Triss Merigold", idade: 70, sexo: "F" }, // Maga (magia elemental e cura)
    { tipo: "Maga", nome: "Sombra", idade: 35, sexo: "F" }, // Maga (magia das sombras)
    { tipo: "Maga", nome: "Jean Grey", idade: 30, sexo: "F" }, // Maga/Psíquica (telecinese e telepatia)
    { tipo: "Maga", nome: "Jaina Proudmoore", idade: 40, sexo: "F" }, // Maga (magia arcana e gelo)

    // Monges/Monjas
    { tipo: "Monge", nome: "Liu Kang", idade: 28, sexo: "M" },
    { tipo: "Monja", nome: "Chun-Li", idade: 25, sexo: "F" },
    { tipo: "Monge", nome: "Iron Fist", idade: 33, sexo: "M" },
    { tipo: "Monge", nome: "Zenyatta", idade: 20, sexo: "M" },
    { tipo: "Monge", nome: "Mestre Kame", idade: 350, sexo: "M" },
    { tipo: "Monge", nome: "Goku", idade: 43, sexo: "M" },
    { tipo: "Monge", nome: "Vegeta", idade: 48, sexo: "M" },
    { tipo: "Monge", nome: "Flash", idade: 29, sexo: "M" },
    { tipo: "Monja", nome: "Tifa Lockhart", idade: 20, sexo: "F" }, // Monja (artes marciais)
    { tipo: "Monja", nome: "Mai Shiranui", idade: 24, sexo: "F" }, // Monja (Ninjutsu e combate corpo a corpo)

    // Ninjas
    { tipo: "Ninja", nome: "Viúva Negra", idade: 36, sexo: "F" },
    { tipo: "Ninja", nome: "Naruto Uzumaki", idade: 32, sexo: "M" },
    { tipo: "Ninja", nome: "Sasuke Uchiha", idade: 32, sexo: "M" },
    { tipo: "Ninja", nome: "Legolas", idade: 2931, sexo: "M" },
    { tipo: "Ninja", nome: "Ryu Hayabusa", idade: 25, sexo: "M" },
    { tipo: "Ninja", nome: "Itachi Uchiha", idade: 21, sexo: "M" },
    { tipo: "Ninja", nome: "Casey Jones", idade: 20, sexo: "M" },
    { tipo: "Ninja", nome: "Elektra Natchios", idade: 29, sexo: "F" }, // Ninja (sai e combate)
    { tipo: "Ninja", nome: "Kitana", idade: 10000, sexo: "F" }, // Ninja (fãs e combate)
    { tipo: "Ninja", nome: "Mileena", idade: 10000, sexo: "F" }, // Ninja (garras e combate)
    { tipo: "Ninja", nome: "Jade", idade: 10000, sexo: "F" }, // Ninja (bastão e combate)
    { tipo: "Ninja", nome: "Psylocke", idade: 30, sexo: "F" } // Ninja/Psíquica (habilidades telepáticas e katana)
];
//escolherHeroiAleatorio(listaDeHerois);
simulaJogo(listaDeHerois);