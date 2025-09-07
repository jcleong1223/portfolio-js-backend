import mongoose from "mongoose";

const certSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    sequence: {
        type: Number,
        required: false
    },
    status: {
        type: Boolean,
        default: true
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Media'
    },
}, { timestamps: true });

const Cert = mongoose.model("Certificate", certSchema);
export default Cert;