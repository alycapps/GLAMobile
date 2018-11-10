const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentsSchema = new Schema({
  service: { type: String, required: false },
  city: { type: String, required: false },
  zipCode: { type: String, required: false },
  dateTime: { type: String, required: false },
  clientId: {type: Schema.Types.ObjectId, ref: 'User'},
  stylistId: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Appointments = mongoose.model("Appointment", appointmentsSchema);

module.exports = Appointments;
