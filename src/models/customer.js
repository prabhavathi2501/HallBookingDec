import mongoose from "mongoose"

const customerSchema = new mongoose.Schema({
  customerName: { type: String, required: [true, "customerName is required"] },
  customerId: { type: String, unique: true }
});

const customerModel = mongoose.model("customer", customerSchema);
export default customerModel;