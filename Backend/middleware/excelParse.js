import xlsx from "xlsx";

const excelParse = async (req, res, next) => {
  try {
    console.log("req recived");

    // Load the Excel file
    const fileBuffer = req.file.buffer;

    const workbook = xlsx.read(fileBuffer);

    // Select the first sheet
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert sheet data to JSON
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    // Convert JSON to a string
    const dataString = JSON.stringify(jsonData, null, 2);
    console.log("Excel Data as String:\n", dataString);
    req.excelParse = dataString;
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "processing failed", message: error.message });
  }
};

export default excelParse;
