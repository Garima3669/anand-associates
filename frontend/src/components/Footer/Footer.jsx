import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Company */}

          <div className="footer-col">

            <div className="footer-logo">

              <img src={logo} alt="Logo" />

              <div>

                <h2>Anand & Associates</h2>

                <span>Chartered Accountants</span>

              </div>

            </div>

            <p className="footer-about">
              Professional accounting, taxation, GST, audit and
              financial advisory services for individuals,
              startups and businesses.
            </p>

            <div className="social-icons">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="footer-col">

            <h3>Quick Links</h3>

            <ul>

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About</Link></li>

              <li><Link to="/services">Services</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Services */}

          <div className="footer-col">

            <h3>Services</h3>

            <ul>

              <li>Income Tax Return</li>

              <li>GST Registration</li>

              <li>Accounting</li>

              <li>Audit & Compliance</li>

              <li>Business Registration</li>

            </ul>

          </div>

          {/* Contact */}

          <div className="footer-col">

            <h3>Contact</h3>

            <ul className="contact-list">

              <li>

                <FaPhoneAlt />

                <span>+91 XXXXX XXXXX</span>

              </li>

              <li>

                <FaEnvelope />

                <span>info@anandassociates.com</span>

              </li>

              <li>

                <FaMapMarkerAlt />

                <span>Kaithal, Haryana, India</span>

              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <div className="container footer-bottom-content">

          <p>
            © {new Date().getFullYear()} Anand & Associates.
            All Rights Reserved.
          </p>

          <div className="footer-policy">

            <Link to="/privacy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;