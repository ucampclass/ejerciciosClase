const { Router } = require("express");
const router = Router();
const { pago } = require("../controllers/pagosController");

router.post("/", pago);

module.exports = router;
