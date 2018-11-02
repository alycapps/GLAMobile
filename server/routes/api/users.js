const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/users/stylists"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/users/stylists/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
