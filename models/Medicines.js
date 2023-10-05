import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Medicines", medicineSchema);
