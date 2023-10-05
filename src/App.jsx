import api from "./api";

import { useState } from "react";

import Musicas from "./Musicas";
import Menu from "./components/Menu";

import "./html-css-template/css/style.css";
import "./html-css-template/css/reset.css";

function App() {


  return (
    <>
      <Menu />
      <Musicas />
    </>
  );
}
export default App;