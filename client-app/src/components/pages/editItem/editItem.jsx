import React from "react";
import style from "./editItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { editItem } from "../../../../redux/actions/index";
import { useState } from "react";

function EditItem() {
  const product = useSelector((state) => state.reducerCompleto.itemToEdit);
  const token = useSelector((state) => state.reducerCompleto.authToken);
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  var price = 0;
  var nombre = "";

  const workOnChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!input.nombre) {
      nombre = product.nombre;
    } else {
      nombre = input.nombre;
    }
    if (!input.price) {
      price = product.price;
    } else {
      price = input.price;
    }
    const dis = await dispatch(
      editItem({ nombre: nombre, price: price, id: product._id, token: token })
    );
  };
  return (
    <div className={style.flexContainer}>
      <div className={style.productContainer}>
        <form
          className={style.form}
          onChange={(e) => workOnChange(e)}
          onSubmit={(e) => handleSubmit(e)}
          autoComplete="off"
        >
          <input type="text" placeholder={product.nombre} name="nombre"></input>
          <input
            type="text"
            placeholder={`$${product.price}`}
            name="price"
          ></input>
          <button type="submit" className={style.button}>
            Guardar Cambios
          </button>
        </form>
        <img src={product.imagen[0].data_url} alt="imagen" />
        <div className={style.back}>
          <NavLink to={"/admin"}> {"volver"} </NavLink>
        </div>
      </div>
    </div>
  );
}

export default EditItem;
