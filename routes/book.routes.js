module.exports = app => {
    const {
        insertBook,
        findAllBooks,
        findBookById,
        deleteBookById,
        updateBookById
    } = require('../controllers/book.controller')

    var router = require('express').Router();

    // All availble routes for books

    router.post('/InsertBook', insertBook)

    router.get('/FindAllBooks', findAllBooks)

    router.get('/FindById/:bookId', findBookById)

    router.delete('/DeleteBookById/:bookId', deleteBookById)

    router.put('/UpdateBookById/:bookId', updateBookById)

    app.use('/api/', router)
}