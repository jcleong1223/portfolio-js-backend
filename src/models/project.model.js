import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    websiteUrl:{
        type: String,
        required: false
    },
    status: {
        type: Boolean,
        default: true
    },
    projectDate: {
        type: Date,
        required: false
    },
    sequence: {
        type: Number,
        default: 1
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    thumbnail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Media'
    },
    images: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Media'
    }]
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);
export default Project;