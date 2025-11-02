import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
    },
    dueTime: {
      type: String,
    },
  },
  { timestamps: true } // 👈 auto-adds createdAt and updatedAt
);

export default mongoose.model("Todo", todoSchema);
