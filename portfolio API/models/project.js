import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    languages: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    github: {
        type: String
    },
    website: {
        type: String
    },
    images: {
        type: Array,
        required: true
    },
    company: {
        type: String,
        required: true
    }
});

export default mongoose.model("project", projectSchema);