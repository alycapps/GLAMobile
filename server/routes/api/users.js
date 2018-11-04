const router = require("express").Router();
const stylistsController = require("../../controllers/stylistController");

console.log(stylistsController.findAll);

// Matches with "/api/users/stylists"
router.route("/")
  .get(stylistsController.findAll);
  // .post(stylistsController.create);

// Matches with "/api/users/stylists/:id"
router
  .route("/:id")
  .get(stylistsController.findById)
  .put(stylistsController.update);
  // .delete(stylistsController.remove);

module.exports = router;