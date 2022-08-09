import React from "react";
import style from "./category.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsByCategory,
  getProductsByGender,
} from "../../../redux/actions/index";
import { setShowedProducts, setShowedCategory } from "../../../redux/reducer";
import { useState } from "react";
var metaData = {};
function Category({ props }) {
  const dispatch = useDispatch();
  const [gender, setGender] = useState("Chicas");
  const handleClick = async (a) => {
    if (a.nombre === "VER TODO") {
      metaData = await dispatch(
        getProductsByGender({ gender: a.sexo, age: a.edad })
      );
      dispatch(setShowedCategory(""));
    } else {
      metaData = await dispatch(
        getProductsByCategory({
          gender: a.sexo,
          category: a.nombre,
          age: a.edad,
        })
      );
      dispatch(setShowedCategory(a.nombre));
    }
    if (metaData.payload.success === false) {
      throw Error("no hay productos");
    } else dispatch(setShowedProducts(metaData.payload));
  };
  if (props.category === "hombre" || props.category === "mujer") {
    return (
      <div className={style.flexContainer}>
        <div className={style.firstColumn}>
          <NavLink to={props.img1.link} onClick={() => handleClick(props.img1)}>
            <div className={style.Container}>
              <img src={props.img1.img} />
            </div>
          </NavLink>
          <NavLink to={props.img2.link} onClick={() => handleClick(props.img2)}>
            <div className={style.Container}>
              <img src={props.img2.img} />
            </div>
          </NavLink>
        </div>
        <div className={style.secondColumn}>
          <h2> Categorías</h2>
          <div className={style.categories}>
            {props.array.map((a) => (
              <NavLink to={a.link} onClick={() => handleClick(a)}>
                {a.nombre}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    var array = [props.arrayM];
    if (gender === "Chicos") array = props.arrayM;
    else array = props.arrayF;
    return (
      <div className={style.flexContainer}>
        <div className={style.firstColumn}>
          <div className={style.Container2}>
            <button onClick={() => setGender("Chicos")}>Chicos</button>
          </div>
          <div className={style.Container3}>
            <button onClick={() => setGender("Chicas")}>Chicas</button>
          </div>
        </div>
        <div className={style.secondColumn}>
          <h2>Categorías | {gender}</h2>
          <div className={style.categories}>
            {array.map((a) => (
              <NavLink to={a.link} onClick={() => handleClick(a)}>
                {a.nombre}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
