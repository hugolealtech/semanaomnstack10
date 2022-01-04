import React, { useState,useEffect} from "react";
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

  function App(){
    const [devs, setDevs] = useState([]);

    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

useEffect(() => {
navigator.geolocation.getCurrentPosition(
  (position) => {
    const {latitude,longitude} = position.coords;//console.log(position);

    setLatitude(latitude);
    setLongitude(longitude);


  },
  (err) => {
    console.log (err);
  },
  {
    timeout: 3000,
  }
)
}, []);

useEffect(()=>{
  async function loadDevs(){
    const response = await api.get('/devs');//faz a busca dos devs da API

    setDevs(response.data);
  }

  loadDevs();
},[]);

async function handleAddDev(e){
  e.preventDefault();

    const response = await api.post('/devs',{
      github_username,
      techs,
      latitude,
      longitude,

    })
    console.log(response.data);
    setGithubUsername('');
    setTechs('');

    setDevs([...devs,response.data]);
}

    return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <form onSubmit={handleAddDev}>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input 
                name="github_username" 
                id="github_username" 
                required
                value={github_username}
                onChange={e => setGithubUsername(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input 
                name="techs" 
                id="techs" 
                required
                value={techs}
                onChange={e => setTechs(e.target.value)}
              />
            </div>

            <div className="input-group">

              <div className="input-group">
                <label htmlFor="latitude">Latitude</label>
                <input 
                  type="number" 
                  name="latitude" 
                  id="latitude" 
                  required 
                  value={latitude}
                  onChange={e => setLatitude (e.target.value)}
                />
              </div>

              <div className="input-group">
                <label htmlFor="longitude">Longitude</label>
                <input 
                  type="number" 
                  name="longitude" 
                  id="longitude" 
                  required 
                  value={longitude}
                  onChange={e => setLongitude (e.target.value)}
                />
              </div>

            </div>

          <button type="submit">Salvar</button>
          </form>
        </aside>  

        <main> 
          <ul>
            {devs.map(dev =>(

              <li key={dev._} className="dev-item">
              <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>  
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
            </li>

            ))}
            

          
          </ul>

        </main>
      


       
      </div>

    );
  }
export default App;









/* exemplo de contador de cliques que eu nao quis apagar

import React, { useState } from "react";

//componente - alguma função que retorna algum conteúdo HTML, CSS ou Javascript (Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação)

//Propriedade: Informações que um componente PAI passa o componente FILHO

//Estado: informações mantidas pelo componente (Lembrar:imutabilidade)




function App() {
  const [counter, setCounter] = useState(0);

  
  function incrementCounter(){
    setCounter(counter + 1);

  }

  return (
   <>
      <h1>Contador: {counter}</h1>
      <button onClick ={incrementCounter}>Incrementar</button>

   </>//Não posso ter um componentes, um em baixo do outro sem algum conteúdo em volta deles (<></> fragment ou div)
  );
}

export default App;*/