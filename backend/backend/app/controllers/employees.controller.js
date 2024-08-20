const db = require("../models");
const Employees = db.employeess;

// Create and Save a new Employees
exports.create = (req, res) => {
  // Validate request
  if (!req.body.employee_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Employees
  const employees = new Employees({
    employee_id: req.body.employee_id,
    employee_name: req.body.employee_name,
    address: req.body.address,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    hostel_id: req.body.hostel_id
    
  });

  // Save Employees in the database
  employees
    .save(employees)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employees."
      });
    });
};

// Retrieve all Employeess from the database.
exports.findAll = (req, res) => {
  const employee_id = req.query.employee_id;
  var condition = employee_id ? { employee_id: { $regex: new RegExp(employee_id), $options: "i" } } : {};

  Employees.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Employeess."
      });
    });
};

// Find a single Employees with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Employees.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Employees with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Employees with id=" + id });
    });
};

// Update a Employees by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Employees.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Employees with id=${id}. Maybe Employees was not found!`
        });
      } else res.send({ message: "Employees was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Employees with id=" + id
      });
    });
                          
};

// Delete a Employees with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Employees.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Employees with id=${id}. Maybe Employees was not found!`
        });
      } else {
        res.send({
          message: "Employees was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Employees with id=" + id
      });
    });
};

// Delete all Employeess from the database.
exports.deleteAll = (req, res) => {
  Employees.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Employeess were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Employeess."
      });
    });
};

// Find all published Employeess
exports.findAllPublished = (req, res) => {
  Employees.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Employeess."
      });
    });
};
