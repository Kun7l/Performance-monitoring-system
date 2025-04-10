import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Toolbar } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import UploadDataManual from "../components/UploadDataManual.jsx";

import axios from "axios";

import SideBar from "../components/SideBar";

function UploadData() {
  const navigate = useNavigate();
  // const [engineerName, setEngineerName] = useState("");
  const [unitId, setUnitId] = useState("");
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [units , setUnits] = useState([]);
  const token = localStorage.getItem("token");
  console.log(token);
  
  const notify = (message) => {
    toast.error(message, { position: "top-center" });
  };

  useEffect(()=>{
    const fetchUnitsByToken = async () =>{
      try{
        const res = await axios.get("http://localhost:3000/unit/user/get" , {
          headers : {
            Authorization : `Bearer ${token}`,
          },
          withCredentials : true,
        });
        // console.log(res?.data?.units);
        setUnits(res?.data?.units);
      }
      catch(error){
        console.log(error);
        notify(error?.response?.data?.message);
      }
    }
    fetchUnitsByToken();
  } , [token]);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      notify("Please select a file");
      return;
    }
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("unitId" , unitId);
    
    try {
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      setIsUploading(false);

      toast.success("File uploaded successfully", { position: "top-center" });
      console.log(response.data);
    } catch (error) {
      setIsUploading(false);
      notify(error?.response?.data?.message);
    }
  };

  return (
    <>
      <SideBar />
      <div className="container">
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
              <div
                className="upload-div"
                style={{ display: "flex", width: "100%" }}
              >
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
                </div>
              </div>
              <div className="upload-div">
                <div>
                  {isUploading ? (
                    <div className="loading-div"></div>
                  ) : (
                    <div className="flex items-center justify-center w-full mt-10">
                      <label
                        htmlFor="dropzone-file"
                        className=" dropzone flex flex-col items-center justify-center w-full h-64 border-1 rounded-lg"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Excel files only
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          accept=".xlsx,.xls"
                          onChange={(e) => {
                            setFile(e.target.files[0]);
                          }}
                        />
                      </label>
                    </div>
                  )}
                  <div
                    className="upload-button-div"
                    style={{ width: "100%", margin: "30px 0 0 0" }}
                  >
                    <Button
                      onClick={handleUpload}
                      className="button upload-button"
                      component="label"
                      variant="contained"
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload Report
                    </Button>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </div>
        <hr className="mt-8"/>
        <h4 className="text-center text-2xl mb-8">You can also upload data manualy without uploading excel file</h4>
        <UploadDataManual units={units}/>
      </div>
    </>
  );
}

export default UploadData;
