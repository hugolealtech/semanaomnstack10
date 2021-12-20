const express = require ('express');
const mongose = require('mongoose');
const routes = require ('./routes')


const app = express();

mongose.connect('mongodb+srv://omnistack:omnistack@cluster0.e1nx9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'); 
/*, {
    userNewUrlParser:true,
    useUnifiedTopology: true,
});*/

app.use(express.json());
app.use(routes);//express precisa vir sempre antes das rotas, senão ele não vai funcionar porque ele lê de forma linear.

app.post('/users',(request, response)=>{
    console.log(request.body);
   // return response.json({message:'Hello Helena, my daughter!!'});
});

app.listen(3333);

//parei em 01:23:48