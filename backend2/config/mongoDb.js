import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
    // If already connected, return immediately
    if (isConnected && mongoose.connection.readyState === 1) {
        console.log('Using existing MongoDB connection');
        return;
    }

    try {
        // Set mongoose options for better serverless compatibility
        mongoose.set('strictQuery', false);
        
        const db = await mongoose.connect(`${process.env.MONGODB_URI}/gallery`, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });

        isConnected = db.connections[0].readyState === 1;
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}

export default connectDB;