import mongoose from "mongoose";

const { Schema } = mongoose;

const JobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skill1: {
    type: String,
    required: true,
  },
  skill2: {
    type: String,
    required: true,
  },
  skill3: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("job", JobSchema);
