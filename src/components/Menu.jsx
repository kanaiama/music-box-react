import React from "react";
import avatar from "../html-css-template/imagens/avatar(1).png"
import logo from "../html-css-template/imagens/logo-verde.png"


function Menu() {
    return (
        <>
            <nav>
                <div className="container">
                    <img src={logo} alt="Logo" class="logo" />
                    <img src={avatar} alt="Avatar" class="avatar" />
                </div>
            </nav>
        </>
    )
}

export default Menu;