const { Router } = require("express");
const router = Router();

const { protect } = require("../../middleware/protect.js");
const {
  createProduct,
  getProductById,
  editProduct,
} = require("../../controllers/controllerProducts");

router.post("/", protect, createProduct);
router.get("/:id", protect, getProductById);
router.put("/:id/edit", protect, editProduct);

module.exports = router;
