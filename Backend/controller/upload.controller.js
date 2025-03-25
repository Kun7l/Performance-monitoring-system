const UploadData = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }
    console.log(req.excelParse);
    
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export {UploadData}
