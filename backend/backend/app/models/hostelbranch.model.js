module.exports = mongoose => {
    const Hostelbranch = mongoose.model(
      "hostelbranch",
      mongoose.Schema(
        {
          hostelbranch_id:Number,
          hostel_name:String,
          address:String,
          phonenumber:Number,
          manager_id:Number
          
        },
        { timestamps: true }
      )
    );
  
    return Hostelbranch;
  };