import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: { type: String, _id: false },
  name: { type: String, require: true, minLength: 4, maxLength: 25 },
  surname: { type: String, require: true, minLength: 4, maxLength: 50 },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

const UserModel = model("User", userSchema);

export default UserModel;