const botao = document.getElementById("verificar");

const resultado = document.getElementById("resultado");

const select = document.getElementById("lanches");

botao.addEventListener("click", function () {
    const lanches = document.getElementById("lanches").value;

    switch (lanches) {
        case "1":
            resultado.textContent = "Hamburguer --> R$ $35,00"
            select.value = ""
            break;
        case "2":
            resultado.textContent = "Pizza --> R$ $50,00"
            select.value = ""
            break;
        case "3":
            resultado.textContent = "Sorvete --> R$ $10,00"
            select.value = ""
            break;
        default:
            resultado.textContent = "Selecione um número!!!"
    }
}
)