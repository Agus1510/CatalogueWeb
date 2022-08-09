import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "../page.module.css";
import ProductCard from "../../products/productCard";
import { useDispatch } from "react-redux";
import { setShowedProducts } from "../../../../redux/reducer";

function Hombre() {
  const { showedCategory, showedProducts } = useSelector(
    (state) => state.reducerCompleto
  );

  return (
    <div className={style.flexContainer}>
      <div className={style.title}>
        {showedCategory.length ? (
          <h1>{showedCategory} | Hombre</h1>
        ) : (
          <h1>Hombre</h1>
        )}
        <ProductCard products={showedProducts} />
      </div>
    </div>
  );
}

export default Hombre;
