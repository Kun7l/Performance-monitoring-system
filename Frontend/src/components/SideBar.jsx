import React from "react";
import { Link } from "react-router-dom";
import "../components/css/sidebar.css";
import home from "../assests/home.svg";
const SideBar = () => {
  return (
    <div class="sidebar-div">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          class="hidden md:block"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M14.347 0a14.931 14.931 0 0 0-6.282 1.68l6.282 10.88V0Zm0 17.443L8.067 28.32a14.931 14.931 0 0 0 6.28 1.68V17.443ZM15.652 30V17.432l6.286 10.887a14.932 14.932 0 0 1-6.286 1.68Zm0-17.43V0c2.261.096 4.393.693 6.287 1.682L15.652 12.57ZM2.336 23.067l10.884-6.284-6.284 10.884a15.093 15.093 0 0 1-4.6-4.6Zm25.33-16.132-10.88 6.281 6.283-10.88a15.093 15.093 0 0 1 4.598 4.599ZM2.335 6.934a15.094 15.094 0 0 1 4.6-4.6l6.284 10.884L2.335 6.934Zm-.654 1.13a14.932 14.932 0 0 0-1.68 6.286h12.567L1.681 8.064Zm0 13.873a14.932 14.932 0 0 1-1.68-6.282h12.562L1.682 21.937Zm15.754-7.587H30a14.932 14.932 0 0 0-1.68-6.285L17.435 14.35Zm10.885 7.586-10.88-6.28H30a14.932 14.932 0 0 1-1.68 6.28Zm-11.534-5.151 6.281 10.88a15.094 15.094 0 0 0 4.599-4.599l-10.88-6.281Z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>GSECL</span>
      </div>
      <div className="link-div">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/upload-data"}>Upload Data</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>DashBoard</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
