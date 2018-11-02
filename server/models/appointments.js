const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentsSchema = new Schema({
  styleType: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  dateTime: { type: Date, required: true },
  minPrice: { type: Double, required: true },
  maxPrice: { type: Double, required: true },
  noteBox: { type: String, required: false},
  stylistEmail: { type: String, required: true}
});

const Appointments = mongoose.model("Appointment", appointmentsSchema);

module.exports = Appointments;
