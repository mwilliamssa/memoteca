import api from "./api.js";

const ui = {

    async preencherFormulario(id){
        const pensamento = await api.buscarPensamentoPorId(id); // vai na funçao que busca o pensamento através do ID

        document.getElementById("pensamento-id").value = pensamento.id;
        document.getElementById("pensamento-conteudo").value = pensamento.conteudo;
        document.getElementById("pensamento-autoria").value = pensamento.autoria;
    },

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
        li.setAttribute("data-id", pensamento.id);
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

        const botaoEditar = document.createElement("button");
        botaoEditar.classList.add("botao-editar");
        botaoEditar.addEventListener("click", () => ui.preencherFormulario(pensamento.id)); // vai chamar a função que pega os dados do card e coloca no valor dos campos

        const iconeEditar = document.createElement("img");
        iconeEditar.src = "assets/imagens/icone-editar.png";
        iconeEditar.alt = "Editar";
        botaoEditar.appendChild(iconeEditar);

        const icones = document.createElement("div")
        icones.classList.add("icones")
        icones.appendChild(botaoEditar)

        li.appendChild(iconeAspas); // construindo o HTML
        li.appendChild(conteudoPensamento);
        li.appendChild(autoriaPensamento);
        li.appendChild(icones);

        listaPensamentos.appendChild(li);
    },

    limparFormulario(){
        document.getElementById("pensamento-form").reset();
    }
}

export default ui;