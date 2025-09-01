import { model, Schema } from "mongoose"

const diseaseSchema = new Schema(
  {
    name: {
      type: String
    },
    vector: {
      type: String
    },
    pathogen: {
      type: String
    },
    regions: {
      type: Array
    },
    symptoms: {
      type: Array
    },
    treatment: {
      type: Array
    },
    prevention: {
      type: Array
    },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

const Disease = model("diseases", diseaseSchema);

export default Disease;