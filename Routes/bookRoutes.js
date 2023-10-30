const express = require("express")
const router = express.Router()
const myBooks = require('../controllers/myBooks')



router.get('/test',myBooks.test)
router.get('/books',myBooks.getBooks)

router.post('/books', myBooks.createBook)
router.put('/books/:book_id', myBooks.updateBook);
router.delete('/books/:book_id', myBooks.deleteBook);
router.get('/fetching',myBooks.getBookById)




module.exports = router
