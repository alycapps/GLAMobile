const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  zipCode: { type: String, required: true },
  streetAddress: { type: String, required: true }
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
