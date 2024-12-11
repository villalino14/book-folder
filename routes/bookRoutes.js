const express = require("express");
const router = express.Router();

const{
    getAllGenre,
    getBooksByGenre,} = require("../controllers/booksController");

router.get('/', getAllGenre);
router.get('/:genre', getBooksByGenre);

module.exports = router;
