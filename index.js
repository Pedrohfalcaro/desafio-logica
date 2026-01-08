// crie uma variavel para armazenar o nome e a quantidade de xp de um personagem, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo

let nomePersonagem = "Herói"
let experienciaPersonagem = 7500
let nivelPersonagem = ""

if (experienciaPersonagem <= 1000) {
  nivelPersonagem = "Ferro"
} else if (experienciaPersonagem <= 2000) {
  nivelPersonagem = "Bronze"
} else if (experienciaPersonagem <= 5000) {
  nivelPersonagem = "Prata"
} else if (experienciaPersonagem <= 7000) {
  nivelPersonagem = "Ouro"
} else if (experienciaPersonagem <= 8000) {
  nivelPersonagem = "Platina"
} else if (experienciaPersonagem <= 9000) {
  nivelPersonagem = "Ascendente"
} else if (experienciaPersonagem <= 10000) {
  nivelPersonagem = "Imortal"
} else {
  nivelPersonagem = "Radiante"
}

console.log(
  "O personagem de nome " + nomePersonagem + " está no nível de " + nivelPersonagem
)
