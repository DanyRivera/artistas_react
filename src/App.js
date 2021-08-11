import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';

function App() {

  //Definir el state
  const [busquedaLetra, setBusquedaLetra] = useState({});

  useEffect(() => {

    if (Object.keys(busquedaLetra).length === 0) return;

    const consultarApiLetra = async () => {

      const { artista, cancion } = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const letra = await axios.get(url)

      console.log(letra);

    }
    consultarApiLetra();

  }, [busquedaLetra])

  return (
    <Fragment>
      <Formulario
        setBusquedaLetra={setBusquedaLetra}
      />

    </Fragment>
  );
}

export default App;
