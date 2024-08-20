module.exports = mongoose => {
    const Register = mongoose.model(
      "register",
      mongoose.Schema(
        {
          Email:String,
          password:Number,
          confirm_password:Number
          
        },
        { timestamps: true }
      )
    );
  
    return Register;
  };