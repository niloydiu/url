import URL from "../models/url.model.js";

export const redirectUrl = async (req, res) => {
  const { customUrl } = req.params; // Parameter from the URL (could be customUrl or defaultId)
  try {
    const urlFound = await URL.findOne({
      $or: [{ customUrl: customUrl }, { defaultId: customUrl }],
    });
    if (urlFound) {
      return res.redirect(urlFound.originalUrl);
    }
    return res.status(404).json({ success: false, message: "URL not found" });
  } catch (error) {
    console.log("Error redirecting to original URL: ", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
