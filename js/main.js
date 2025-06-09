import api from "./api.js";
import ui from "./ui.js"

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos(); // executando a funcao de buscar e construir os pensamentos 
 
    const formularioPensamento = document.getElementById("pensamento-form"); // pega o formulario
    const botaoCancelar = document.getElementById("botao-cancelar");
    
    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario); // o formulario agora esta enviado informacoes
    botaoCancelar.addEventListener("click", manipularCancelamento);

})

async function manipularSubmissaoFormulario(event) { 
    event.preventDefault();
    const id = document.getElementById("pensamento-id").value; // pega o valor do id, que sera feito pelo propio json
    const conteudo = document.getElementById("pensamento-conteudo").value; // pegao valor do conteudo do pensamento
    const autoria = document.getElementById("pensamento-autoria").value; // pega o valor da autoria do pensamento

    try{
        await api.salvarPensamento({id, conteudo, autoria}); // vai enviar as informacoes que sao como parametro para a funcao de salvar que esta no arquivo api
        ui.renderizarPensamentos(); // vai mostrar os pensamentos
    }catch{
        alert("Erro ao salvar pensamento");
    }
};

function manipularCancelamento(){
    ui.limparFormulario();
}