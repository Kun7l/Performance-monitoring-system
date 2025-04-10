import React from "react";
import SideBar from "../components/SideBar";
import { alignProperty } from "@mui/material/styles/cssUtils";
const Home = () => {
  return (
    <div>
      <SideBar />
      <div className="container">
        <div className="body-container">
          <h1>The financial OS for your business.</h1>
          <p>File manage</p>
          <button>Enter</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
