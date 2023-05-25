import { Schema, model } from "mongoose";

const subject = new Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "doctor",
        required: false,
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


