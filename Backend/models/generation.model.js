import mongoose from "mongoose";

const generationSchema = new mongoose.Schema({
    Generation : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "MWH",
        }
    },
    Back_Down : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "MWH",
        }
    },
    Plant_Load_Factor : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "%"
        }
    },
    Heat_Rate : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "kCal/kWh"
        }
    },
    Declared_Capacity : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "MWH"
        }
    },
    PAF : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "%"
        }
    },
    Gen_Loss_Others : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "MWH"
        }
    },
})

const generationModel = mongoose.model("Generation" , generationSchema);

export default generationModel;