const { Router } = require("express");
const router = Router();
const users = require("./public/user.js");
const auth = require("./public/auth.js");
const usersPrivate = require("./private/userPrivate.js");
const productsPrivate = require("./private/productsPrivate");
const products = require("./public/products");

router.use("/users", users);
router.use("/auth", auth);
router.use("/usersprivate", usersPrivate);
router.use("/productsprivate", productsPrivate);
router.use("/product", products);

module.exports = router;
