module.exports = app => {
    const employeess = require("../controllers/employees.controller.js");
  
    var router = require("express").Router();
  
    // Create a new employees
    router.post("/", employeess.create);
  
    // Retrieve all employeess
    router.get("/", employeess.findAll);
  
    // Retrieve all published employeess
    router.get("/published", employeess.findAllPublished);
  
    // Retrieve a single employees with id
    router.get("/:id", employeess.findOne);
  
    // Update a employees with id
    router.put("/:id", employeess.update);
  
    // Delete a employees with id
    router.delete("/:id", employeess.delete);
  
    // Create a new employees
    router.delete("/", employeess.deleteAll);
  
    app.use("/api/employeess", router);
  };
  