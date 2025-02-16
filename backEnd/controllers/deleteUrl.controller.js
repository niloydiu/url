import URL from "../models/url.model.js";

export const deleteUrlByIdentifier = async (req, res) => {
  const { customUrl } = req.params; // This parameter contains either customUrl or defaultId
  try {
    const deletedUrl = await URL.findOneAndDelete({
      $or: [{ customUrl: customUrl }, { defaultId: customUrl }],
    });
    if (deletedUrl) {
      return res.status(200).json({
        success: true,
        message: "URL deleted successfully",
        data: deletedUrl,
      });
    }
    return res.status(404).json({
      success: false,
      message: "URL not found",
    });
  } catch (error) {
    console.error("Error deleting URL: ", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
