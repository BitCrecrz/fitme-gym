import React, { Component } from "react";
import Select from "react-select";

const options = [
  { value: "default", label: "All City" },
  { value: "indore", label: "Indore" },
  { value: "delhi", label: "Delhi" },
];
const options1 = [
  { value: "default", label: "All Category" },
  { value: "gym", label: "Gym" },
  { value: "yoga", label: "Yoga" },
  { value: "zumba", label: "Zumba" },
];

const SelectForm = () => (
  <div className="container d-flex justify-content-center align-items-center py-5">
    <div className="mx-1" style={{ width: "300px" }}>
      <Select options={options}  placeholder={"Select City"} />
    </div>
    <div style={{ width: "300px" }}>
      <Select
        className="mx-1"
        options={options1}
        placeholder={"Select Category"}
      />
    </div>
    <div style={{width:"250px"}}>

      <label><i className="far fa-keyboard mx-2 my-2 fs-4 align-item-center"></i></label>
        <input className="my-2" type="text" placeholder="What are you looking for?" id="homesearch" name="column" />
    </div>
        <button className="btn btn-danger">Search</button>
  </div>
);

export default SelectForm;
