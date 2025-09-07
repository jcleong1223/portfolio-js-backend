import moogoose from "mongoose";

export const connectDB = async () => {
    try {
        const connection = await moogoose.connect(process.env.MONGO_URI);
        console.log(`Database connected ${connection.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};