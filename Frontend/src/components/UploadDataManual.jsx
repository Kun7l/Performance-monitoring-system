import React, { useState } from 'react'
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import { toast } from 'react-toastify';

const UploadDataManual = ({units}) => {
  const [unitId , setUnitId] = useState("");
  const [fieldData , setFieldData] = useState({
    capacity : 0,
    generation : 0,
    plf : 0,
    dc : 0,
    paf : 0,
    heat_rate : 0,
    total_aux_power_mus : 0,
    total_aux_power_percent : 0,
    sp_oil_consumption_non_gen : 0,
    sp_oil_consumption_gen : 0,
    sp_oil_consumption_total : 0,
    coal_lignite_gas_factor : 0,
  });

  const notify = (message) =>{
    toast(message);
  }

  const onChangeHandeler = (e) =>{
    setFieldData({...fieldData , [e.target.name] : e.target.value});
  }

  const submitHandelerManual = async (e) =>{
    e.preventDefault();
    fieldData.unitId = unitId;
    try{
       const response = await axios.post("http://localhost:3000/upload/manual" , fieldData , {withCredentials : true});
       notify(response?.data?.message);
       setUnitId("");
        setFieldData({
            capacity : 0,
            generation : 0,
            plf : 0,
            dc : 0,
            paf : 0,
            heat_rate : 0,
            total_aux_power_mus : 0,
            total_aux_power_percent : 0,
            sp_oil_consumption_non_gen : 0,
            sp_oil_consumption_gen : 0,
            sp_oil_consumption_total : 0,
            coal_lignite_gas_factor : 0,
          });
    }
    catch(error){
        notify(error?.response?.data?.message);
    }
  }


  return (
    <div className="body-container">
        <Box
            component="main"
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
        >
           
        <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
            className="upload-container"
        >
            <form>
                <div className="form-item-div">
                  <InputLabel
                    variant="standard"
                    htmlFor="demo-simple-select-label"
                  >
                    Unit
                  </InputLabel>

                  <select id="unitId" value={unitId} onChange={(e)=>{setUnitId(e.target.value)}}>
                    <option>Select An Option</option>
                    {
                      units.map((unit)=>{
                        return(
                          <option value={unit._id}>
                            {unit.name}
                          </option>
                        )
                      })
                    }
                  </select>
                  <h4 className='text-2xl m-4'>Please Provide the value of following fields : </h4>
                
                <div>
                    <label htmlFor='heat_rate'>Heat Rate (Kcal/kwh)</label>
                    <br />
                    <input
                        type='text'
                        required
                        id='heat_rate'
                        name='heat_rate'
                        value={fieldData.heat_rate}
                        onChange={onChangeHandeler}
                    />
                </div>

                <br />

                <div>
                    <label htmlFor='total_aux_power_mus'>Total Aux Power Consumption-mus (Mus)</label>
                    <br />
                    <input
                        type='text'
                        required
                        id='total_aux_power_mus'
                        name="total_aux_power_mus"
                        value={fieldData.total_aux_power_mus}
                        onChange={onChangeHandeler}
                    />
                </div>
                <br />
                
                <div>
                    <label htmlFor='total_aux_power_percent'>Total Aux Power Consumption-Percentage (%)</label>
                    <br />
                    <input
                        type='text'
                        required
                        id='total_aux_power_percent'
                        name='total_aux_power_percent'
                        value={fieldData.total_aux_power_percent}
                        onChange={onChangeHandeler}
                    />
                </div>
                    <br />
                <div>
                    <label htmlFor='sp_oil_consumption_non_gen'>Sp oil consumption non-generation (ml/kwh)</label>
                    <br />
                    <input
                        type='text'
                        required
                        id='sp_oil_consumption_non_gen'
                        name='sp_oil_consumption_non_gen'
                        value={fieldData.sp_oil_consumption_non_gen}
                        onChange={onChangeHandeler}
                    />
                </div>
                    <br />
                <div>
                    <label htmlFor='sp_oil_consumption_gen'>Sp oil consumption generation (ml/kwh)</label>
                    <br />
                    <input
                        type='text'
                        required
                        id='sp_oil_consumption_gen'
                        name='sp_oil_consumption_gen'
                        value={fieldData.sp_oil_consumption_gen}
                        onChange={onChangeHandeler}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='sp_oil_consumption_total'>Sp oil consumption Total (ml/kwh)</label>
                    <br />
                    <input
                        type='text'
                        required
                        id='sp_oil_consumption_total'
                        name='sp_oil_consumption_total'
                        value={fieldData.sp_oil_consumption_total}
                        onChange={onChangeHandeler}
                    />
                </div>
                    <br />

                <div>
                    <label htmlFor='coal_lignite_gas_factor'>Coal / Lignite / Gas Factor (kg/kwh)</label>
                    <br />
                    <input
                        type='text'
                        required
                        id='coal_lignite_gas_factor'
                        name='coal_lignite_gas_factor'
                        value={fieldData.coal_lignite_gas_factor}
                        onChange={onChangeHandeler}
                    />
                </div>

                <br />

                <div>
                    <label htmlFor='capacity'>Capacity (MW)</label>
                    <br />
                    <input
                        type='text'
                        required
                        id='capacity'
                        name='capacity'
                        value={fieldData.capacity}
                        onChange={onChangeHandeler}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='generation'>Generation (Mus)</label>
                    <br />
                    <input
                        type='text'
                        id='generation'
                        required
                        name='generation'
                        value={fieldData.generation}
                        onChange={onChangeHandeler}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='plf'>plf (%)</label>
                    <br />
                    <input
                        type='text'
                        required
                        name='plf'
                        id='plf'
                        value={fieldData.plf}
                        onChange={onChangeHandeler}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='dc'>DC (MWH)</label>
                    <br />
                    <input
                        type='text'
                        required
                        id='dc'
                        name='dc'
                        value={fieldData.dc}
                        onChange={onChangeHandeler}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor='paf'>paf (%)</label>
                    <br />
                    <input
                        type='text'
                        required
                        id='paf'
                        name='paf'
                        value={fieldData.paf}
                        onChange={onChangeHandeler}
                    />
                </div>
                <button type='submit' onClick={submitHandelerManual} className='mt-5 m-auto'>Submit</button>
                </div>
            </form>
        </Box>
        </Box>
    </div>
  )
}

export default UploadDataManual