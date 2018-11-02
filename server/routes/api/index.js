const router = require("express").Router();
const bookRoutes = require("./books");
const stylistRoutes = require("./users");


// Book routes
router.use("/books", bookRoutes);
router.use("/users/stylist", stylistRoutes);

module.exports = router;
