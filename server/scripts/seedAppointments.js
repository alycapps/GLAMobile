const mongoose = require("mongoose");
const db = require("../models");

// This file empties the user accounts to add news ones for testing

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist-auth");

//new Date("<YYYY-mm-ddTHH:MM:ssZ>") 
//specifies the datetime in UTC and returns the ISODate with the specified datetime in UTC.
const appointmentSeed = [
  {
    styleType: "nails",
    street: "6910 Fayetteville Rd",
    city: "Durham",
    zipCode: "27713",
    dateTime: "2018-11-15T03:00:00",
    minPrice: 10.00,
    maxPrice: 20.00,
    noteBox: "Hello this is a test 1",
    stylistEmail: "stylist1@email.com"
  },
  {
    styleType: "nails",
    street: "508 W Jones St",
    city: "Raleigh",
    zipCode: "27603",
    dateTime: "2018-11-16T05:00:00",
    minPrice: 15.00,
    maxPrice: 50.00,
    noteBox: "Hello this is a test 2",
    stylistEmail: "stylist2@email.com"
  },
  {
    styleType: "hair",
    street: "225 N Bloodworth St",
    city: "Raleigh",
    zipCode: "27601",
    dateTime: "2018-11-17T06:00:00",
    minPrice: 20.00,
    maxPrice: 30.00,
    noteBox: "Hello this is a test 3",
    stylistEmail: "stylist3@email.com"
  },
  {
    styleType: "makeup",
    street: "1805 Walnut St",
    city: "Cary",
    zipCode: "27511",
    dateTime: "2018-11-18T12:30:00",
    minPrice: 5.00,
    maxPrice: 25.00,
    noteBox: "Hello this is a test 4",
    stylistEmail: "stylist4@email.com"
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(appointmentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
