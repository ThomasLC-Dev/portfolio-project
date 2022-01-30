import mongoose from "mongoose";

const workExperienceSchema = mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    tasks: [
        {
            name: {
                type: String,
                required: true
            },
            subtasks: {
                type: Array
            }
        }
    ]
});

export default mongoose.model('work-experience', workExperienceSchema);