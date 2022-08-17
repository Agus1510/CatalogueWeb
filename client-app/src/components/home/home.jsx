import React, { useEffect } from "react";
import style from "./home.module.css";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../products/productCard";
import { getAllProducts } from "../../../redux/actions";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const products = useSelector(
    (state) => state.reducerCompleto.filteredProducts
  );
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
