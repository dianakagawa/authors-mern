const AuthorController = require("../controllers/authors.controllers");
module.exports = (app) => {
  app.get("/api/", AuthorController.getAllAuthors);
  app.get("/api/authors/:id", AuthorController.getOneAuthor);
  app.post("/api/authors", AuthorController.createAuthor);
  app.put("/api/authors/:id", AuthorController.updateAuthor);
  app.delete("/api/authors/:id", AuthorController.deleteAuthor);
};
