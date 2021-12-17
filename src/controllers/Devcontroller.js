const axios = require('axios');
const Dev = require('../models/Dev');
//const parseStringAsArray = require ('../utils/parseStringAsArray');

//index, show, store, update, destroy sao funções do controller

module.exports = { //essa função não retornou a lista de devs no insomnia.
    async index (request, response){
        const devs =  await Dev.find();
        return response.json(devs);
    },

    async store(request, response){
        const {github_username, techs, latitude, longitude} = request.body;

        let dev = await Dev.findOne ({github_username});//let permite a sobreposicao 

        if (!dev) {//evita o cadastro duplicado de devs

            const Apiresponse= await axios.get(`https://api.github.com/users/${github_username}`);
            //continuar
                const {name = login, avatar_url, bio} = Apiresponse.data;
            
            console.log(name, avatar_url,bio, github_username);
            
                const techsArray =  techs.split(',').map(techs => techs.trim ());
            
                const location = {
                    type : 'Point',
                    coordinates:[longitude, latitude],
                }
            
                dev = await Dev.create({
                    github_username,
                    name,
                    avatar_url,
                    bio,
                    techs:techsArray,
                    location,
            
                })    
            
        }
    
        
    
        return response.json({dev});
    }
};