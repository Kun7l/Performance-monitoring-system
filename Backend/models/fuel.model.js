import mongoose from "mongoose";

const fuelSchema = new mongoose.Schema({
    LDO : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "KL",
        }
    },
    FO : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "KL",
        }
    },
    INDIAN_COAL : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "MT",
        }
    },
    WASHED_COAL : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "MT",
        }
    },
    IMPORTED_COAL : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "MT",
        }
    },
    TOTAL_COAL : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "MT",
        }
    },
    SPECIFIC_OIL_CONS : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "ml/kWh",
        }
    },

});

const fuelModel = mongoose.model("Fuel" , fuelSchema);