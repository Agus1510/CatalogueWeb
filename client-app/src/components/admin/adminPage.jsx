import React from "react";
import AddItem from "./addItem/addItem";
import ModifyItem from "./modifyItem/modifyItem";
import style from "./adminPage.module.css";
import { useState } from "react";
import Logout from "../logout/logout";

function AdminPage() {
  const [boton, setBoton] = useState(<AddItem />);

  const handleClick = (e) => {
    if (e.target.value === "AddItem") setBoton(<AddItem />);
    if (e.target.value === "ModifyItem") setBoton(<ModifyItem />);
  };
  return (
    <div className={style.flexContainer}>
      <div className={style.container}>
        <button value="AddItem" onClick={(e) => handleClick(e)}>
          Agregar item
        </button>
        <button value="ModifyItem" onClick={(e) => handleClick(e)}>
          Modificar item
        </button>
        <button>Cambiar portada</button>
        <Logout />
      </div>
      <div className={style.form}>{boton}</div>
    </div>
  );
}

export default AdminPage;
