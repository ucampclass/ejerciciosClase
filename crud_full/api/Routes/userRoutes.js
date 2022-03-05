const { Router } = require("express");
const router = Router();
const { obtener, guardar } = require("../controllers/userController");
const validator = require("../validators/userValidator");

router.get("/", obtener);
router.post("/", validator.userCreateValidator, guardar);

module.exports = router;
