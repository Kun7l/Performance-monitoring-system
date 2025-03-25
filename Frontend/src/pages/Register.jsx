import React , {useEffect, useState} from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import "../pages/css/register.css";

const Register = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [unitId , setUnitId] = useState("");
  const [units , setUnits] = useState([]);

  const notify = (message) => toast(message);

  const submitHandler= async (e) =>{
    e.preventDefault();
    console.log(email , password , unitId , units);
    try{
      const response = await axios.post(
        "http://localhost:3000/user/register",
        {
          email: email,
          password : password,
          role : "plant operator",
          plantId : "67e2363a57c76a03f40561a9",
          unitId : unitId,
        },
        { withCredentials: true }
      );
      notify(response?.data?.message);
      setEmail("");
      setPassword("");
      setUnitId("");
    }
    catch(error){
      notify(error?.response?.data?.message);
    }
  }

  useEffect(()=>{
    const fetchUnit = async () =>{
      try{
        const res = await axios.get("http://localhost:3000/unit/get" , { withCredentials: true });
        setUnits(res.data.units);
      }
      catch(error){
        notify(error?.response?.data?.message);
      }
    }
    fetchUnit();
  } , [])

  return (
    <div className="register-page">
      <form className={"form"} onSubmit={submitHandler}>
        <h2 className={"header"}>Register Plant Operator</h2>
        <div className={"formGroup"}>
            <label className={"label"}>Email</label>
            <br />
            <input
              type="email"
              className={"input"}
              value = {email}
              onChange={(e) => {setEmail(e.target.value)}}
              required
            />
        </div>
        <div className={"formGroup"}>
            <label className={"label"}>Password</label>
            <br />
            <input
              type="password"
              className={"input"}
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              required
            />
        </div>
        <div className={"formGroup"}>
          <label className={"label"}>Please Select Unit</label>
          <br />
          <select id="unitID" value={unitId} onChange={(e)=>{setUnitId(e.target.value)}}>
            <option value="">Select an option</option>
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

        <div className={"formGroup"}>
          <button className = {"submit"} type='submit'>Create Account</button>
        </div>

      </form>
    </div>
  )
}

export default Register