import URL from "../models/url.model.js";

export const createUrl = async (req, res) => {
  try {
    const { customUrl, originalUrl } = req.body;

    // Create a new URL document, letting defaultId generate automatically
    const newUrlDoc = new URL({ originalUrl });

    // If customUrl was provided, use it. Otherwise, fall back to defaultId
    newUrlDoc.customUrl =
      customUrl && customUrl.trim() ? customUrl.trim() : newUrlDoc.defaultId;

    const savedUrl = await newUrlDoc.save();
    res.status(201).json({
      success: true,
      data: savedUrl,
      message: "URL created successfully",
    });
  } catch (error) {
    // If MongoDB throws a duplicate key error, we alert the user they need a different customUrl
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message:
          "Custom text or url already exists. Please choose a different one.",
      });
    }
    res.status(500).json({ success: false, message: "Failed to create URL" });
  }
};
