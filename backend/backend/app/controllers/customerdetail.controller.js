const db = require("../models");
const Customerdetail = db.customerdetails;

// Create and Save a new Customerdetail
exports.create = (req, res) => {
  // Validate request
  if (!req.body.customer_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.customer_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.customer_address) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.c_phonenumber) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.c_email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const customerdetail= new Customerdetail({
    customer_id: req.body.customer_id,
    customer_name: req.body.customer_name,
    customer_address: req.body.customer_address,
    c_phonenumber: req.body.c_phonenumber,
    c_email: req.body.c_email
  });

  // Save Tutorial in the database
  customerdetail
    .save(customerdetail)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customerdetail."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const customer_id = req.query.customer_id;
  var condition = customer_id ? { customer_id: { $regex: new RegExp(customer_id), $options: "i" } } : {};

  Customerdetail.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customerdetails."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Customerdetail.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Customerdetail with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Customerdetail with id=" + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Roomstatus.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Customerdetail with id=${id}. Maybe Customerdetail was not found!`
        });
      } else res.send({ message: "Customerdetail was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Customerdetail with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Customerdetail.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Customerdetail with id=${id}. Maybe Customerdetail was not found!`
        });
      } else {
        res.send({
          message: "Customerdetail was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Customerdetail with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Customerdetail.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Customerdetails were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customerdetails."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Customerdetail.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customerdetails."
      });
    });
};
