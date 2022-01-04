const Dev = require('../models/Dev');
//const parseStringAsArray = require ('../utils/parseStringAsArray');

module.exports = {
    
    async index (request, response){
        //busca dos Devs num raio de 10km
        //filtrar por tecnologias
        //console.log(request.query);ate aqui funcionava

        const {latitude, longitude, techs} = request.query;
        const techsArray = techs.split(',').map(tech => tech.trim ()); // parseStringAsArray (techs);(fere o principio don't repeat yourself)

        const devs = await Dev.find({
            techs :{
                $in: techsArray,
            },
            location: {
                $near:{
                    $geometry:{
                        type:'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },

            },
        });

        return response.json({ devs });
    }
}    

 
    