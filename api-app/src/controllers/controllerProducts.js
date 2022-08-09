const Product = require("../model/modelProducto");
const ErrorResponse = require("../utils/errorResponse.js");

// const payStripe = (req, res) => {
//   const { tokenId, amount } = req.body
//   stripe.charges.create(
//     {
//       source: tokenId,
//       amount,
//       currency: 'usd'
//     },
//     (stripeErr, stripeRes) => {
//       if (stripeErr) {
//         res.status(500).send(stripeErr)
//       } else {
//         res.status(200).send(stripeRes)
//       }
//     }
//   )
// }

// module.exports = { payStripe }

const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.send(product);
    return;
  } catch (err) {
    next(new ErrorResponse("Error al econtrar el producto", 500, false));
    console.error(err);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.send(products);
    return;
  } catch (err) {
    next(new ErrorResponse("Error al econtrar el producto", 500, false));
    console.error(err);
  }
};

const getProductGender = async (req, res) => {
  try {
    if (!req.params.gender.length) {
      const product = await Product.find();
      res.send({ info: "Producto encontrado", product, success: true });
    } else {
      const product = await Product.find({
        genero: { $regex: req.params.gender, $options: "i" },
        edad: { $regex: req.params.age, $options: "i" },
      });
      if (!product.length) {
        res
          .status(404)
          .send({ info: "No existe productos con ese genero", success: false });
      } else {
        res.send({ info: "Productos encontrados", product, success: true });
      }
    }
  } catch (err) {
    res.send({ info: "Algo salio mal", err, success: false });
    console.error(err);
  }
};

const getProductCategory = async (req, res) => {
  try {
    if (!req.params.gender.length) {
      const product = await Product.find();
      res.send({ info: "Producto encontrado", product, success: true });
    } else {
      const product = await Product.find({
        genero: { $regex: req.params.gender, $options: "i" },
        categoria: { $regex: req.params.category, $options: "i" },
        edad: { $regex: req.params.age, $options: "i" },
      });
      if (!product.length) {
        res
          .status(404)
          .send({ info: "No existe productos con ese genero", success: false });
      } else {
        res.send({ info: "Productos encontrados", product, success: true });
      }
    }
  } catch (err) {
    res.send({ info: "Algo salio mal", err, success: false });
    console.error(err);
  }
};

const createProduct = async (req, res, next) => {
  const { body } = req;
  try {
    const product = await new Product(body);
    await product.save();
    res.send(product);
  } catch (err) {
    next(new ErrorResponse("Error al crear el producto", 500, false));
    console.error(err);
  }
};

const editProduct = async (req, res, next) => {
  console.log("78778796");
  const { id } = req.params;
  const { nombre, price } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { nombre, price },
      { new: true }
    );
    if (!product) {
      return next(
        new ErrorResponse("Error al obtener el producto", 500, false)
      );
    }
    res.send(product);
  } catch (err) {
    next(new ErrorResponse("Error al obtener el usuario", 500, false));
  }
};

module.exports = {
  createProduct,
  getProductById,
  getProducts,
  getProductGender,
  getProductCategory,
  editProduct,
};
