import React from "react";
import style from "./phoneMenu.module.css";
import {
  IoBagHandleOutline,
  IoLocationOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoHomeOutline,
  IoEllipsisVertical,
  IoCloseCircleOutline,
} from "react-icons/io5";

function PhoneMenu() {
  return (
    <div className={style.flexContainer}>
      <div className={style.menu}>
        <button
          value="hombre"
          onClick={(e) => handleCategory(e)}
          data-dropdown-button
        >
          Hombre
        </button>
        <button
          value="mujer"
          onClick={(e) => handleCategory(e)}
          data-dropdown-button
        >
          Mujer
        </button>
        <button
          value="adolescentes"
          onClick={(e) => handleCategory(e)}
          data-dropdown-button
        >
          Adolescentes
        </button>
        <button
          value="niños"
          onClick={(e) => handleCategory(e)}
          data-dropdown-button
        >
          Niños
        </button>
        <button
          value="bebes"
          onClick={(e) => handleCategory(e)}
          data-dropdown-button
        >
          Bebes
        </button>
      </div>
    </div>
  );
}

export default PhoneMenu;
