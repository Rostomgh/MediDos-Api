import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: {
    type: String,
    minlength: [8, "Password should be at least 8 characters"],
    required: true,
  }
}, {
  timestamps: true  
});

const User = mongoose.model("User", UserSchema);

export default User