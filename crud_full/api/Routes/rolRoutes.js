const { Router } = require("express");
const router = Router();
const { obtener, guardar } = require("../controllers/rolController");
const validator = require("../validators/rolValidator");

router.get("/", obtener);
router.post("/", validator.createRolValidator, guardar);

module.exports = router;
