import { model, Schema } from "mongoose";
import { nanoid } from "nanoid";

const urlSchema = new Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    customUrl: {
      type: String,
      required: true,
      unique: true,
    },
    defaultId: {
      type: String,
      default: () => nanoid(5),
    },
  },
  { timestamps: true }
);

const URL = model("URL", urlSchema);

export default URL;
