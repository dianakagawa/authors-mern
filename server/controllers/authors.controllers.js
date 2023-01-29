// create controller methods for the following routes:
// GET /authors
// GET /authors/:id
// POST /authors
// PUT /authors/:id
// DELETE /authors/:id

const Author = require("../models/authors.model");

module.exports = {
  // create new author
  createAuthor: (req, res) => {
    const {name} = req.body;
    Author.create({
      name,
    })
      .then((newAuthor) => res.json(newAuthor))
      .catch((err) => res.status(400).json(err));
  },

  // get all authors
  getAllAuthors: (req, res) => {
    Author.find()
      .then((allAuthors) => res.json(allAuthors))
      .catch((err) => res.json({message: "Something went wrong", error: err}));
  },

  // get one author
  getOneAuthor: (req, res) => {
    Author.findOne({_id: req.params.id})
      .then((oneAuthor) => res.json(oneAuthor))
      .catch((err) => res.json({message: "Something went wrong", error: err}));
  },

  // update author
  updateAuthor: (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedAuthor) => res.json(updatedAuthor))
      .catch((err) => res.status(400).json(err));
  },

  // delete author
  deleteAuthor: (req, res) => {
    Author.deleteOne({_id: req.params.id})
      .then((deleteConfirmation) => res.json(deleteConfirmation))
      .catch((err) => res.json({message: "Something went wrong", error: err}));
  },
};
