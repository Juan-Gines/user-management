import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, require: true, minLength: 4, maxLength: 25 },
  surname: { type: String, require: true, minLength: 4, maxLength: 50 },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const userModel = model("User", userSchema);

export default userModel;