import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    team_name: {
      type: String,
      required: true,
      unique:true
    },
    eventId: {
        type: String,
        required: true,
    },
});

export const Teams = mongoose.model('team', teamSchema);
