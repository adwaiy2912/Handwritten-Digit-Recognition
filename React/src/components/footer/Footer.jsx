import "./Footer.css";
import React from "react";
import {
   BsFacebook,
   BsGithub,
   BsLinkedin,
   BsYoutube,
   BsDiscord,
   BsWhatsapp,
} from "react-icons/bs";

const Footer = () => {
   return (
      <footer className="footer-container">
         <div className="footer-links">
            <div className="footer-section">
               <h4>About</h4>
               <ul>
                  <li>
                     <a href="#">Project</a>
                  </li>
                  <li>
                     <a href="#">Our Team</a>
                  </li>
                  <li>
                     <a href="#">Adwaiy Singh</a>
                  </li>
               </ul>
            </div>
            <div className="footer-section">
               <h4>Models</h4>
               <ul className="model-list">
                  <li>
                     <a href="#">K-Nearest</a>
                  </li>
                  <li>
                     <a href="#">Support Vector</a>
                  </li>
                  <li>
                     <a href="#">XGBoost</a>
                  </li>
                  <li>
                     <a href="#">Naive Bayes</a>
                  </li>
                  <li>
                     <a href="#">Random Forest</a>
                  </li>
                  <li>
                     <a href="#">Voting Classifier</a>
                  </li>
               </ul>
            </div>
            <div className="footer-section">
               <h4>Contact Us</h4>
               <ul>
                  <li>
                     <a href="#">Email Me</a>
                  </li>
                  <li>
                     <a href="#">Support Center</a>
                  </li>
                  <li>
                     <a href="#">Request a Demo</a>
                  </li>
               </ul>
            </div>
            <div className="footer-section">
               <h4>Support</h4>
               <ul>
                  <li>
                     <a href="#">FAQ</a>
                  </li>
                  <li>
                     <a href="#">Community</a>
                  </li>
                  <li>
                     <a href="#">Documentation</a>
                  </li>
               </ul>
            </div>
         </div>

         <div className="footer-divider"></div>

         <div className="footer-bottom">
            <div className="footer-brand">
               <img
                  src="/icon.jpg"
                  alt="Flowbite Logo"
                  className="footer-logo"
               />
               <p className="footer-copyright">&copy; 2025 Adwaiy Singh</p>
            </div>
            <div className="footer-social-icons">
               <a href="#" className="footer-icon">
                  <BsDiscord />
               </a>
               <a href="#" className="footer-icon">
                  <BsFacebook />
               </a>
               <a href="#" className="footer-icon">
                  <BsGithub />
               </a>
               <a href="#" className="footer-icon">
                  <BsLinkedin />
               </a>
               <a href="#" className="footer-icon">
                  <BsWhatsapp />
               </a>
               <a href="#" className="footer-icon">
                  <BsYoutube />
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
