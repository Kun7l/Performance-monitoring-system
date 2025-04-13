import React, { useState } from "react";
import "../pages/css/register.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user.slice.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notify = (message) => toast(message);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // console.log(email , password , role);
      const response = await axios.post(
        "http://localhost:3000/user/login",
        { email, password, role },
        { withCredentials: true }
      );

      localStorage.setItem("token", response.data.token);
      dispatch(setUser(response.data.user));
      navigate("/");
      notify(response.data.message);
    } catch (error) {
      notify(error?.response?.data?.message);
    }
  };
  return (
    <div className="login-container">
      <div className="body-container">
        <form className="login-form" onSubmit={submitHandler}>
          <h1>Login</h1>
          <div className={"formGroup"}>
            <label className={"label"}>Email</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={"input"}
              required
            />
          </div>
          <div className={"formGroup"}>
            <label className={"label"}>Password</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={"input"}
              required
            />
          </div>
          <div className={"formGroup"}>
            <label className={"label"}>Please Provide Role</label>
            <br />
            <label>
              <input
                style={{ margin: "5px 2px" }}
                type="radio"
                value={"higher authority"}
                checked={role === "higher authority"}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
              Higher Authority
            </label>
            <br />
            <label>
              <input
                style={{ margin: "5px 2px" }}
                type="radio"
                value={"plant operator"}
                checked={role === "plant operator"}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
              Plant Operator
            </label>
          </div>
          <div className="formGroup" style={{ textAlign: "center" }}>
            <button className="submit login-button" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
