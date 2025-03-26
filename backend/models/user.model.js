import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({ 
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    
    image: {
        type: String,
        default: "",
    },
    searchHistory: {
        type: Array,
        default: []
    },
}, {
    timestamps: true
});
const User = mongoose.model('User', userSchema);
export default User;