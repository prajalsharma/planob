// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>plano B</h4>
          <p>Clarity and confidence in Bitcoin education.</p>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Connect</h5>
          <ul>
            <li>Email</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} plano B. All rights reserved.
      </div>
    </footer>
  );
}
