import { Schema, model } from "mongoose";

const students_model = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  
    departement: {
      type: String,
      //required: true,
    },
    password: {
      type: String,
      required: true,
    },
    
    phone: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

export default model("Students_DB", students_model);
