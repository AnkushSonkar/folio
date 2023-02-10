import React from "react";
import Hcontent from "../components/Hcontent";
import Navbar from "../components/Navbar";
import img from "../assets/img.jpg"

const Home = () => {
  return (
    <>
      <div className="home-section">
        <Hcontent name="Ankush Sonkar" work="Web Developer & UX/UI Designer" image={img}/>
        <Navbar />
      </div>
    </>
  );
};

export default Home;
