const express = require('express');
const router = express.Router();

// Book Model
const Book = require('../../models/Books');

// @route GET /books
// @desc Get ALL books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch books' });
    }
});

// @route POST /books
// @desc Create a book
router.post('/', async (req, res) => {
    try {
        const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            copies: req.body.copies,
        });

        const book = await newBook.save();
        res.status(201).json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create book' });
    }
});

// @route PUT /api/books/:id
// @desc Update a book
router.put('/:id', async (req, res) => {
    try {
        await Book.updateOne(
            { _id: req.params.id },
            {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                copies: req.body.copies,
                photo: req.body.photo
            },
            { upsert: true }
        );

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Failed to update book' });
    }
});

// @route DELETE /api/books/:id
// @desc Delete a book
router.delete('/:id', async (req, res) => {
    try {
        await Book.deleteOne({ _id: req.params.id });
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Failed to delete book' });
    }
});

module.exports = router;
