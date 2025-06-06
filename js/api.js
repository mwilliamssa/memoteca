const api = {
    async buscarPensamentos(){
        try{
            const response = await fetch("http://localhost:3000/pensamentos");
            return response.json;
        }catch{
            console.log("Erro ao buscar pensamentos");
        };
    },
};

export default api