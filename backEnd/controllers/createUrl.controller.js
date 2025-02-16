import URL from "../models/url.model.js";

export const createUrl = async (req, res) => {
  try {
    const { customUrl, originalUrl } = req.body;
    const finalCustomUrl =
      customUrl && customUrl.startsWith("http")
        ? customUrl
        : customUrl
        ? `https://url-three-sand.vercel.app/${customUrl}`
        : "";
    const newUrl = new URL({ customUrl: finalCustomUrl, originalUrl });
    const savedUrl = await newUrl.save();
    res.status(201).json({
      success: true,
      data: savedUrl,
      message: "URL created successfully",
    });
  } catch (error) {
    console.log("Error creating a new URL: ", error);
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(400).json({
        success: false,
        message: "Custom URL already exists. Please choose a different one.",
      });
    }
    res.status(500).json({ success: false, message: "Failed to create URL" });
  }
};
