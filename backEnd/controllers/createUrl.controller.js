import { createUrlEntry } from "../services/url.service.js";

export const createUrl = async (req, res) => {
  try {
    const { customUrl, originalUrl } = req.body;
    const savedUrl = await createUrlEntry({ originalUrl, customUrl });
    return res
      .status(201)
      .json({
        success: true,
        data: savedUrl,
        message: "URL created successfully",
      });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({
          success: false,
          message:
            "Custom text or url already exists. Please choose a different one.",
        });
    }
    console.error("Create URL error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to create URL" });
  }
};
