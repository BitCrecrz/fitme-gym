import React from "react";
import Slide from "./Slide";

const Homepage = () => {
  return (
    <>
      <Slide />

      <div className="container" style={{ width: "1024px", height: "101px" }}>
        <div
          className="main-search-input-tabs tabs-act fl-wrap"
          style={{
            marginTop: "15px",
            background: "#e2e2e2",
            paddingBottom: "20px",
            width: "1024px",
            height: "93px",
          }}
        >
          <div
            className="tabs-container f1-wrap"
            style={{
              background: "#fff",
              borderRadius: "6px",
              boxShadow: "0px 0px 0px 8px rgba(255,255,255,0.2)",
            }}
          >
            <div className="tab" style={{ width: "100%", float: "left" }}>
              <div
                className="tab1"
                style={{
                  width: "1024px",
                  height: "66px",
                  float: "left",
                  display: "block",
                }}
              >
                <div
                  className="f1-wrap"
                  style={{
                    padding: "8px 180px 8px 0",
                    width: "100%",
                    display: "block",
                    float: "left",
                  }}
                >
                  <div
                    className="city"
                    style={{
                      float: "left",
                      width: "33.3%",
                      boxSizing: "border-box",
                      borderRight: "1px solid #eee",
                      height: "50px",
                      padding: "0 5px",
                      position: "relative",
                    }}
                  >
                    <select
                      data-placeholder="City/Location"
                      name="city"
                      className="chosen-select no-search-select"
                      style={{display: "none",}}
                    >
                      <option value="">All Cities</option>
                      <option value="Indore">Indore</option>
                    </select>
                   <div className="nice-select chosen-select no-search-select" tabIndex={0} style={{color: '#666',
fontSize: '12px',
fontWeight: '100',
float: 'left',
width: '100%',
border: 'none',
height: '50px',
zIndex: '100',
background: '#fff',
lineHeight: '50px'}}>
                     <span className="current">All City</span>
                     <ul className="list" style={{marginTop: '5px',
top: '100%',
borderTop: '0',
borderRadius: '0 0 5px 5px',
maxHeight: '210px',
overflowY: 'scroll', padding:'0'}}>
  <li className="option-selected-focus"  style={{cursor: 'pointer',
fontWeight: '400',
lineHeight: '40px',
listStyle: 'none',
minHeight: '40px',
outline: '0',
width: '100%',
paddingLeft: '18px',
paddingRight: '29px',
textAlign: 'left',
WebkitTransition: 'all .2s',
transition: 'all .2s',background: '#ed7700',color: '#fff'}}>All City</li>
  <li className="option"  style={{cursor: 'pointer',
  fontSize:'12px',
fontWeight: '400',
lineHeight: '40px',
listStyle: 'none',
minHeight: '40px',
outline: '0',
width: '100%',
paddingLeft: '18px',
paddingRight: '29px',
textAlign: 'left',
WebkitTransition: 'all .2s',
transition: 'all .2s',background: '#fff',color: '#666'}}>Indore</li>

                     </ul>
                   </div>
                  </div>
                  <select
                    className="d-inline-flex p-2 bd-highlight mx-2 "
                    aria-label="Default select example"
                    defaultValue={1}
                  >
                    <option value="1">All Category</option>
                    <option value="2">Gym</option>
                    <option value="3">Zumba</option>
                    <option value="4">Yoga</option>
                  </select>
                  <label>
                    <i className="far fa-keyboard mx-2"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    id="homesearch"
                    name="column"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
