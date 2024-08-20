db = require("../models");
const Register = db.registers;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const register = new Register({
    Email: req.body.Email,
    password: req.body.password,
    confirm_password: req.body.confirm_password
    
  });

  // Save Tutorial in the database
  register
    .save(register)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const Email = req.query.Email;
  var condition = Email ? { Email: { $regex: new RegExp(Email), $options: "i" } } : {};

  Register.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving registers."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Register.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found register with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving register with id=" + id });
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

  Register.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update register with id=${id}. Maybe register was not found!`
        });
      } else res.send({ message: "register was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating register with id=" + id
      });
    });
};

// Delete a register with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Register.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete register with id=${id}. Maybe register was not found!`
        });
      } else {
        res.send({
          message: "register was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete register with id=" + id
      });
    });
};

// Delete all registers from the database.
exports.deleteAll = (req, res) => {
  Register.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} registers were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all registers."
      });
    });
};

// Find all published registers
exports.findAllPublished = (req, res) => {
  Register.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving registers."
      });
    });
};
