import mongoose from "mongoose";

const skillSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

export default mongoose.model('skill', skillSchema);