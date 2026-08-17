const express = require('express')
const router = express.Router();

// Book Model
const Book = require('../../models/Books');

// @route GET /books
// @desc Get ALL books
router.get('/', (req,res)=>{
    // Fetch all books from database
    Book.find({}, (error, books)=>{
        if (error) console.log(error)
        res.json(books)
    })
})

// @route POST /books
// @desc  Create a book
router.post('/', (req,res)=>{

    // Create a book item
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        copies: req.body.copies,
    });

    newBook.save((err, book)=>{
        if (err) console.log(err)
        res.json(book)
    })
})
// @route PUT api/books/:id
// @desc  Update a book
router.put('/:id', (req,res)=>{
    // Update a book in the database
    Book.updateOne({_id:req.params.id},{
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        copies: req.body.copies,
        photo:req.body.photo
    }, {upsert: true}, (err)=>{
        if(err) console.log(err);
        res.json({success:true})
    })
})
// @route DELETE api/books/:id
// @desc  Delete a book
router.delete('/:id', (req,res)=>{
    // Delete a book from database
    Book.deleteOne({_id: req.params.id}, (err)=>{
        if (err){
            console.log(err)
            res.json({success:false})
        }else{
            res.json({success:true})
        }
    })
})

module.exports = router;
