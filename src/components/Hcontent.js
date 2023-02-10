import React from "react";

const Hcontent = (props) => {
  return (
    <>
      <div className="content">
        <div className="home-text">
          <h2>{props.name}</h2>
          <h4>{props.work}</h4>
          <button>More</button>
        </div>
        <img src={props.image} alt="home-img" />
      </div>
    </>
  );
};

export default Hcontent;
