module.exports = mongoose => {
    const Transaction = mongoose.model(
      "transaction",
      mongoose.Schema(
        {
          transaction_id: Number,
          customer_id: Number,
          booking_id:Number,
          payment_id:Number,
          employee_id:Number
        },
        { timestamps: true }
      )
    );
  
    return Transaction;
  };