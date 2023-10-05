import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
  }
});

export default mongoose.model("Customers", customerSchema);
