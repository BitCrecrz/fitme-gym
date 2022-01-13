import React from "react";
import {
   Link
} from "react-router-dom";

const Alert = () => {
  return (
    
    <div style={{ backgroundColor:"#4A4A4A", color:"white", padding:"5px", fontSize:"22px", fontFamily:"Gill Sans",textAlign:"center" }} >
    OUR FITNESS CENTRES ARE TAKING <Link to="covid-precautions" style={{ color:"aqua" , textDecoration:"none"}}><span>COVID-19 Precautions.</span></Link>  BUY YOUR MEMBERSHIPS NOW
    </div>
    
  );
};

export default Alert;
