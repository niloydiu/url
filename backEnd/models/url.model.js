import { model, Schema } from "mongoose";
import { nanoid } from "nanoid";

const urlSchema = new Schema(
  {
    customUrl: {
      type: String,
      required: true,
      unique: true,
    },
    originalUrl: {
      type: String,
      required: true,
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
