const botaoMeDia = document.getElementById("media")
const resultadoMedia = document.getElementById("resultadoMedia")
const finalizacaoMedia = document.getElementById("dinalizacaoMedia")

botaoMeDia.addEventListener("click", function () {
    finalizacaoMedia.textContent = ""

    try {
        const texto1 = document.getElementById("nota1").value;
        const texto2 = document.getElementById("nota2").value;
        const texto3 = document.getElementById("nota3").value;

        const nota1 = Number(texto1);
        const nota2 = Number(texto2);
        const nota3 = Number(texto3);

        if (texto1 === "" || texto2 === "" || texto3 === "") {
            throw new Error("Todos os campos devem ser preenchidos!!!")
        }
        if (texto1 > 10 || texto2 > 10 || texto3 > 10) {
            throw new Error("Todas as notas devem ser no máximo 10!!!")
        }

        const somaMedia = nota1 + nota2 + nota3;
        const mediaFinal = somaMedia / 3;

        if (mediaFinal < 5) {
            resultadoMedia.textContent = "Reprovado!!!"
        }
        if (mediaFinal >= 5 && 7) {
            resultadoMedia.textContent = "Recuperaçao"
        }
        if (mediaFinal >=7) {
            resultadoMedia.textContent = "Aprovado!!!"
        }
    }catch (error) {
        resultadoMedia.textContent = "Erro: " + error.message;
    } finally {
        finalizacaoMedia.textContent = "Calculo Finalizado !!!"
    }
})