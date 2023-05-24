import { Schema, model } from "mongoose";

const subjects_model = new Schema(
  {
    student: {
      ref: "students_dbs",
      type: String,
      required: true,
    },
    subject_1: {
      type: String,
    },
    subject_2: {
      type: String,
    },
    subject_3: {
      type: String,
    },
    subject_4: {
      type: String,
    },
    subject_5: {
      type: String,
    },
    subject_6: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model("Students_Subjects", subjects_model);
