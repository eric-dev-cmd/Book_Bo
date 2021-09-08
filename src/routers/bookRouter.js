const express = require('express');
const router = express.Router();
const bookController = require('../controllers/BookController');

router.get('/', bookController.getBook);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.postBook);
router.put('/:id', bookController.putBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router