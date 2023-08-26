import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['news', 'event'],
        required: true,
    }
});

export const Posts = mongoose.model('post', postsSchema);
