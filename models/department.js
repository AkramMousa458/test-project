import { Schema, model } from "mongoose";

const departement = new Schema({
    name: {
        type: String,
       // required: true,
    },
    id: {
        type: String,
        required: true,
      },
    
    
}, { timestamps: true });

export default model("department",departement );