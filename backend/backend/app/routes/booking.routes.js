module.exports = app => {
    const bookings = require("../controllers/booking.controller.js");
  
    var router = require("express").Router();
  
    // Create a new booking
    router.post("/", bookings.create);
  
    // Retrieve all bookings
    router.get("/", bookings.findAll);
  
    // Retrieve all published bookings
    router.get("/published", bookings.findAllPublished);
  
    // Retrieve a single booking with id
    router.get("/:id", bookings.findOne);
  
    // Update a booking with id
    router.put("/:id", bookings.update);
  
    // Delete a booking with id
    router.delete("/:id", bookings.delete);
  
    // Create a new booking
    router.delete("/", bookings.deleteAll);
  
    app.use("/api/bookings", router);
  };
  