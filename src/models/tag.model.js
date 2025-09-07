import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: false
    },
    icon:{
        type: String,
    },
    status: {
        type: Boolean,
        default: true
    },
    mySkill: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Tag = mongoose.model("Tag", tagSchema);
export default Tag;