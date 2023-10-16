function saldoVitorias(vitorias, derrotas) {
    let res = vitorias - derrotas
        return res
}


function statusNivel(qtdVitorias) {
    
    if (qtdVitorias < 10) {
        return "Ferro"
    } else if (qtdVitorias >= 11 && qtdVitorias <= 20) {
        return "Bronze"
    } else if (qtdVitorias >= 21 && qtdVitorias <= 50) {
        return "Prata"
    } else if (qtdVitorias >= 51 && qtdVitorias <= 80) {
        return "Ouro"
    } else if (qtdVitorias >= 81 && qtdVitorias <= 90) {
        return "Diamante"
    } else if (qtdVitorias >= 91 && qtdVitorias <= 100) {
        return "Lendário"
    } else if (qtdVitorias >= 101) {
        return "Imortal"
    } else {
        return "Nível Inválido"
    }

}



let qtdVitorias = saldoVitorias(35, 8)


let nivel = statusNivel(qtdVitorias)

saldoVitorias(50, 32)
console.log(`O Herói tem o saldo ${qtdVitorias} e está no nível ${nivel}`)