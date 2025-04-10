import mongoose from "mongoose";

const powerConsumptionSchema = new mongoose.Schema({
    AUX_POWER_CONS : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "MWH",
        }
    },
    // AUX_POWER_CONS_UTA_B/ST : {
        // value : {
        //     type : Number,
        // },
        // unit : {
        //     type : String,
        //     default : "MWH",
        // }
    // }
});

const powerConsumptionModel = mongoose.model("Power_Consumption" , powerConsumptionSchema);
export default powerConsumptionModel;