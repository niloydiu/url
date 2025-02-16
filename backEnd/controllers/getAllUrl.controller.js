import URL from "../models/url.model.js";

export const getAllUrls = async (req, res) => {
  try {
    const urls = await URL.find({});
    res.status(200).json({ success: true, data: urls });
  } catch (error) {
    console.error("Error fetching URLs: ", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
