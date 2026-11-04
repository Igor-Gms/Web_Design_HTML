const botao = document.getElementById("executar");
const resultado = document.getElementById("resultado");
let saldo = 1000;

botao.addEventListener("click", function () {
    let op = document.getElementById("op").value;
    let input = Number(document.getElementById("input").value);

    switch (op) {

        case "1":
            resultado.textContent = `Saldo Total: ${saldo}`
            Selection.value = ""
            break
        case "2":
            let conta = saldo += input
            resultado.textContent = `O novo saldo é: ${conta}`;
            break
        case "3":
           if (Number.isSafeInteger(input) || input <= 0) {
            resultado.textContent = "Digite um valor inteiro maior que zero."
            break
           }
           if (input > saldo) {
            resultado.textContent = "Saldo insuficuente"
            break;
           }
           
    }
})
