import { Schema, model } from "mongoose";

const subject = new Schema({
    name: {
        type: String,
        required: true,
    },

    doctor: {
        type: String,
        // required: true,
    },

    department: {
        type: String,
        required: true,
    },
    prev_req: {
        type: String,
    },
    
}, { timestamps: true });

export default model("subject", subject);


