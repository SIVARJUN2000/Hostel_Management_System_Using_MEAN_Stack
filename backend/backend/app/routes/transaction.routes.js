module.exports = app => {
    const transactions = require("../controllers/transaction.controller.js");
  
    var router = require("express").Router();
  
    // Create a new transaction
    router.post("/", transactions.create);
  
    // Retrieve all transactions
    router.get("/", transactions.findAll);
  
    // Retrieve all published transactions
    router.get("/published", transactions.findAllPublished);
  
    // Retrieve a single transaction with id
    router.get("/:id", transactions.findOne);
  
    // Update a transaction with id
    router.put("/:id", transactions.update);
  
    // Delete a transaction with id
    router.delete("/:id", transactions.delete);
  
    // Create a new transaction
    router.delete("/", transactions.deleteAll);
  
    app.use("/api/transactions", router);
  };
  