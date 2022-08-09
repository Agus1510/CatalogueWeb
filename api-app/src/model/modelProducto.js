const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es requerido"],
    },
    genero: {
      type: String,
      required: [true, "El genero es requerido"],
    },
    edad: {
      type: String,
      required: [true, "La edad es requerida"],
    },
    categoria: {
      type: String,
      required: [true, "La categoria es requerida"],
    },
    imagen: {
      type: Array,
      required: [true, "La imagen es requerida"],
    },
    stock: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("Product", productSchema);
