import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tag: [String],
  selectorFile: String,
  likeCount: { type: Number, default: 0 },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postMessage = mongoose.model("PostMessage", postSchema);

export default postMessage;
