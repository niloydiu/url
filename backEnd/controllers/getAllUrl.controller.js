import URL from "../models/url.model.js";

export const getAllUrls = async (req, res) => {
  try {
    const urls = await URL.find({});
    res.status(200).json(urls);
  } catch (error) {
    res.status(500).json({ message: "Failed to get all URLs" });
  }
};
