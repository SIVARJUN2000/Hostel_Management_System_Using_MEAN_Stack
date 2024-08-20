module.exports = app => {
    const roomstatuss = require("../controllers/roomstatus.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", roomstatuss.create);
  
    // Retrieve all roomstatuss
    router.get("/", roomstatuss.findAll);
  
    // Retrieve all published roomstatuss
    router.get("/published", roomstatuss.findAllPublished);
  
    // Retrieve a single roomstatus with id
    router.get("/:id", roomstatuss.findOne);
  
    // Update a roomstatus with id
    router.put("/:id", roomstatuss.update);
  
    // Delete a roomstatus with id
    router.delete("/:id", roomstatuss.delete);
  
    // Create a new roomstatus
    router.delete("/", roomstatuss.deleteAll);
  
    app.use("/api/roomstatuss", router);
  };
  