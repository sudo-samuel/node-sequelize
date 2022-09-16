const { book } = require('../models')
const db = require('../models')

const Book = db.book

const Op = db.Sequelize.Op

// Insert new book
const insertBook = async (req, res) => {
    if(!req.body.title || !req.body.author){
        res.status(400).send({message: "A required field is missing"})
        return
    }

    const book = {
        title: req.body.title,
        author: req.body.author,
        releaseDate: req.body.releaseDate,
        subject: req.body.subject,
        published: req.body.published
    }
    
    await Book.create(book)
    .then(data => {
        res.send(data)
    })
}

// TODO: Implement condition If there are no books

// Retrieve all Books
const findAllBooks = async (req, res) => {
    await Book.findAll()
    .then(data => {
        res.send(data)
    })
}

const findBookById = async (req, res) => {
    await Book.findOne({
        where: {
            id: req.params.bookId
        }
    })
    .then(data => {
        res.send(data)
    })
}

const deleteBookById = async (req, res) => {
   await Book.destroy({
        where: {
            id: req.params.bookId
        }
    })
    .then( 
        res.send({message: `Book deleted successfully`})
    )
}

const updateBookById = async (req, res) => {
    await Book.update(
    {
        title: req.body.title,
        author: req.body.author,
        releaseDate: req.body.releaseDate,
        subject: req.body.subject,
        published: req.body.published,
    },
    {
        where: {
            id: req.params.bookId
        },
    }).then(
        res.send({message: `Book updated successfully`})
    )
}
        
        

module.exports = { insertBook, findAllBooks, findBookById, deleteBookById, updateBookById}



