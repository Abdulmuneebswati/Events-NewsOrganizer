import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
  team1: {
    type: String,
    required: true,
  },
  team2: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String, 
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  eventId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["finished", "pending"],
    required: true,
  },
  result: {
    type: String,
  },
});

export const Match = mongoose.model('Match', matchSchema);


