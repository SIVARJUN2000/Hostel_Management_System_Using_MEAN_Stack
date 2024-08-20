module.exports = app => {
    const paymentss = require("../controllers/payments.controller.js");
  
    var router = require("express").Router();
  
    // Create a new payments
    router.post("/", paymentss.create);
  
    // Retrieve all paymentss
    router.get("/", paymentss.findAll);
  
    // Retrieve all published paymentss
    router.get("/published", paymentss.findAllPublished);
  
    // Retrieve a single payments with id
    router.get("/:id", paymentss.findOne);
  
    // Update a payments with id
    router.put("/:id", paymentss.update);
  
    // Delete a payments with id
    router.delete("/:id", paymentss.delete);
  
    // Create a new payments
    router.delete("/", paymentss.deleteAll);
  
    app.use("/api/paymentss", router);
  };
  