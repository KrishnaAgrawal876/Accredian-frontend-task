import React from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import HowItWorks from "./components/HowItWorks";
// import Benefits from "./components/Benefits";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <HowItWorks />
      {/* <Benefits /> */}
      <FAQs />
      <Footer />
    </div>
  );
};

export default App;
