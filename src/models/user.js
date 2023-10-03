import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone:String,
  role: {
    type:String,
    default:"user",
    required:true,
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
