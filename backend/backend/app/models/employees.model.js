module.exports = mongoose => {
    const Employees = mongoose.model(
      "employees",
      mongoose.Schema(
        {
          employee_id: Number,
          employee_name: String,
          address:String,
          phonenumber:Number,
          email:String,
          hostel_id:Number
        },
        { timestamps: true }
      )
    );
  
    return Employees;
  };
  