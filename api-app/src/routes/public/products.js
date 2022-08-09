const { Router } = require("express");
const router = Router();

const {
  getProductById,
  getProducts,
  getProductGender,
  getProductCategory,
} = require("../../controllers/controllerProducts.js");

router.get("/", getProducts);
router.get("/:gender/:age", getProductGender);
router.get("/:gender/:category/:age", getProductCategory);

module.exports = router;
