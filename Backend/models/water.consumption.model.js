import mongoose from "mongoose";

const waterConsumptionSchema = new mongoose.Schema({
    DM_WATER_CONS : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "MW",
        }
    },
    RAW_WATER_CONS : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "MW",
        }
    },
    RAW_WATER_RATIO : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "%",
        }
    },
    ASH_WATER_CONS : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "MW",
        }
    },
    ASH_WATER_RATIO : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "%",
        }
    },

});

const waterConsumptionModel = mongoose.model("Water_Consumption" , waterConsumptionSchema);
export default waterConsumptionModel;