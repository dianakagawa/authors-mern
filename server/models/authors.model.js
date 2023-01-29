// create a schema for an author with the following fields:
// name: a string
// timestamp: a date
// if thename is less that 3 characters in length, throw a validation error that says "Name must be at least 3 characters" and prevent the author from being saved
// if the name is not unique, throw a validation error that says "Name must be unique" and prevent the author from being saved

const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 3 characters"],
      unique: [true, "Name must be unique"],
    },
  },
  {timestamps: true}
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
