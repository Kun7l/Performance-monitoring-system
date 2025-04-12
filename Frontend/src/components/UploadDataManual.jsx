import React, { useState } from "react";

import { Box, Select, MenuItem, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

import axios from "axios";
import { toast } from "react-toastify";


const UploadDataManual = ({ units }) => {
  const [unitId, setUnitId] = useState("");
  const [fieldData, setFieldData] = useState({
    capacity: 0,
    generation: 0,
    plf: 0,
    dc: 0,
    paf: 0,
    heat_rate: 0,
    total_aux_power_mus: 0,
    total_aux_power_percent: 0,
    sp_oil_consumption_non_gen: 0,
    sp_oil_consumption_gen: 0,
    sp_oil_consumption_total: 0,
    coal_lignite_gas_factor: 0,
  });

  const notify = (message) => {
    toast(message);
  };

  const onChangeHandeler = (e) => {
    setFieldData({ ...fieldData, [e.target.name]: e.target.value });
  };

  const submitHandelerManual = async (e) => {
    e.preventDefault();
    fieldData.unitId = unitId;
    try {
      const response = await axios.post(
        "http://localhost:3000/upload/manual",
        fieldData,
        { withCredentials: true }
      );
      notify(response?.data?.message);
      setUnitId("");
      setFieldData({
        capacity: 0,
        generation: 0,
        plf: 0,
        dc: 0,
        paf: 0,
        heat_rate: 0,
        total_aux_power_mus: 0,
        total_aux_power_percent: 0,
        sp_oil_consumption_non_gen: 0,
        sp_oil_consumption_gen: 0,
        sp_oil_consumption_total: 0,
        coal_lignite_gas_factor: 0,
      });
    } catch (error) {
      notify(error?.response?.data?.message);
    }
  };

  return (
    <div className="body-container manual-data-container">

      <form>
        <div>
          <InputLabel
            variant="standard"
            htmlFor="demo-simple-select-InputLabel"
          >
            Unit
          </InputLabel>

          <Select
            id="unitId"
            value={unitId}
            className="textField"
            sx={{ width: "45%", ml: 1, mt: 1 }}
            onChange={(e) => {
              setUnitId(e.target.value);
            }}
          >
            <MenuItem>Select An Option</MenuItem>
            {units.map((unit) => {
              return <MenuItem value={unit._id}>{unit.name}</MenuItem>;
            })}
          </Select>
        </div>
        <div className="form-item-div">
          <div className="form-item">
            <InputLabel htmlFor="heat_rate">Heat Rate (Kcal/kwh)</InputLabel>

            <TextField
              required
              id="heat_rate"
              name="heat_rate"
              value={fieldData.heat_rate}
              onChange={onChangeHandeler}
            />
          </div>

          <div className="form-item">
            <InputLabel htmlFor="total_aux_power_mus">
              Total Aux Power Consumption-mus (Mus)
            </InputLabel>

            <TextField
              required
              id="total_aux_power_mus"
              name="total_aux_power_mus"
              value={fieldData.total_aux_power_mus}
              onChange={onChangeHandeler}
            />
          </div>

          <div className="form-item">
            <InputLabel htmlFor="total_aux_power_percent">
              Total Aux Power Consumption-Percentage (%)
            </InputLabel>

            <TextField
              required
              id="total_aux_power_percent"
              name="total_aux_power_percent"
              value={fieldData.total_aux_power_percent}
              onChange={onChangeHandeler}
            />
          </div>

          <div className="form-item">
            <InputLabel htmlFor="sp_oil_consumption_non_gen">
              Sp oil consumption non-generation (ml/kwh)
            </InputLabel>

            <TextField
              required
              id="sp_oil_consumption_non_gen"
              name="sp_oil_consumption_non_gen"
              value={fieldData.sp_oil_consumption_non_gen}
              onChange={onChangeHandeler}
            />
          </div>

          <div className="form-item">
            <InputLabel htmlFor="sp_oil_consumption_gen">
              Sp oil consumption generation (ml/kwh)
            </InputLabel>

            <TextField
              required
              id="sp_oil_consumption_gen"
              name="sp_oil_consumption_gen"
              value={fieldData.sp_oil_consumption_gen}
              onChange={onChangeHandeler}
            />
          </div>

          <div className="form-item">
            <InputLabel htmlFor="sp_oil_consumption_total">
              Sp oil consumption Total (ml/kwh)
            </InputLabel>

            <TextField
              required
              id="sp_oil_consumption_total"
              name="sp_oil_consumption_total"
              value={fieldData.sp_oil_consumption_total}
              onChange={onChangeHandeler}
            />
          </div>

          <div className="form-item">
            <InputLabel htmlFor="coal_lignite_gas_factor">
              Coal / Lignite / Gas Factor (kg/kwh)
            </InputLabel>

            <TextField
              required
              id="coal_lignite_gas_factor"
              name="coal_lignite_gas_factor"
              value={fieldData.coal_lignite_gas_factor}
              onChange={onChangeHandeler}
            />
          </div>

          <div className="form-item">
            <InputLabel htmlFor="capacity">Capacity (MW)</InputLabel>

            <TextField
              required
              id="capacity"
              name="capacity"
              value={fieldData.capacity}
              onChange={onChangeHandeler}
            />
          </div>

          <div className="form-item">
            <InputLabel htmlFor="generation">Generation (Mus)</InputLabel>

            <TextField
              id="generation"
              required
              name="generation"
              value={fieldData.generation}
              onChange={onChangeHandeler}
            />
          </div>

          <div className="form-item">
            <InputLabel htmlFor="plf">plf (%)</InputLabel>

            <TextField
              required
              name="plf"
              id="plf"
              value={fieldData.plf}
              onChange={onChangeHandeler}
            />
          </div>

          <div className="form-item">
            <InputLabel htmlFor="dc">DC (MWH)</InputLabel>

            <TextField
              required
              id="dc"
              name="dc"
              value={fieldData.dc}
              onChange={onChangeHandeler}
            />
          </div>

          <div className="form-item">
            <InputLabel htmlFor="paf">paf (%)</InputLabel>

            <TextField
              required
              id="paf"
              name="paf"
              value={fieldData.paf}
              onChange={onChangeHandeler}
            />
          </div>
        </div>

        <div className="form-submit-button">
          <button
            type="submit"
            onClick={submitHandelerManual}
            className="mt-5 m-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadDataManual;
