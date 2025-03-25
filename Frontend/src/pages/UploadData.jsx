import React from "react";
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

import axios from "axios";
import SideBar from "../components/SideBar";
import LoadingBar from "../components/LoadingBar";

function UploadData() {
  const navigate = useNavigate();
  const [engineerName, setEngineerName] = useState("");
  const [shift, setShift] = useState("");
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const notify = (message) => {
    toast.error(message, { position: "top-center" });
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      notify("Please select a file");
      return;
    }

    if (engineerName.trim() === "") {
      notify("Please Enter Engineer Name");
      return;
    }
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("engineer_name", engineerName);
    formData.append("shift", shift);
    

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
      <Box sx={{ display: "flex", width: "100%", height: "100vh" }}>
        <SideBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Toolbar />
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
              <div>
                <InputLabel variant="standard" htmlFor="outlined-required">
                  Engineer Name
                </InputLabel>
                <TextField
                  required
                  id="outlined-required"
                  label="Engineer Name"
                  className="textField"
                  value={engineerName}
                  onChange={(e) => {
                    setEngineerName(e.target.value);
                  }}
                />
              </div>
              <div>
                <InputLabel
                  variant="standard"
                  htmlFor="demo-simple-select-label"
                >
                  Shift
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="textField"
                  sx={{ width: "45%", ml: 1, mt: 1 }}
                  value={shift}
                  onChange={(e) => {
                    setShift(e.target.value);
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Shift 1"}>Shift 1</MenuItem>
                  <MenuItem value={"Shift 2"}>Shift 2</MenuItem>
                  <MenuItem value={"Shift 3"}>Shift 3</MenuItem>
                  <MenuItem value={"Shift 4"}>Shift 4</MenuItem>
                </Select>
              </div>
            </div>
            <div className="upload-div">
              <div>
                {isUploading ? (
                  <div className="loading-div">
                    <LoadingBar />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full mt-10">
                    <label
                      htmlFor="dropzone-file"
                      className=" dropzone flex flex-col items-center justify-center w-full h-64 border-1 rounded-lg"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
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
                    className="upload-button"
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
      </Box>
    </>
  );
}

export default UploadData;
