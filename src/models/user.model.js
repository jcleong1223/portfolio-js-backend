import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,  
        required: true,
    },
    profileImage: {
        type: String,
        default: "",
    }
}, {
    timestamps: true
});

/****** password encryption before save to the db ******/
userSchema.pre("save", async function(next) {

    /****** Do not hash the password again when the password is not modified ******/
    if(!this.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword = async function(keyedInPassword) {
    return await bcrypt.compare(keyedInPassword, this.password);
}

const User = mongoose.model("User", userSchema);
export default User;