import React from "react";
import editImg from "../html-css-template/imagens/edit-icon.png";
import deleteImg from "../html-css-template/imagens/delete-icon.png";

function ItemMusica(props) {
    return (
        <>
            <div className="card-music">
                <div className="icons">
                    <img src={editImg} alt="" />
                    <img src={deleteImg} alt="" />
                </div>
                <div className="info-music">
                    <p>
                        <strong className="card-title">música: </strong>
                        <input className="input-music-enable" type="text" value={props.nome} />
                    </p>
                    <p>
                        <strong className="card-title">artista: </strong>
                        <input className="input-music-enable" type="text" value={props.artista} />
                    </p>
                    <p>
                        <strong className="card-title">categoria: </strong>
                        <input className="input-music-enable" type="text" value={props.genero}/>
                    </p>
                    <p>
                        <strong className="card-title">ano: </strong>
                        <input className="input-music-enable" type="text" value={props.ano}/>
                    </p>
                    <button className="btn-salvar-enable">Salvar</button>
                </div>
            </div>
        </>
    )
}
export default ItemMusica