const Dev = require('../models/Dev');

module.exports = {
    
    async index (request, response){
        //busca dos Devs num raio de 10km
        //filtrar por tecnologias
        console.log(request.query);
        return response.json({ devs: []});
    }
}    

 
    