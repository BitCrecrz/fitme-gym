import React from "react";
import Cards from "./Cards";
import Slide from "./Slide";
import SelectForm from "./SelectForm";

const Homepage = () => {
  return (
    <>
    <Slide/>
<SelectForm/>
    <div
      className="container-fluid"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        fontFamily: "sans-serif",
      }}
      >
      <h1
        style={{
          textAlign: "center",
          fontFamily: '"Bebas Neue"',
          fontSize: "55px",
          paddingTop: "100px",
          color:"#4E556A"
        }}
        >
        Best Workouts Gyms Near You
      </h1>
      <div className="container fw-light py-5 text-wrap" style={{width:"50rem", textAlign:"center"}}>
      <p>EXERCISING REGULARLY IS THE SINGLE MOST IMPORTANT THING YOU CAN DO FOR YOUR HEALTH,</p>
      </div>
      <Cards/>
      <div className="container-fluid" style={{backgroundColor:"#f6f6f6", padding:"0", margin:"0"}}>

        <h4>Fit Me Gym Offer</h4>
        <h2>Offer</h2>
      </div>
    </div>
        </>
  );
};

export default Homepage;
