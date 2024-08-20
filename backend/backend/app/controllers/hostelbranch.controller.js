const db = require("../models");
const Hostelbranch = db.hostelbranchs;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.hostelbranch_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.hostel_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.address) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.phonenumber) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.manager_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  
  

  // Create a Tutorial
  const hostelbranch = new Hostelbranch({
    hostelbranch_id: req.body.hostelbranch_id,
    hostel_name: req.body.hostel_name,
    address: req.body.address,
    phonenumber: req.body.phonenumber,
    manager_id: req.body.manager_id

  });

  // Save hostelbranch in the database
  hostelbranch
    .save(hostelbranch)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the hostelbranch."
      });
    });
};

// Retrieve all hostelbranchs from the database.
exports.findAll = (req, res) => {
  const hostelbranch_id = req.query.hostelbranch_id;
  var condition = hostelbranch_id ? { hostelbranch_id: { $regex: new RegExp(hostelbranch_id), $options: "i" } } : {};

  Hostelbranch.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving hostelbranchs."
      });
    });
};

// Find a single hostelbranch with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Hostelbranch.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found hostelbranch with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving hostelbranch with id=" + id });
    });
};

// Update a hostelbranch by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Hostelbranch.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update hostelbranch with id=${id}. Maybe hostelbranch was not found!`
        });
      } else res.send({ message: "hostelbranch was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating hostelbranch with id=" + id
      });
    });
                          
};

// Delete a hostelbranch with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Hostelbranch.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete hostelbranch with id=${id}. Maybe hostelbranch was not found!`
        });
      } else {
        res.send({
          message: "hostelbranch was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete hostelbranch with id=" + id
      });
    });
};

// Delete all hostelbranchs from the database.
exports.deleteAll = (req, res) => {
  Hostelbranch.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} hostelbranchs were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all hostelbranchs."
      });
    });
};

// Find all published hostelbranchs
exports.findAllPublished = (req, res) => {
  Hostelbranch.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving hostelbranchs."
      });
    });
};
