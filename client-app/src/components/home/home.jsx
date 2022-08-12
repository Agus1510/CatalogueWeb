import React from "react";
import style from "./home.module.css";
import { useSelector } from "react-redux";
import ProductCard from "../products/productCard";

function Home() {
  const products = useSelector((state) => state.reducerCompleto.allProducts);
  const portada = useSelector((state) => state.reducerCompleto.portada);
  console.log(portada);
  return (
    <div id="home" className={style.flexContainer}>
      <div className={style.container}>
        <img src={portada} alt="img" referrerPolicy="no-referrer" />
      </div>
      <div>
        <ProductCard products={products} />
      </div>
    </div>
  );
}

export default Home;
