const api = {
    async buscarPensamentos(){
        try{
            const response = await fetch("http://localhost:3000/pensamentos"); // Por padrão faz um method GET
            return await response.json();
        }catch{
            console.log("Erro ao buscar pensamentos");
            throw error; // caso o usuario nao poss
        };
    },
    async salvarPensamento(pensamento){ // funcao que vai salvar novos pensamentos, o parametro vai ser um objeto que recebe o id, conteudo e autoria
        try{
            const response = await fetch("http://localhost:3000/pensamentos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"  //o conteúdo a ser enviado vai ser do tipo json
                },
                body: JSON.stringify(pensamento) 
                // esse consteúdo sera pego no formulario 
                // conteúdo do envio da requisição
                // precisa usar o JSON, vai fazer que nem o localstorage onde tem que converter o objeto para string
            });
            return await response.json();
        }catch{
            console.log("Erro ao buscar pensamentos");
            throw error; // caso o usuario nao poss
        };
    },
};

export default api

// arquivo de requisição 