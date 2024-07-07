import React, { useState } from "react";
import "./HowItWorks.css";
import HowDoRefer from "../how do i refer.png";

const HowItWorks = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    program: "",
  });

  const handleRefer = () => {
    setFormVisible(true);
    // setCurrentVoter(null);
  };

  const handleClose = () => {
    setFormVisible(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        handleClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section className="how-it-works">
      <img src={HowDoRefer} alt="How to Refer" />
      <h2>What Are The Referral Benefits?</h2>
      <div className="table-container">
        <div className="table-sidebar">
          <ul>
            <li>ALL PROGRAMS</li>
            <li>PRODUCT MANAGEMENT</li>
            <li>STRATEGY & LEADERSHIP</li>
            <li>BUSINESS MANAGEMENT</li>
            <li>FINTECH</li>
            <li>SENIOR MANAGEMENT</li>
            <li>DATA SCIENCE</li>
            <li>DIGITAL TRANSFORMATION</li>
            <li>BUSINESS ANALYTICS</li>
          </ul>
        </div>
        <div className="table-content">
          <table>
            <thead>
              <tr>
                <th>Programs</th>
                <th>Referrer Bonus</th>
                <th>Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Professional Certificate Program in Product Management</td>
                <td>₹ 7,000</td>
                <td>₹ 9,000</td>
              </tr>
              <tr>
                <td>PG Certificate Program in Strategic Product Management</td>
                <td>₹ 9,000</td>
                <td>₹ 11,000</td>
              </tr>
              <tr>
                <td>Executive Program in Data Driven Product Management</td>
                <td>₹ 10,000</td>
                <td>₹ 10,000</td>
              </tr>
              <tr>
                <td>
                  Executive Program in Product Management and Digital
                  Transformation
                </td>
                <td>₹ 10,000</td>
                <td>₹ 10,000</td>
              </tr>
              <tr>
                <td>Executive Program in Product Management</td>
                <td>₹ 10,000</td>
                <td>₹ 10,000</td>
              </tr>
              <tr>
                <td>Advanced Certification in Product Management</td>
                <td>₹ 10,000</td>
                <td>₹ 10,000</td>
              </tr>
              <tr>
                <td>
                  Executive Program in Product Management and Project Management
                </td>
                <td>₹ 10,000</td>
                <td>₹ 10,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="button-container">
        <button className="refer-button" onClick={handleRefer}>
          Refer Now
        </button>
      </div>
      {formVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h2>Referral Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="referrerName">Referrer Name:</label>
                <input
                  type="text"
                  id="referrerName"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="referrerEmail">Referrer Email:</label>
                <input
                  type="email"
                  id="referrerEmail"
                  name="referrerEmail"
                  value={formData.referrerEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="refereeName">Referee Name:</label>
                <input
                  type="text"
                  id="refereeName"
                  name="refereeName"
                  value={formData.refereeName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="refereeEmail">Referee Email:</label>
                <input
                  type="email"
                  id="refereeEmail"
                  name="refereeEmail"
                  value={formData.refereeEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="program">Program:</label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
                  <option value="Product Management">Product Management</option>
                  <option value="Strategy & Leadership">
                    Strategy & Leadership
                  </option>
                  <option value="Business Management">
                    Business Management
                  </option>
                  <option value="Fintech">Fintech</option>
                  <option value="Senior Management">Senior Management</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Digital Transformation">
                    Digital Transformation
                  </option>
                  <option value="Business Analytics">Business Analytics</option>
                </select>
              </div>
              <div className="form-group">
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HowItWorks;
