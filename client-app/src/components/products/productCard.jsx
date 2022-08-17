import React from "react";
import style from "./productCard.module.css";
import { useState } from "react";

function ProductCard({ products }) {
  return (
    <div className={style.grid}>
      {products.map((p) => {
        const product = p;
        // const [index, setIndex] = useState(0);

        // const handleClick = (e, product) => {
        //   if ((e.target.value = "<") && index > 0) setIndex(index - 1);
        //   else if ((e.target.value = ">") && index < product.imagen.length - 1)
        //     setIndex(index + 1);
        // };
        return (
          <div key={product._id}>
            <div className={style.productContainer}>
              <div className={style.description}>
                <p>{product.nombre}</p>
                <p>${product.price}</p>
              </div>
              <div
                className={
                  product.imagen.length > 1 ? style.buttons : style.notButtons
                }
              >
                <button value={"<"} onClick={(e) => handleClick(e, product)}>
                  {"<"}
                </button>
                <button value={">"} onClick={(e) => handleClick(e, product)}>
                  {">"}
                </button>
              </div>
              <img src={product.imagen[0].data_url} alt="imagen" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
