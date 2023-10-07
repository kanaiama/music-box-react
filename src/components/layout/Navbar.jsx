import React from "react";
import logo from "../../assets/img/logo.svg"

function Navbar() {
    return (
        <>
            <nav>
                <div className="container">
                   <img src={logo} alt="" />
                </div>
            </nav>
        </>
    )
}

export default Navbar;