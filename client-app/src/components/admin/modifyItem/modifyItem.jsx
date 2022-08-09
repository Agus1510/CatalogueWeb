import React from "react";
import { NavLink } from "react-router-dom";
import style from "./modifyItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setIdToEdit } from "../../../../redux/reducer/index";
import { getProductsById } from "../../../../redux/actions/index";

function ModifyItem() {
  const { allProducts } = useSelector((state) => state.reducerCompleto);
  const token = useSelector((state) => state.reducerCompleto.authToken);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(getProductsById({ id: id, token: token }));
  };
  return (
    <div className={style.flexContainer}>
      <div className={style.grid}>
        {allProducts.map((product) => {
          return (
            <NavLink to={`/admin/edit`}>
              <div
                className={style.productContainer}
                onClick={() => handleClick(product._id)}
              >
                <div className={style.description}>
                  <p>{product.nombre}</p>
                  <p>${product.price}</p>
                </div>
                <img src={product.imagen[0].data_url} alt="imagen" />
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default ModifyItem;
