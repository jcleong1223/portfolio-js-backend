import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


const protectRoutes = async ( req, res, next ) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");

        if(!token) return res.status(401).json({message: "No authentication token, access denied."});

        /****** verify token ******/
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select("-password");

        if(!user) return res.status(401).json({message: "Invalid authentication token, access denied."});

        req.user = user;
        next();

    } catch (error) {
        console.log("Authentication error: ", error.message);
        res.status(401).json({message: "Invalid authentication token, access denied."});
    }
}

export default protectRoutes;