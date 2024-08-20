module.exports = mongoose => {
    const Booking = mongoose.model(
      "booking",
      mongoose.Schema(
        {
          booking_ID: Number,
          customer_id:Number,
          room_id:Number,
          checkindate:Date,
          checkoutdate:Date,
          no_of_days:Number


        },
        { timestamps: true }
      )
    );
  
    return Booking;
  };
  