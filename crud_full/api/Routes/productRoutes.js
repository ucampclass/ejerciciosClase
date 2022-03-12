const { Router } = require("express");
const router = Router();
const { obtener, guardar } = require("../controllers/productController");
const validator = require("../validators/productValidator");

router.get("/", obtener);
router.post("/", validator.createProductValidator, guardar);

module.exports = router;
