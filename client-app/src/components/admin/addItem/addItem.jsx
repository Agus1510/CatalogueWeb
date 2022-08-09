import React, { useState } from "react";
import { createProduct } from "../../../../redux/actions";
import style from "./addItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import ImageUploading from "react-images-uploading";

function AddItem() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [input, setInput] = useState({});
  const [logError, setLogError] = useState({});
  const dispatch = useDispatch();
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const token = useSelector((state) => state.reducerCompleto.authToken);

  const workOnChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const dis = await dispatch(
      createProduct({
        productData: {
          nombre: input.nombre,
          genero: input.genero,
          edad: input.edad,
          imagen: images,
          categoria: input.categoria,
          stock: input.stock,
          price: input.price,
        },
        token,
      })
    );
    var response = dis.payload;
    console.log(dis);
    if (response.success === true) {
      setLogError({});
      navigateTo("/admin");
    } else {
      setLogError({ err: response.info });
    }
  };
  return (
    <div className={style.flexContainer}>
      <form
        className={style.form}
        onChange={(e) => workOnChange(e)}
        onSubmit={(e) => handleSubmit(e)}
        autoComplete="off"
      >
        <label className={style.title}>Nombre del item</label>
        <div className={style.input}>
          <input type="text" placeholder="Nombre del item" name="nombre" />
        </div>
        <label className={style.title}>Genero</label>
        <div className={style.checkBox}>
          <label>Hombre</label>
          <input type="checkbox" value="Hombre" name="genero"></input>
          <label>Mujer</label>
          <input type="checkbox" value="Mujer" name="genero"></input>
        </div>
        <label className={style.title}>edad</label>
        <div className={style.checkBox}>
          <label>Adulto</label>
          <input type="checkbox" value="Adulto" name="edad"></input>
          <label>Adolescente</label>
          <input type="checkbox" value="Adolescente" name="edad"></input>
          <label>Niño</label>
          <input type="checkbox" value="Niño" name="edad"></input>
          <label>Bebe</label>
          <input type="checkbox" value="Bebe" name="edad"></input>
        </div>
        <label className={style.title}>Categoria</label>
        <div className={style.checkBox}>
          <label>Remeras</label>
          <input type="checkbox" value="Remeras" name="categoria"></input>
          <label>Pantalones</label>
          <input type="checkbox" value="Pantalones" name="categoria"></input>
          <label>Camperas</label>
          <input type="checkbox" value="Camperas" name="categoria"></input>
          <label>Camisas</label>
          <input type="checkbox" value="Camisas" name="categoria"></input>
          <label>Buzos</label>
          <input type="checkbox" value="Buzos" name="categoria"></input>
          <label>Joggins y Calzas</label>
          <input type="checkbox" value="Pantalones" name="categoria"></input>
          <label>Accesorios</label>
          <input type="checkbox" value="Camperas" name="categoria"></input>
        </div>
        <label className={style.title}>Imagen</label>
        <div className={style.inputImage}>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                <button onClick={onImageRemoveAll}>Remove all images</button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image["data_url"]} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)}>
                        Update
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
        <label className={style.title}>Stock</label>
        <div className={style.input}>
          <input type="number" placeholder="Stock" name="stock" />
        </div>
        <label className={style.title}>Precio</label>
        <div className={style.input}>
          <input type="number" placeholder="Precio" name="price" />
        </div>

        <button type="submit" className={style.button2}>
          <span />
          <span />
          <span />
          <span />
          Agregar
        </button>
      </form>
    </div>
  );
}

export default AddItem;
