import api from "./api.js";

const ui = {
    async renderizarPensamentos(){
        try{
            const pensamentos = await api.buscarPensamentos(); // acessa a funçao que esta dentro do objeto api

            pensamentos.forEach(pensamento => ui.adicionarPensamentoNaLista(pensamento)); // vai acessar os pensamentos individualmente e ira mandar para a funcao que monta o card

        }catch{
            alert("Erro ao redenrizar pensamentos");
        }
    },

    adicionarPensamentoNaLista(pensamento){ // sera o construtor dos cards de pensamento, como parametro ira pegar o conteudo do pensamento atraves da api
        const listaPensamentos = document.getElementById("lista-pensamentos"); // pegando a ul da lista

        const li = document.createElement("li"); // construindo o li
        li.setAttribute("data-id", "pensamento.id");
        li.classList.add("li-pensamento");

        const iconeAspas = document.createElement("img"); // construindo as imagens de aspa
        iconeAspas.src = "assets/imagens/aspas-azuis.png";
        iconeAspas.alt = "Aspas azuis";
        iconeAspas.classList.add("icone-aspas");

        const conteudoPensamento = document.createElement("div"); // construindo a div que tem o conteudo do pensamento
        conteudoPensamento.classList.add("pensamento-conteudo");
        conteudoPensamento.innerText = pensamento.conteudo;
 
        const autoriaPensamento = document.createElement("div"); // construindo a div que tem o nome do autor do pensamento
        autoriaPensamento.classList.add("pensamento-autoria");
        autoriaPensamento.innerText = pensamento.autoria;

        li.appendChild(iconeAspas); // construindo o HTML
        li.appendChild(conteudoPensamento);
        li.appendChild(autoriaPensamento);

        listaPensamentos.appendChild(li);
    },

    limparFormulario(){
        document.getElementById("pensamento-form").reset();
    }
}

export default ui;