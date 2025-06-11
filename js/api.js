const URL_BASE = "http://localhost:3000"

const api = {
    async buscarPensamentos(){
        try{
            const response = await fetch(`${URL_BASE}/pensamentos`); // Por padrão faz um method GET
            return await response.json();
        }catch{
            console.log("Erro ao buscar pensamentos");
            throw error; // caso o usuario nao poss
        };
    },
    async salvarPensamento(pensamento){ // funcao que vai salvar novos pensamentos, o parametro vai ser um objeto que recebe o id, conteudo e autoria
        try{
            const response = await fetch(`${URL_BASE}/pensamentos`, {
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
            console.log("Erro ao salvar pensamentos");
            throw error; // caso o usuario nao poss
        };
    },

    async buscarPensamentoPorId(id){ // função em que será feita a busca do id
        try{
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`);
            return await response.json();
        }catch{
            console.log("Erro ao buscar pensamento");
            throw error; 
        };
    },
    async editarPensamento(pensamento){ 
        try{
            const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
                method: "PUT", // para editar dados já existentes
                headers: {
                    "Content-Type": "application/json"  
                },
                body: JSON.stringify(pensamento) 
            });
            return await response.json();
        }catch{
            console.log("Erro ao editar pensamentos");
            throw error; 
        };
    },
    async excluirPensamento(id){ 
        try{
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
                method: "DELETE", // para excluir dados já existentes, nesse caso, não precisamos do Headers nem do body, me do retorno.
            });
        }catch{
            console.log("Erro ao excluir um pensamento");
            throw error; 
        };
    }
    
};

export default api

// arquivo de requisição 