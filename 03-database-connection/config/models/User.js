import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  role: String,
  city: String,
});

export default mongoose.models.User ||
  mongoose.model("User", userSchema, "users");
