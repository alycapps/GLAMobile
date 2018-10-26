const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stylistSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailAddress: String,
  zipCode: { type: String, default: Date.now },
  licenseNumber: { type: String, default: Date.now }
});

const Stylist = mongoose.model("Stylist", stylistSchema);

module.exports = Stylist;
