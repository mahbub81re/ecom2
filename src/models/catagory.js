import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: String,
  type: String,
  perent_cat:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Catagory',
     },
},
{ timestamps: true });

const Catagory = mongoose.models.Catagory || mongoose.model("User", CategorySchema);

export default Catagory;
