module.exports = app => {
    const hostelbranchs = require("../controllers/hostelbranch.controller.js");
  
    var router = require("express").Router();
  
    // Create a new hostelbranch
    router.post("/", hostelbranchs.create);
  
    // Retrieve all hostelbranchs
    router.get("/", hostelbranchs.findAll);
  
    // Retrieve all published hostelbranchs
    router.get("/published", hostelbranchs.findAllPublished);
  
    // Retrieve a single hostelbranch with id
    router.get("/:id", hostelbranchs.findOne);
  
    // Update a hostelbranch with id
    router.put("/:id", hostelbranchs.update);
  
    // Delete a hostelbranch with id
    router.delete("/:id", hostelbranchs.delete);
  
    // Create a new hostelbranch
    router.delete("/", hostelbranchs.deleteAll);
  
    app.use("/api/hostelbranchs", router);
  };
  