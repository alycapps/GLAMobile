const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentsSchema = new Schema({
  service: { type: String, required: false },
  city: { type: String, required: false },
  zipCode: { type: String, required: false },
  dateTime: { type: String, required: false }
// add code to reference stylist 
  //ref: "User"
// add code to reference client id

});

const Appointments = mongoose.model("Appointment", appointmentsSchema);

module.exports = Appointments;
