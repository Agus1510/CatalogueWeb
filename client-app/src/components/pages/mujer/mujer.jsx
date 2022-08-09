import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "../page.module.css";
import ProductCard from "../../products/productCard";
import { useDispatch } from "react-redux";
import { setShowedProducts } from "../../../../redux/reducer";

function Mujer() {
  const { showedProducts, showedCategory } = useSelector(
    (state) => state.reducerCompleto
  );
  try {
    return (
      <div className={style.flexContainer}>
        <div className={style.title}>
          {showedCategory.length ? (
            <h1>{showedCategory} | Mujer</h1>
          ) : (
            <h1>Mujer</h1>
          )}
          <ProductCard products={showedProducts} />
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className={style.flexContainer}>
        <div className={style.title}>
          <h1>{error}</h1>
        </div>
      </div>
    );
  }
}

export default Mujer;
