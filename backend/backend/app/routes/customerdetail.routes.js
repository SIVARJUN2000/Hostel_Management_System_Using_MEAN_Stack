module.exports = app => {
    const customerdetails = require("../controllers/customerdetail.controller.js");
  
    var router = require("express").Router();
  
    // Create a new customerdetail
    router.post("/", customerdetails.create);
  
    // Retrieve all Customerdetails
    router.get("/", customerdetails.findAll);
  
    // Retrieve all published customerdetails
    router.get("/published", customerdetails.findAllPublished);
  
    // Retrieve a single customerdetail with id
    router.get("/:id", customerdetails.findOne);
  
    // Update a customerdetail with id
    router.put("/:id", customerdetails.update);
  
    // Delete a customerdetail with id
    router.delete("/:id", customerdetails.delete);
  
    // Create a new customerdetail
    router.delete("/", customerdetails.deleteAll);
  
    app.use("/api/customerdetails", router);
  };
  