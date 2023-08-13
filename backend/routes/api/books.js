/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();

// Load Book model
const Book = require('../../models/Book');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (_req, res) => res.send('book route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (_req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((_err) => res.status(404).json({ nobooksfound: 'No Books found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((_err) => res.status(404).json({ nobookfound: 'No Book found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
  Book.create(req.body)
    .then((_book) => res.json({ msg: 'Book added successfully' }))
    .catch((_err) => res.status(400).json({ error: 'Unable to add this book' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then((_book) => res.json({ msg: 'Updated successfully' }))
    .catch((_err) => res.status(400).json({ error: 'Unable to update the Database' }));
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then((_book) => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch((_err) => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;
