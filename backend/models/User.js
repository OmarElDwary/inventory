import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        email: {
            type: String,
            required: true,
            max:  50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 8,
        },
        city: String,
        state: String,
        country: String,
        phoneNumber: String,
        occupation: String,
        transactions: Array,
        role: {
            type: String,
            role: ["user", "admin", "superadmin"],
            default: "user",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;