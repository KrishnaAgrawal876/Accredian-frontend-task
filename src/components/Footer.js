import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section programs">
          <h3>Programs</h3>
          <ul>
            <li>Data Science & AI</li>
            <li>Product Management</li>
            <li>Business Analytics</li>
            <li>Digital Transformation</li>
            <li>Business Management</li>
            <li>Project Management</li>
            <li>Strategy & Leadership</li>
            <li>Senior Management</li>
            <li>Fintech</li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email us for Data Science Queries: dsinquiries@accredian.com</p>
          <p>
            Email us for Product Management Queries: pmqueries@accredian.com
          </p>
          <p>Call us: 1800-123-4567 (9 AM - 7 PM)</p>
          <p>Product Management Helpline: 1800-765-4321</p>
          <p>WhatsApp: 123-456-7890</p>
          <p>Office Address: 123, 2nd Floor, X Building, Y Area, Z City, ABC</p>
        </div>
        <div className="footer-section follow-us">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div className="footer-section accredian">
          <h3>Accredian</h3>
          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Admission Policy</li>
            <li>Referral Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Mentor FAQs</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;

{
  /*
  command for Font Awesome =>
npm install --save @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/fontawesome-svg-core
*/
}
