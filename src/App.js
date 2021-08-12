import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Artista from './components/Artista';
import axios from 'axios';

function App() {

  //Definir el state
  const [busquedaArtista, setBusquedaArtista] = useState('');
  const [artista, setArtista] = useState('');

  useEffect(() => {

    if (busquedaArtista === '') return;

    const consultarApiLetra = async () => {

      const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${busquedaArtista}`;

      const artista = await axios.get(url)

      setArtista(artista.data.artists[0]);

    }
    consultarApiLetra();

  }, [busquedaArtista, artista])

  return (
    <Fragment>
      <Formulario
        setBusquedaArtista={setBusquedaArtista}
      />

      <div className="container my-5">
        <Artista 
          artista={artista}
        />
      </div>

    </Fragment>
  );
}

export default App;
