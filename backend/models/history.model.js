import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image:{
        type: String,
        trim: true,
    },
    title:{
        type: String,
        trim: true,
    },
    searchType:{
        type: String,
        trim: true,
    },
}, {
    timestamps: true
});
export const History = mongoose.model('History', historySchema);
