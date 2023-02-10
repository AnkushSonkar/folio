import React from "react";

const Hcontent = (props) => {
  return (
    <>
      <div className="content">
        <div className="home-text">
          <h2>{props.name}</h2>
          <h4>{props.work}</h4>
          <button id="home-btn">Explore<i class="fa-solid fa-circle-down"></i></button>
        </div>
        <div className="home-img">
          <img src={props.image} alt="home-img" />
        </div>
      </div>
    </>
  );
};

export default Hcontent;
