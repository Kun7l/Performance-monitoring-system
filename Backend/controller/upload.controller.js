import kpiModel from "../models/kpi.model.js";
const UploadData = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }
    const data = await kpiModel.insertMany(req.Data);
    res.status(200).json({ success: true, message: "succesfully uploaded" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { UploadData };
