import mongoose from "mongoose";

const kpiSchema = new mongoose.Schema({
  capacity: {
    value: {
      type: Number,
    },
    unit: {
      type: String,
      default: "MW",
    },
  },
  generation: {
    value: {
      type: Number,
    },
    unit: {
      type: String,
      default: "Mus",
    },
  },
  plf: {
    value: {
      type: Number,
    },
    unit: {
      type: String,
      default: "%",
    },
  },
  dc: {
    value: {
      type: Number,
    },
    unit: {
      type: String,
      default: "MWH",
    },
  },
  paf: {
    value: {
      type: Number,
    },
    unit: {
      type: String,
      default: "%",
    },
  },
  heat_rate: {
    value: {
      type: Number,
    },
    unit: {
      type: String,
      default: "Kcal/kwh",
    },
  },
  total_aux_power_mus: {
    value: {
      type: Number,
    },
    unit: {
      type: String,
      default: "Mus",
    },
  },
  total_aux_power_percent: {
    value: {
      type: Number,
    },
    unit: {
      type: String,
      default: "%",
    },
  },
  sp_oil_consumption_non_gen: {
    value: {
      type: Number,
    },
    unit: {
      type: String,
      default: "ml/kwh",
    },
  },
  sp_oil_consumption_gen: {
    value: {
      type: Number,
    },
    unit: {
      type: String,
      default: "ml/kwh",
    },
  },
  sp_oil_consumption_total: {
    value: {
      type: Number,
    },
    unit: {
      type: String,
      default: "ml/kwh",
    },
  },
  coal_lignite_gas_factor: {
    value: {
      type: Number,
    },
    unit: {
      type: String,
      default: "kg/kwh",
    },
  },
});

const kpiModel = mongoose.model("Kpi", kpiSchema);
export default kpiModel
