module.exports = mongoose => {
    const Payments = mongoose.model(
      "payments",
      mongoose.Schema(
        {
          payment_id:Number,
          customer_id:Number,
          booking_ID:Number,
          roomprice:Number,
          no_of_days:Number,
          totalpayments:Number
          
        },
        { timestamps: true }
      )
    );
  
    return Payments;
  };
  