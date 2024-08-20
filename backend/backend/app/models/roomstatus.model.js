module.exports = mongoose => {
    const Roomstatus = mongoose.model(
      "roomstatus",
      mongoose.Schema(
        {
          room_id:Number,
          room_description:String,
          roomprice:Number,
          hostel_id:Number,
          roomstatus:String

        },
        { timestamps: true }
      )
    );
  
    return Roomstatus;
  };