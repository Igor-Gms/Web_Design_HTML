const botao = document.getElementById("verificar");

const resultado = document.getElementById("resultado");

const select = document.getElementById("dia");

botao.addEventListener("click", function (){
    const dia = document.getElementById("dia").value;

    switch (dia) {
        case "1":
            resultado.textContent = "Segunda-Feira";
            select.value = ""
            break;
        
        case "2":
            resultado.textContent = "Terça-Feira";
            select.value = ""
            break;

        case "3":
            resultado.textContent = "Quarta-Feira";
            select.value = ""
            break;

        case "4":
            resultado.textContent = "Quinta-Feira";
            select.value = ""
            break;
        
        case "5":
            resultado.textContent = "Sexta";
            select.value = ""
            break;

        case "6":
            resultado.textContent = "Sabado";
            select.value = ""
            break;

        case "7":
            resultado.textContent = "Domingo";
            select.value = ""
            break;

        default:
            resultado.textContent = "Selecione um número!!"
    }

}
)