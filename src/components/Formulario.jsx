import React, { useState } from 'react'

const Formulario = ({setBusquedaArtista}) => {

    const [artista, setArtista] = useState('');
    const [error, setError] = useState(false);

    const buscarInformacion = e => {
        e.preventDefault();

        //Validando
        if(artista.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        //Pasar datos al componente principal
        setBusquedaArtista(artista);

    }

    return ( 
    
        <div className="bg-info">

            { error ? <p className="alert alert-danger text-center p-2">El campo es obligatorio</p> : null }

            <div className="container">

                <div className="row formulario mx-auto">

                    <form 
                        onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 py-3"
                    >

                        <fieldset>
                            <legend className="text-center pt-4">Buscador de Artistas</legend>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            onChange={e => setArtista(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>

                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
        
    );
}
 
export default Formulario;
