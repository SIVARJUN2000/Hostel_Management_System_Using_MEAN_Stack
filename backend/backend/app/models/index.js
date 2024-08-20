const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.customerdetails = require("./customerdetail.model.js")(mongoose);
db.roomstatuss = require("./roomstatus.model.js")(mongoose);
db.bookings = require("./booking.model.js")(mongoose);
db.paymentss = require("./payments.model.js")(mongoose);
db.hostelbranchs = require("./hostelbranch.model.js")(mongoose);
db.employeess = require("./employees.model")(mongoose);
db.transactions = require("./transaction.model")(mongoose);
db.registers =require("./register.model.js")(mongoose);


module.exports = db;
