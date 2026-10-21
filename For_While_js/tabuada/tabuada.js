const botao = document.getElementById("gerar")

const lista = document.getElementById("lista")


botao.addEventListener("click", function () {
    lista.innerHTML = ""

    const input = document.getElementById("numero").value;

    const numero1 = Number(input);

    for (let i = 1; i <= 10; i++) {

        const resultado = numero1 * i;
        
        const item = document.createElement("li");

        item.textContent = `${numero1} x ${i} = ${resultado}`

        lista.appendChild(item)
        
    }

})