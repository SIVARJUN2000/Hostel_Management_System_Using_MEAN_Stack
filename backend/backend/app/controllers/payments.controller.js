const db = require("../models");
const Payments = db.paymentss;

// Create and Save a new Payments
exports.create = (req, res) => {
  // Validate request
  if (!req.body.payment_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.customer_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.booking_ID) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.roomprice) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.no_of_days) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.totalpayments) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Payments
  const payments = new Payments({
    payment_id: req.body.payment_id,
    customer_id: req.body.customer_id,
    booking_ID: req.body.booking_ID,
    roomprice: req.body.roomprice,
    no_of_days: req.body.no_of_days,
    totalpayments: req.body.totalpayments
    
  });

  // Save Payments in the database
  payments
    .save(payments)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the payments."
      });
    });
};

// Retrieve all paymentss from the database.
exports.findAll = (req, res) => {
  const payment_id = req.query.payment_id;
  var condition = payment_id ? { payment_id: { $regex: new RegExp(payment_id06), $options: "i" } } : {};

  Payments.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Paymentss."
      });
    });
};

// Find a single Payments with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Payments.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Payments with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Payments with id=" + id });
    });
};

// Update a Payments by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Payments.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Payments with id=${id}. Maybe Payments was not found!`
        });
      } else res.send({ message: "Payments was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Payments with id=" + id
      });
    });
                          
};

// Delete a Payments with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Payments.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Payments with id=${id}. Maybe Payments was not found!`
        });
      } else {
        res.send({
          message: "Payments was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Payments with id=" + id
      });
    });
};

// Delete all Paymentss from the database.
exports.deleteAll = (req, res) => {
  Payments.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Paymentss were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Paymentss."
      });
    });
};

// Find all published Paymentss
exports.findAllPublished = (req, res) => {
  Payments.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Paymentss."
      });
    });
};
