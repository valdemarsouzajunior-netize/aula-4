
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    
    botao.addEventListener("click", function () {
        console.log("Botão clicado");
        let texto = botao.querySelector("span");
        
        if (curtiu === false) {
            texto.textContent = parseInt(texto.textContent) + 1;
            curtiu = true;
        } else {
            texto.textContent = parseInt(texto.textContent) - 1;
            curtiu = false;
        }
    });
});
