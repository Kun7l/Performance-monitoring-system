import mongoose from "mongoose";

const maintenanceMiscellaneousSchema = mongoose.Schema({
    H2_BOTTLE_CONS : {
        value : {
            type : Number,
        },
        unit : {
            type : String,
            default : "NOS.",
        }
    }
})

const maintenanceMiscellaneousModel = mongoose.model("Maintenance_Miscellaneous" , maintenanceMiscellaneousSchema);
export default maintenanceMiscellaneousModel;