import mongoose from 'mongoose';
import { ENV_VARS } from './envVars.js';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
		console.log("MongoDB connected: " + conn.connection.host);

    } catch (error) {
        console.error('MongoDB connection FAIL');
        process.exit(1);
    }
}