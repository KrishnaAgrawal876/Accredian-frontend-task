import React from "react";
import "./MainSection.css";
import learnImage from "../learn-and-earn.png";

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="main-content">
        <ul className="inner-nav">
          <li className="inner-items"> Refer </li>
          <li className="inner-items"> Benefits </li>
          <li className="inner-items"> FAQs </li>
          <li className="inner-items"> Support </li>
        </ul>
      </div>
      <img src={learnImage} alt="Refer and Earn" />
    </section>
  );
};

export default MainSection;
