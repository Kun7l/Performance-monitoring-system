import kpiModel from "../models/kpi.model.js";
const UploadData = async (req, res) => {
  try {
    if (!req.file || req.unitId) {
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

const uploadDataManually = async (req,res)=>{
  try{
    const fieldData = req.body;
    // console.log(fieldData);

    const respond = await kpiModel.create({
      unitId : fieldData.unitId,
      capacity : {value : fieldData.capacity},
      generation : {value : fieldData.generation},
      plf : {value : fieldData.plf},
      dc : {value : fieldData.dc},
      paf : {value : fieldData.paf},
      heat_rate : {value : fieldData.heat_rate},
      total_aux_power_mus : {value : fieldData.total_aux_power_mus},
      total_aux_power_percent : {value : fieldData.total_aux_power_percent},
      sp_oil_consumption_non_gen : {value : fieldData.sp_oil_consumption_non_gen},
      sp_oil_consumption_gen : {value : fieldData.sp_oil_consumption_gen},
      sp_oil_consumption_total : {value : fieldData.sp_oil_consumption_total},
      coal_lignite_gas_factor : {value : fieldData.coal_lignite_gas_factor},
    });

    return res.status(200).json({success : true , message : "data created successfully"});
    
  }
  catch(error){
    return res.status(500).json({ success: false, message:  error.message});
  }
}

export { UploadData , uploadDataManually};
