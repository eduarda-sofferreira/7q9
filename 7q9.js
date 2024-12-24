var resultado = 1; 
for (var i = 1; i <= 5; i++) { 
    var numero = Number(prompt("Digite o numero " + i + ":"))
    resultado *= numero 
}
console.log("O resultado da multiplicação dos 5 números é: " + resultado)
