import React from "react";
import ItemMusica from "./components/ItemMusica";
import api from "./api";
import { useState } from "react";

function Musicas() {

    const [musicas, setMusicas] = useState([]);

    function listar() {
        api
            .get()
            .then((respostaObtida) => {
                // cairá aqui se a requisição for realizada;
                console.log(respostaObtida);
                // objeto que representa a resposta enviada pela API;
                console.log(respostaObtida.status);
                // vendo status da resposta (OK - 200);
                console.log(respostaObtida.data);
                // vendo os dados da resposta (data: []);
                setMusicas(respostaObtida.data);
                // setando "musicas" com os mesmos dados recebidos pela resposta da
                // requisição;
            })
            .catch((erroOcorrido) => {
                // cairá aqui se houver algum erro durante a
                // requisição;
                console.log(erroOcorrido);
            });
    }

    return (
        <>
            <div className="container">
                <div className="filter">
                    <button className="btn" onClick={listar()}>Adicionar</button>
                </div>
            </div>
            <div className="container">
                <div className="music-boxes">
                    {musicas.map((musica => 
                    <ItemMusica
                        imagem={musica.imagem}
                        nome={musica.nome}
                        artista={musica.artista}
                        genero={musica.genero}
                        ano={musica.ano}
                    />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Musicas;