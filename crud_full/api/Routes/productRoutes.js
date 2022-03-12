const { Router } = require("express");
const router = Router();
const { obtener, crear } = require("../controllers/productController");
const validator = require("../validators/productValidator");

router.get("/", obtener);
router.post("/", validator.createProductValidator, crear);

module.exports = router;
