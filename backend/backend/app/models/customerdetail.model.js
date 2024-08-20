module.exports = mongoose => {
    const Customerdetail = mongoose.model(
      "customerdetail",
      mongoose.Schema(
        {
          customer_id:Number,
          customer_name:String,
          customer_address:String,
          c_phonenumber:Number,
          c_email:String
          
        },
        { timestamps: true }
      )
    );
  
    return Customerdetail;
  };