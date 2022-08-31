import React from "react";
import style from "./navbar.module.css";
import {
  IoBagHandleOutline,
  IoLocationOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoHomeOutline,
  IoEllipsisVertical,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Category from "../category/category";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAllProducts,
  getProductsByGender,
  getProductsByName,
} from "../../../redux/actions";
import PhoneMenu from "../phoneMenu/phoneMenu";

function Navbar() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [activePhone, setActivePhone] = useState(false);
  const [searchError, setSearchError] = useState({});
  const [objCat, setObjCat] = useState({
    img1: "https://taverniti.vteximg.com.br/arquivos/ids/236530/banner1.png?v=637901136712470000",
    img2: "https://taverniti.vteximg.com.br/arquivos/ids/237267/banner2.png?v=637901137146830000",
    array: [
      { nombre: "Remeras", link: "/mujer/remeras" },
      { nombre: "Camperas", link: "/mujer/camperas" },
      { nombre: "Joggings y Calzas", link: "/mujer/joggings" },
      { nombre: "Pantalones", link: "/mujer/pantalones" },
      { nombre: "Buzos", link: "/mujer/buzos" },
      { nombre: "Camisas", link: "/mujer/camisas" },
      { nombre: "Accesorios", link: "/mujer/accesorios" },
      { nombre: "Ver todo", link: "/mujer" },
    ],
    arrayM: [
      { nombre: "Remeras", link: "/hombre/remeras" },
      { nombre: "Camperas", link: "/hombre/camperas" },
      { nombre: "Pantalones", link: "/hombre/pantalones" },
      { nombre: "Buzos", link: "/hombre/buzos" },
      { nombre: "Camisas", link: "/hombre/camisas" },
      { nombre: "VER TODO", link: "/hombre" },
    ],
    arrayF: [
      { nombre: "Remeras", link: "/hombre/remeras" },
      { nombre: "Camperas", link: "/hombre/camperas" },
      { nombre: "Pantalones", link: "/hombre/pantalones" },
      { nombre: "Buzos", link: "/hombre/buzos" },
      { nombre: "Camisas", link: "/hombre/camisas" },
      { nombre: "VER TODO", link: "/hombre" },
    ],
  });
  const handleCategory = (e) => {
    switch (e.target.value) {
      case "mujer":
        setObjCat({
          img1: {
            img: "https://taverniti.vteximg.com.br/arquivos/ids/236530/banner1.png?v=637901136712470000",
            nombre: "Pantalones",
            sexo: "mujer",
            link: "/mujer",
            edad: "adulto",
          },
          img2: {
            img: "https://taverniti.vteximg.com.br/arquivos/ids/237267/banner2.png?v=637901137146830000",
            nombre: "Camperas",
            sexo: "mujer",
            link: "/mujer",
            edad: "adulto",
          },
          array: [
            {
              nombre: "Remeras",
              link: "/mujer",
              sexo: "mujer",
              edad: "adulto",
            },
            {
              nombre: "Camperas",
              link: "/mujer",
              sexo: "mujer",
              edad: "adulto",
            },
            {
              nombre: "Joggings y Calzas",
              link: "/mujer",
              sexo: "mujer",
              edad: "adulto",
            },
            {
              nombre: "Pantalones",
              link: "/mujer",
              sexo: "mujer",
              edad: "adulto",
            },
            { nombre: "Buzos", link: "/mujer", sexo: "mujer", edad: "adulto" },
            {
              nombre: "Camisas",
              link: "/mujer",
              sexo: "mujer",
              edad: "adulto",
            },
            {
              nombre: "Accesorios",
              link: "/mujer",
              sexo: "mujer",
              edad: "adulto",
            },
            {
              nombre: "VER TODO",
              link: "/mujer",
              sexo: "mujer",
              edad: "adulto",
            },
          ],
          category: "mujer",
        });
        dispatch(getProductsByGender("mujer"));
        break;
      case "hombre":
        setObjCat({
          img1: {
            img: "https://taverniti.vteximg.com.br/arquivos/ids/239526/banner1hombre.png?v=637901135166930000",
            nombre: "Pantalones",
            sexo: "hombre",
            link: "/hombre",
            edad: "adulto",
          },
          img2: {
            img: "https://taverniti.vteximg.com.br/arquivos/ids/237877/Banner-2.png?v=637901144727600000",
            nombre: "Camperas",
            sexo: "hombre",
            link: "/hombre",
            edad: "adulto",
          },
          array: [
            {
              nombre: "Remeras",
              link: "/hombre",
              sexo: "hombre",
              edad: "adulto",
            },
            {
              nombre: "Camperas",
              link: "/hombre",
              sexo: "hombre",
              edad: "adulto",
            },
            {
              nombre: "Pantalones",
              link: "/hombre",
              sexo: "hombre",
              edad: "adulto",
            },
            {
              nombre: "Buzos",
              link: "/hombre",
              sexo: "hombre",
              edad: "adulto",
            },
            {
              nombre: "Camisas",
              link: "/hombre",
              sexo: "hombre",
              edad: "adulto",
            },
            {
              nombre: "VER TODO",
              link: "/hombre",
              sexo: "hombre",
              edad: "adulto",
            },
          ],
          category: "hombre",
        });
        dispatch(getProductsByGender("hombre"));
        break;
      case "bebes":
        setObjCat({
          arrayM: [
            { nombre: "Remeras", link: "/hombre/remeras" },
            { nombre: "Camperas", link: "/hombre/camperas" },
            { nombre: "Pantalones", link: "/hombre/pantalones" },
            { nombre: "Buzos", link: "/hombre/buzos" },
            { nombre: "Camisas", link: "/hombre/camisas" },
            { nombre: "VER TODO", link: "/hombre" },
          ],
          arrayF: [
            { nombre: "Remeras", link: "/hombre/remeras" },
            { nombre: "Camperas", link: "/hombre/camperas" },
            { nombre: "Pantalones", link: "/hombre/pantalones" },
            { nombre: "Buzos", link: "/hombre/buzos" },
            { nombre: "Camisas", link: "/hombre/camisas" },
            { nombre: "VER TODO", link: "/hombre" },
          ],
          category: "bebes",
        });
        break;

      case "niños":
        setObjCat({
          arrayM: [
            {
              nombre: "Remeras",
              link: "/hombre",
              sexo: "hombre",
              edad: "niño",
            },
            {
              nombre: "Camperas",
              link: "/hombre",
              sexo: "hombre",
              edad: "niño",
            },
            {
              nombre: "Pantalones",
              link: "/hombre",
              sexo: "hombre",
              edad: "niño",
            },
            {
              nombre: "Buzos",
              link: "/hombre",
              sexo: "hombre",
              edad: "niño",
            },
            {
              nombre: "Camisas",
              link: "/hombre",
              sexo: "hombre",
              edad: "niño",
            },
            {
              nombre: "VER TODO",
              link: "/hombre",
              sexo: "hombre",
              edad: "niño",
            },
          ],
          arrayF: [
            {
              nombre: "Remeras",
              link: "/mujer",
              sexo: "mujer",
              edad: "adulto",
            },
            {
              nombre: "Camperas",
              link: "/mujer",
              sexo: "mujer",
              edad: "niño",
            },
            {
              nombre: "Joggings y Calzas",
              link: "/mujer",
              sexo: "mujer",
              edad: "niño",
            },
            {
              nombre: "Pantalones",
              link: "/mujer",
              sexo: "mujer",
              edad: "niño",
            },
            { nombre: "Buzos", link: "/mujer", sexo: "mujer", edad: "adulto" },
            {
              nombre: "Camisas",
              link: "/mujer",
              sexo: "mujer",
              edad: "niño",
            },
            {
              nombre: "Accesorios",
              link: "/mujer",
              sexo: "mujer",
              edad: "niño",
            },
            {
              nombre: "VER TODO",
              link: "/mujer",
              sexo: "mujer",
              edad: "niño",
            },
          ],
          category: "niños",
        });
        break;

      case "adolescentes":
        setObjCat({
          arrayM: [
            {
              nombre: "Remera",
              link: "/hombre",
              sexo: "hombre",
              edad: "adolescente",
            },
            {
              nombre: "Camperas",
              link: "/hombre",
              sexo: "hombre",
              edad: "adolescente",
            },
            {
              nombre: "Pantalones",
              link: "/hombre",
              sexo: "hombre",
              edad: "adolescente",
            },
            {
              nombre: "Buzos",
              link: "/hombre",
              sexo: "hombre",
              edad: "adolescente",
            },
            {
              nombre: "Camisas",
              link: "/hombre",
              sexo: "hombre",
              edad: "adolescente",
            },
            {
              nombre: "VER TODO",
              link: "/hombre",
              sexo: "hombre",
              edad: "adolescente",
            },
          ],
          arrayF: [
            {
              nombre: "Remera",
              link: "/mujer",
              sexo: "mujer",
              edad: "adolescente",
            },
            {
              nombre: "Camperas",
              link: "/mujer",
              sexo: "mujer",
              edad: "adolescente",
            },
            {
              nombre: "Joggings y Calzas",
              link: "/mujer",
              sexo: "mujer",
              edad: "adolescente",
            },
            {
              nombre: "Pantalones",
              link: "/mujer",
              sexo: "mujer",
              edad: "adolescente",
            },
            {
              nombre: "Buzos",
              link: "/mujer",
              sexo: "mujer",
              edad: "adolescente",
            },
            {
              nombre: "Camisas",
              link: "/mujer",
              sexo: "mujer",
              edad: "adolescente",
            },
            {
              nombre: "Accesorios",
              link: "/mujer",
              sexo: "mujer",
              edad: "adolescente",
            },
            {
              nombre: "VER TODO",
              link: "/mujer",
              sexo: "mujer",
              edad: "adolescente",
            },
          ],
          category: "adolescentes",
        });
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]");
      const isDropdownPhone = e.target.matches("[data-dropdown-phone]");

      if (!isDropdownPhone && e.target.closest("[data-dropdownPhone]") != null)
        return;
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
        return;
      let currentDropdown;
      if (isDropdownButton) {
        setActive(!active);
      }
      if (!isDropdownButton) {
        setActive(false);
      }
      if (isDropdownPhone) {
        setActivePhone(!activePhone);
      }
      if (!isDropdownPhone) {
        setActivePhone(false);
      }
    });
  }, []);

  const search = async (e) => {
    // SETEA TODOS LOS FILTROS/SORTS A false
    if (e.target.value != "") {
      const dis = await dispatch(getProductsByName(e.target.value));
      const data = dis.payload;

      if (!data.success) {
        setSearchError({ err: data.info });
      } else {
        setSearchError({});
      }
    } else {
      dispatch(getAllProducts());
    }
  };

  return (
    <div className={style.flexContainer}>
      <div className={activePhone ? style.phoneMenuActive : style.phoneMenu}>
        <PhoneMenu data-dropdownPhone />
      </div>
      <div className={style.flexButtons1}>
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
      <div className={style.imgContainer}>
        <NavLink to="/">
          <img src="img/logo.png" alt="logo" />
        </NavLink>
      </div>
      <div
        className={active ? style.categoryActive : style.category}
        data-dropdown
      >
        <Category props={objCat} />
      </div>
      <div className={style.flexButtons2}>
        <IoEllipsisVertical data-dropdown-phone className={style.menuIcon} />
        <div className={style.search}>
          <form onChange={(e) => search(e)} className={style.form}>
            <IoSearchOutline />
            <input
              type="text"
              placeholder="Buscar."
              className={style.inputSearch}
            />
            {searchError.err && (
              <label className={style.errSearch}>{searchError.err}</label>
            )}
          </form>
        </div>
        <a href="#footer">
          <IoLocationOutline />
        </a>
        <NavLink to="/">
          <IoHomeOutline />
        </NavLink>
        <NavLink to="/admin">
          <IoPersonOutline />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
