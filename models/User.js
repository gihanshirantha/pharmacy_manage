import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
    password: {
    type: String,
    required: true,
  },
  roll:{
    type:String,
    required: true,
  }
});

export default mongoose.model("User", userSchema);