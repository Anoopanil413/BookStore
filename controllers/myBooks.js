const BooksModel = require('../Models/Books')

//testing my rute
exports.test = async(req,res)=>{
    try {
        res.status(200).json({Message:"Helloooooo working"})
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });

    }
}



//getting  a list of all the  books availabe
exports.getBooks = async (req, res) => {
  try {
    const books = await BooksModel.find();
    res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
}

// getting a book by its ID
exports.getBookById = async (req, res) => {
    try {
      const { book_id } = req.query;
      console.log(book_id)
    const book = await BooksModel.findById(book_id);
    if (!book) {
      return res.status(404).json({ error: 'Book not available' });
    }
    res.status(200).json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

// creating a neew book data
exports.createBook = async (req, res) => {
    try {
      const { title, author, summary, link } = req.body;
    const book = new BooksModel({ title, author, summary, link });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

// updating books details
exports.updateBook = async (req, res) => {
    
    try {
        console.log("in update")
      const { book_id } = req.params;
      const { title, author, summary } = req.body;
    const book = await BooksModel.findByIdAndUpdate(book_id, { title, author, summary }, { new: true });

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};




// deleteing a book

exports.deleteBook = async (req, res) => {
    
    try {
      const { book_id } = req.params;
    const book = await BooksModel.findByIdAndDelete(book_id);

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server eroor' });
  }
};
