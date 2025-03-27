import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(chalk.cyanBright(`MongoDB connected: ${conn.connection.host}`));
    } catch (err) {
        console.error(chalk.redBright(`Error: ${err.message}`));
        process.exit(1);
    }
};

export default connectDB;