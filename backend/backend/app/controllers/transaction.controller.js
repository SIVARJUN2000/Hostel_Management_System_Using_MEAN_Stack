const db = require("../models");
const Transaction = db.transactions;

// Create and Save a new Transaction
exports.create = (req, res) => {
  // Validate request
  if (!req.body.transaction_id) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Transaction
  const transaction = new Transaction({
    transaction_id: req.body.transaction_id,
    customer_id: req.body.customer_id,
    booking_id:req.body.booking_id,
    payment_id:req.body.payment_id,
    employee_id:req.body.employee_id
    
  });

  // Save Transaction in the database
  transaction
    .save(transaction)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Transaction."
      });
    });
};

// Retrieve all Transactions from the database.
exports.findAll = (req, res) => {
  const transaction_id = req.query.transaction_id;
  var condition = transaction_id ? { transaction_id: { $regex: new RegExp(transaction_id), $options: "i" } } : {};

  Transaction.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Transactions."
      });
    });
};

// Find a single Transaction with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Transaction.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Transaction with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Transaction with id=" + id });
    });
};

// Update a Transaction by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Transaction.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Transaction with id=${id}. Maybe Transaction was not found!`
        });
      } else res.send({ message: "Transaction was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Transaction with id=" + id
      });
    });
                          
};

// Delete a Transaction with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Transaction.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Transaction with id=${id}. Maybe Transaction was not found!`
        });
      } else {
        res.send({
          message: "Transaction was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Transaction with id=" + id
      });
    });
};

// Delete all Transactions from the database.
exports.deleteAll = (req, res) => {
  Transaction.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Transactions were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Transactions."
      });
    });
};

// Find all published Transactions
exports.findAllPublished = (req, res) => {
  Transaction.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Transactions."
      });
    });
};
