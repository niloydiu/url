import { getAllEntries } from "../services/url.service.js";

export const getAllUrls = async (req, res) => {
  try {
    const urls = await getAllEntries();
    return res.status(200).json({ success: true, data: urls });
  } catch (error) {
    console.error("Error fetching URLs: ", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
