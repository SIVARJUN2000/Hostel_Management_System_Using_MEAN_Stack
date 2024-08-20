const db = require("../models");
const Booking = db.bookings;

// Create and Save a new Booking
exports.create = (req, res) => {
  // Validate request
  if (!req.body.booking_ID) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.customer_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.room_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.checkindate) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.checkoutdate) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.no_of_days) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Booking
  const booking = new Booking({
    booking_ID: req.body.booking_ID,
    customer_id: req.body.customer_id,
    room_id: req.body.room_id,
    checkindate: req.body.checkindate,
    checkoutdate: req.body.checkoutdate,
    no_of_days: req.body.no_of_days,
    
  });

  // Save Booking in the database
  booking
    .save(booking)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Booking."
      });
    });
};

// Retrieve all Bookings from the database.
exports.findAll = (req, res) => {
  const booking_ID = req.query.booking_ID;
  var condition = booking_ID ? { booking_ID: { $regex: new RegExp(booking_ID), $options: "i" } } : {};

  Booking.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookings."
      });
    });
};

// Find a single booking with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Booking.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Booking with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Booking with id=" + id });
    });
};

// Update a Booking by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Booking.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Booking with id=${id}. Maybe Booking was not found!`
        });
      } else res.send({ message: "Booking was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Booking with id=" + id
      });
    });
                          
};

// Delete a Booking with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Booking.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Booking with id=${id}. Maybe Booking was not found!`
        });
      } else {
        res.send({
          message: "Booking was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Booking with id=" + id
      });
    });
};

// Delete all Bookings from the database.
exports.deleteAll = (req, res) => {
  Booking.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Bookings were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Bookings."
      });
    });
};

// Find all published Bookings
exports.findAllPublished = (req, res) => {
  Booking.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Bookings."
      });
    });
};
