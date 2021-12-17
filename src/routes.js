const {Router} = require ('express');//const req = require('express/lib/request');

const DevController = require ('./controllers/DevController');// ele colocou controllers mas parece ser apenas 
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store );

routes.get('/Search',SearchController.index);

module.exports = routes


//get, post, put, delete
//Query params: request.query (Filtros, ordenacao, paginacao...)
// Route Params:request.params (identificar um recurso na alter;ao ou remo;'ao)
//Body:request.body (Dados para a criação ou criação  de um registro)
//MongoDB (Não -relacional)