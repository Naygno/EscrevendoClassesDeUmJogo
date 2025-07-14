# Desafio: Escrevendo as Classes de um Jogo

Este repositório contém a resolução do desafio proposto pela DIO, focado na criação de uma classe genérica para representar heróis em uma aventura, utilizando conceitos fundamentais de programação JavaScript.

-----

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido basicamente em **JavaScript**, utilizando os seguintes conceitos:

  * **Variáveis**: Para armazenar dados como nome, idade, tipo e sexo dos heróis.
  * **Operadores**: Em operações lógicas e matemáticas.
  * **Laços de Repetição (`do...while`)**: Para simular múltiplas rodadas de jogo.
  * **Estruturas de Decisão (`switch`, `if/else`)**: Para determinar o tipo de ataque e a concordância de gênero na mensagem.
  * **Funções**: Para organizar o código em blocos reutilizáveis, como a escolha aleatória de heróis e a simulação do jogo.
  * **Classes e Objetos**: A peça central do desafio, utilizando a classe `Heroi` para moldar os personagens do jogo.

-----

## 🎯 Objetivo

O principal objetivo deste projeto é criar uma **classe genérica `Heroi`** que represente um personagem de aventura. Essa classe deve possuir as seguintes propriedades:

  * `nome`: O nome do herói/heroína.
  * `idade`: A idade do herói/heroína.
  * `tipo`: O tipo do herói/heroína (ex: Guerreiro, Maga, Monge, Ninja).
  * `sexo`: O sexo do herói/heroína (`M` para Masculino, `F` para Feminino), utilizado para garantir a concordância de gênero nas mensagens.

Além das propriedades, a classe `Heroi` deve ter um **método `atacar()`** que exiba uma mensagem específica de ataque, variando de acordo com o tipo do herói/heroína.

### Detalhes do Método `atacar()`:

A mensagem de saída segue o formato: `"A {tipo} {nome} ataca usando {ataque}."` ou `"O {tipo} {nome} ataca usando {ataque}."`. O `{ataque}` é definido com base no `{tipo}` do herói/heroína:

  * **Mago / Maga**: usou magia
  * **Guerreiro / Guerreira**: usou espada
  * **Monge / Monja**: usou artes marciais
  * **Ninja**: usou shuriken

-----

## 📄 Estrutura do Código

O código está organizado da seguinte forma:

1.  **Classe `Heroi`**: Define a estrutura dos heróis e o método `atacar()`.
2.  **Função `escolherHeroiAleatorio(lista)`**: Seleciona um herói/heroína aleatoriamente de uma lista fornecida.
3.  **Função `simulaJogo(lista)`**: Gerencia a simulação do jogo, escolhendo heróis e chamando seus ataques em um loop, simulando a interação do usuário para jogar novamente.
4.  **`listaDeHerois`**: Um `array` de objetos JavaScript (que poderia facilmente ser um arquivo JSON) contendo dados de diversos heróis e heroínas, abrangendo os diferentes tipos e gêneros.

-----

## 🚀 Como Executar o Projeto

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/Naygno/EscrevendoClassesDeUmJogo
    cd EscrevendoClassesDeUmJogo
    ```
2.  **Execute o Código:**
    Você pode executar o código diretamente em um ambiente Node.js. Certifique-se de entrar na pasta src e de ter o Node.js instalado em sua máquina.
    ```bash
    node index.js
    ```

Ao executar, o programa simulará o jogo, escolhendo heróis aleatoriamente e exibindo suas mensagens de ataque no console, até que a simulação (automatizada) decida parar.

-----

## 🌟 Melhorias e Possíveis Evoluções

  * **Interação Real do Usuário:** Substituir a simulação de `jogarNovamente` por uma entrada real do usuário (usando `prompt()` no navegador ou uma biblioteca como `readline-sync` no Node.js).
  * **Interface Gráfica:** Desenvolver uma interface web (HTML/CSS) para exibir os heróis e suas ações de forma visual.
  * **Persistência de Dados:** Carregar a lista de heróis de um arquivo JSON externo em vez de tê-la embutida no código, como discutido.
  * **Novos Tipos e Ataques:** Adicionar mais tipos de heróis e ataques variados.
  * **Habilidades Específicas:** Implementar habilidades únicas para cada herói, além do ataque básico.

-----

## 📚 Referências

Este projeto foi desenvolvido com base no desafio proposto pela Digital Innovation One (DIO), parte do bootcamp **Savegnago - Lógica de Programação**. Os conceitos e requisitos foram extraídos diretamente das instruções do desafio "Escrevendo as classes de um Jogo".

  * **Desafio Original**: Plataforma DIO - Bootcamp **Savegnago - Lógica de Programação**, Desafio "Escrevendo as classes de um Jogo".

-----

## ✒️ Autoria

O código e a estrutura do projeto foram desenvolvidos por **[Naygno Barboas Noia](https://github.com/Naygno)**.

-----

## 📄 Licença

Este projeto está sob a licença **MIT [License](LICENSE)**.