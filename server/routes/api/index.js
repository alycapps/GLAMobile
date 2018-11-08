const router = require("express").Router();
const bookRoutes = require("./books");
const stylistRoutes = require("./users");

// Book routes
router.use("/books", bookRoutes);
// Stylist routes
router.use("/users/stylists", stylistRoutes);
// Appt routes
router.use("/appts", stylistRoutes);

module.exports = router;
