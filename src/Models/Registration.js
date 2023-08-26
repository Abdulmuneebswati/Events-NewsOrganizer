import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
        
    },
    contactNumber:{
        type:Number,
        required:true,
    },
    eventId: {
        type: String,
        required: true,
    }
});

export const Registration = mongoose.model('registration', registrationSchema);
