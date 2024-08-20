module.exports = mongoose => {
    const Alogin = mongoose.model(
      "alogin",
      mongoose.Schema(
        {
          user_id:Number,
          password:Number



        },
        { timestamps: true }
      )
    );
  
    return Alogin;
  };
