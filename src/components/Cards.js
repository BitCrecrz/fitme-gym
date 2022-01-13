import React, { useState } from "react";
import akhada from "./slide/Akhada gym.jpg";
import Sixpack from "./slide/Sixpack gym.jpg";
import BodyM from "./slide/BodyM.jpg";
import bsf from "./slide/bsf.jpg";
import alpha from "./slide/alpha.jpg";
import Nb from "./slide/Nb.jpg";
import './Cards.css';

const Cards = () => {

   

    function hoverin(event) {
        event.target.style.color='red';
    }
    function hoverout(event) {
        event.target.style.color='white';
    }


  return (
      <div className="container">

    <div className="d-inline-flex flex-row flex-wrap">
      {/* cards */}
      <div
        className="card bg-dark text-white"
        >
        <img
          src={akhada}
          className="card-img"
          alt="..."
          />
        <div className="card-img-overlay" >
          <h5 className="card-title"
        //   onMouseEnter={hoverin}
        //   onMouseLeave={hoverout}
          >Akhada The Right Track</h5>
          <p className="card-text">
          <i className="fas fa-map-marker-alt mx-1" style={{color:"red"}}></i>
            5/B, Press Complex, Behind Dainik Bhaskar AB Road -
          </p>
        </div>
      </div>
      
      <div
        className="card bg-dark text-white bg-opacity-75"
        >
        <img
          src={Sixpack}
          className="card-img"
          alt="..."
          />
        <div className="card-img-overlay" >
          <h5 className="card-title">Six Pack Fitness Club</h5>
          <p className="card-text">
            <i className="fas fa-map-marker-alt mx-1" style={{color:"red"}}></i>
            64 Srinagar Opposite HDFC Bank, Khajrana Main Rd -
          </p>
        </div>
      </div>
      <div
        className="card bg-dark text-white "
        >
        <img
          src={BodyM}
          className="card-img"
          alt="..."
          />
        <div className="card-img-overlay" >
          <h5 className="card-title">Body Mechanics</h5>
          <p className="card-text">
            <i className="fas fa-map-marker-alt mx-1" style={{color:"red"}}></i>
            12-E Tulsi Nagar -
          </p>
        </div>
      </div>
      <div
        className="card bg-dark text-white "
        >
        <img
          src={bsf}
          className="card-img"
          alt="..."
          />
        <div className="card-img-overlay" >
          <h5 className="card-title">BSF Be Strong Fitness Gym</h5>
          <p className="card-text">
            <i className="fas fa-map-marker-alt mx-1" style={{color:"red"}}></i>
            76, Savindnagar, Swami Vivekanand Nagar -
          </p>
        </div>
      </div>
      <div
        className="card bg-dark text-white "
        >
        <img
          src={alpha}
          className="card-img"
          alt="..."
          />
        <div className="card-img-overlay" >
          <h5 className="card-title">Alpha-Gyms in Indore </h5>
          <p className="card-text">
            <i className="fas fa-map-marker-alt mx-1" style={{color:"red"}}></i>
            74-C DF36, Scheme no. 74 Vijay Nagar -
          </p>
        </div>
      </div>
      <div
        className="card bg-dark text-white "
        >
        <img
          src={Nb}
          className="card-img"
          alt="..."
          />
        <div className="card-img-overlay" >
          <h5 className="card-title" >NB Indore Gym</h5>
          <p className="card-text">
            <i className="fas fa-map-marker-alt mx-1" style={{color:"red"}}></i>
            22, Regency Palace Opposite Hotel marriott, Scheme No: 54, Vijay Nagar -
          </p>
        </div>
      </div>
    </div>
      
    <div className="view-more">
    <button type="button" className="btn btn-outline-danger">View More</button>
    </div>
            </div>
  );
};

export default Cards;
