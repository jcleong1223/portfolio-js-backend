import User from "../models/user.model.js";
import jwt from "jsonwebtoken";


const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"});
}
export const register = async (req, res) => {

    try {
        const { email, username, password } = req.body;

        if(!username || !email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }

        if(password.length < 6) {
            return res.status(400).json({message: "Password must be at least 6 characters"});
        }

        if(username.length < 3) {
            return res.status(400).json({message: "Username must be at least 3 characters"});
        }

        // const existingUser = await User.findOne({$or:[{email:email},{username:username}]});

        // if(existingUser) {
        //     return res.status(400).json({message: "User already exists"});
        // }

        const existingUsername = await User.findOne({username:username});
        if(existingUsername) {
            return res.status(400).json({message: "Username already exists"});
        }

        const existingEmail = await User.findOne({email:email});
        if(existingEmail) {
            return res.status(400).json({message: "Email already exists"});
        }

        /****** get random avatar ******/
        const profileImage = `https://api.dicebear.com/7.X/avataaars/svg?seed=${username}`;

        const user = new User({
            email,
            username,
            password,
            profileImage
        });

        await user.save();

        const token = generateToken(user._id);

        res.status(201).json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                username: user.username,
                profileImage: user.profileImage
            },
            message: "User created successfully",
        });

    } catch (error) {
        console.error("Error in register route:", error);
        return res.status(500).json({ message: "Server error. Please try again later." });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }

        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: "Invalid credentials"});

        /****** The matchPassword() method is defined in the user model ******/
        const isPasswordCorrect = await user.matchPassword(password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"});

        const token = generateToken(user._id);

        res.status(200).json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                username: user.username,

                profileImage: user.profileImage
            },
            message: "User logged in successfully",
        });

    } catch (error) {
        console.log("Error in login route", error);
        res.status(500).json({message: "Internal server error"});
    }
}