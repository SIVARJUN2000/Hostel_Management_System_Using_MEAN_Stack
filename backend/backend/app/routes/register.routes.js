module.exports = app => {
    const register = require("../controllers/register.controller.js");
  
    var router = require("express").Router();
  
    // Create a new hostelbranch
    router.post("/", register.create);
  
    // Retrieve all register
    router.get("/", register.findAll);
  
    // Retrieve all published register
    router.get("/published", register.findAllPublished);
  
    // Retrieve a single hostelbranch with id
    router.get("/:id", register.findOne);
  
    // Update a hostelbranch with id
    router.put("/:id", register.update);
  
    // Delete a hostelbranch with id
    router.delete("/:id", register.delete);
  
    // Create a new hostelbranch
    router.delete("/", register.deleteAll);
  
    app.use("/api/register", router);
  };
  
