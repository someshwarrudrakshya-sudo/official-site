import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import contactImg from "../assets/contact.avif";

import "./css/Footer.css";

export default function Footer() {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="Footer-container">
        <div className="footer-grid">
          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/download">Download</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Our Schemes */}
          <div className="footer-col">
            <h4>Our Schemes</h4>
            <ul>
              <li>
                <Link to="/schemes/savings">Savings Accounts</Link>
              </li>
              <li>
                <Link to="/schemes/loans">Affordable Loans</Link>
              </li>
              <li>
                <Link to="/schemes/daily-savings">Daily Savings</Link>
              </li>
              <li>
                <Link to="/schemes/withdrawals">Easy Withdrawals</Link>
              </li>
              <li>
                <Link to="/schemes/fast-processing">Fast Processing</Link>
              </li>
            </ul>
          </div>

          {/* Membership */}
          <div className="footer-col">
            <h4>Useful Link</h4>
            <ul>
              <li>
                <Link url="https://www.nefscun.org.np/">
                  नेफ्स्कुन (NEFSCUM)
                </Link>
              </li>
              <li>
                <Link url="https://ncfnepal.com.np/">
                  राष्ट्रिय सहकरी बैंक (NCBL)
                </Link>
              </li>
              <li>
                <Link url="https://www.deoc.gov.np/">सहकारी विभाग</Link>
              </li>
              <li>
                <Link url="https://www.ncra.gov.np/">
                  राष्ट्रिय सहकारी नियमन प्राधिकरण
                </Link>
              </li>
              <li>
                <Link url="https://goaml.fiu.nrb.org.np/PRD/Home">
                  सम्पती सुद्दिकरण (goAML)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Person */}
          <div className="footer-col contact-person">
            <h4>Contact Person</h4>
            <img
              src={contactImg}
              alt="Contact Person"
              className="contact-img"
            />
            <h4>शंकर साह</h4>
            <p>सम्पर्क अधिकारी</p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +977-9817377572 <br />
              +977-9842146148
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>
            &copy; 2023 - {currentYear} Someshwar Rudrakshya Saving & Credit
            Cooperative Ltd. All Rights Reserved. | Developed by{" "}
            <a
              href="https://prabhat.info.np"
              target="_blank"
              rel="noopener noreferrer"
              className="dev-link"
            >
              Prabhat.info.np
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
