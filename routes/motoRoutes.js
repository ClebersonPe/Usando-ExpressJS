const express = require("express"); //arquivo que vai armazenar todas as rotas
const router = express.Router();
const bookController = require('../controllers/motoController');



router.get("/", bookController.home);
router.get("/modelos", bookController.modelos);





module.exports = router;

