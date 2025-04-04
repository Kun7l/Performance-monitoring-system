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

    const rawData = xlsx.utils.sheet_to_json(sheet);

    const fieldMapping = {
      "Capacity (MW)": "capacity",
      "Generation (Mus)": "generation",
      "PLF (%)": "plf",
      "DC (MWH)": "dc",
      "PAF (%)": "paf",
      "Heat Rate (Kcal/Kwh)": "heat_rate",
      "Total Aux Power Cons (Mus)": "total_aux_power_mus",
      "Total Aux Power Cons (%)": "total_aux_power_percent",
      "Sp.oil Consumption (Non Gen) (ml/Kwh)": "sp_oil_consumption_non_gen",
      "Sp.Oil Consumption (Gen) (ml/Kwh)": "sp_oil_consumption_gen",
      "Sp.Oil Consumption Total (ml/Kwh)": "sp_oil_consumption_total",
      "Coal/Lignite/Gas Factor Kg/Kwh": "coal_lignite_gas_factor",
    };

    // 📌 Apply Field Mapping
    const formattedData = rawData.map((row) => {
      let formattedRow = {};
      for (let key in row) {
        if (fieldMapping[key]) {
          const data = {
            value: row[key],
          };
          formattedRow[fieldMapping[key]] = data; // Use mapped name
        } else {
          formattedRow[key] = data; // Keep original if no mapping
        }
      }
      return formattedRow;
    });

    req.Data = formattedData;
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "processing failed", message: error.message });
  }
};

export default excelParse;
