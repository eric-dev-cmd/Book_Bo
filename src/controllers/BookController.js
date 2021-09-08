const Book = require('../models/BookModel');

class BookController {
    getBook(req, res, next) {
        Book.find({})
            .then(books => {
                res.json(books)
            })
            .catch(next);
    }

    getBookById(req, res, next) {
        Book.findById(req.params.id)
            .then(book => {
                res.json({
                    book
                })
            })
            .catch(next);
    }

    postBook(req, res, next) {
        // const data = req.body;
        const book = new Book(req.body);
        book.save()
            .then(book => {
                res.json({
                    book
                })
            })
            .catch(next)

    }

    putBook(req, res, next) {
        const data = req.body;
        Book.findByIdAndUpdate(req.params.id, data)
            .then(book => {
                res.json({
                    book
                })
            })
            .catch(next)
    }

    deleteBook(req, res, next) {
        Book.findByIdAndRemove(req.params.id)
            .then(book => {
                res.json(book)
            })
            .catch(next)
    }
}

module.exports = new BookController;