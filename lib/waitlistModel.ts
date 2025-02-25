import mongoose from "mongoose";

// Interface for TypeScript
export interface IWaitlist extends mongoose.Document {
  email: string;
  createdAt: Date;
}

// Create the schema
const WaitlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model or use existing model
const Waitlist =
  mongoose.models.Waitlist ||
  mongoose.model<IWaitlist>("Waitlist", WaitlistSchema);

export default Waitlist;
