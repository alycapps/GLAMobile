const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentsSchema = new Schema({
  clientEmailAddress: { type: String, required: true },
  stylistEmailAddress: { type: String, required: true },
  zipCode: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: Date, required: true },
  clientAddress: { type: String, required: true }
});

const Appointments = mongoose.model("Appointment", appointmentsSchema);

module.exports = Appointments;
