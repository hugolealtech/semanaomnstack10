const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAaArray');

module.exports = {
    
    async index (request, response){
        //busca dos Devs num raio de 10km
        //filtrar por tecnologias
    const {latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);

        
        return response.jsson({devs: []});
    }
}