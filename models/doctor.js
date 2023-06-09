import { Schema, model } from "mongoose";

const doctor = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    ID: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
    
}, { timestamps: true });

export default model("doctor", doctor);


