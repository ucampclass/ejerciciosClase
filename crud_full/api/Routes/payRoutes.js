const { Router } = require("express");
const router = Router();
const { pay } = require("../controllers/payController");

router.post("/", pay);

module.exports = router;
