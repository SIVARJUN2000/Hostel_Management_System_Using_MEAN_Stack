 db = require("../models");
const Roomstatus = db.roomstatuss;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.room_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const roomstatus = new Roomstatus({
    room_id: req.body.room_id,
    room_description: req.body.room_description,
    roomprice: req.body.roomprice,
    hostel_id: req.body.hostel_id,
    roomstatus: req.body.roomstatus,
  });

  // Save Tutorial in the database
  roomstatus
    .save(roomstatus)
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
  const room_id = req.query.room_id;
  var condition = room_id ? { room_id: { $regex: new RegExp(room_id), $options: "i" } } : {};

  Roomstatus.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving roomstatuss."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Roomstatus.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Roomstatus with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Roomstatus with id=" + id });
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
          message: `Cannot update Roomstatus with id=${id}. Maybe Roomstatus was not found!`
        });
      } else res.send({ message: "Roomstatus was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Roomstatus with id=" + id
      });
    });
};

// Delete a Roomstatus with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Roomstatus.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Roomstatus with id=${id}. Maybe Roomstatus was not found!`
        });
      } else {
        res.send({
          message: "Roomstatus was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Roomstatus with id=" + id
      });
    });
};

// Delete all Roomstatuss from the database.
exports.deleteAll = (req, res) => {
  Roomstatus.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Roomstatuss were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Roomstatuss."
      });
    });
};

// Find all published Roomstatuss
exports.findAllPublished = (req, res) => {
  Roomstatus.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Roomstatuss."
      });
    });
};
