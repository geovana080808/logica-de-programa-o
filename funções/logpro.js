let numero1 = Number(prompt("Escolha o primeiro numero:")) 
let numero2 = Number(prompt("Escolha o segundo numero:"))

function Soma(){
    let resultado = numero1 + numero2
    return resultado
}

function subtracao(){
    let resultado = numero1 - numero2
    return resultado
}

function Divisao(){
    let resultado = numero1 / numero2
    return resultado
}

function Multiplicacao(){
    let resultado = numero1 * numero2
    return resultado
}

let escolha = prompt("Qual operador voce deseja:\n\nsoma \nsubtracao \nDivisao \nMultiplicacao\n\n")

 if (escolha == "soma"){
    console.log("O resultado é:",Soma())
}

else if (escolha == "subtracao"){
    console.log("O resultado é: ",subtracao())
}

else if (escolha == "Divisao"){
    console.log("O resultado é: ",Divisao())
}

else if (escolha == "Multiplicacao"){
    console.log("O resultado é: ",Multiplicacao())
}