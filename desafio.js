
//Desafio
let nome = "Bruno"
let XP = 4800

if (XP < 1000) {
    console.log("O Herói de nome " + nome + "está no nível de " + XP + " Ferro")
} else if (XP >= 1001 && XP <= 2000) {
    console.log("O Herói de nome " + nome + "está no nível de " + XP + " Bronze")
} else if (XP >= 2001 && XP <= 5000) {
    console.log("O Herói de nome " + nome + "está no nível de " + XP + " Prata")
} else if (XP >= 6001 && XP <= 7000) {
    console.log("O Herói de nome " + nome + "está no nível de " + XP + " Ouro")
} else if (XP >= 7001 && XP <= 8000) {
    console.log("O Herói de nome " + nome + "está no nível de " + XP + " Platina")
} else if (XP >= 8001 && XP <= 9000) {
    console.log("O Herói de nome " + nome + "está no nível de " + XP + " Ascendente")
} else if (XP >= 9001 && XP <= 10000) {
    console.log("O Herói de nome " + nome + "está no nível de " + XP + " Imortal")
} else if (XP > 100001) {
    console.log("O Herói de nome " + nome + "está no nível de " + XP + " Radiante")
} else {
    console.log("Nível inválido")
}