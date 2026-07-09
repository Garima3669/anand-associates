import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <ScrollLink
          to="hero"
          className="logo"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Anand & Associates"
            className="logo-img"
          />

          <div className="logo-content">
            <h2>Anand & Associates</h2>
            <span>Accounting • Tax • GST</span>
          </div>
        </ScrollLink>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <ScrollLink
            to="hero"
            activeClass="active"
            onClick={closeMenu}
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="services"
            activeClass="active"
            onClick={closeMenu}
          >
            Services
          </ScrollLink>

          <ScrollLink
            to="why-choose"
            activeClass="active"
            onClick={closeMenu}
          >
            Why Choose Us
          </ScrollLink>

          <ScrollLink
            to="awards"
            activeClass="active"
            onClick={closeMenu}
          >
            Awards
          </ScrollLink>

          <ScrollLink
            to="process"
            activeClass="active"
            onClick={closeMenu}
          >
            Process
          </ScrollLink>

          <ScrollLink
            to="contact"
            activeClass="active"
            onClick={closeMenu}
          >
            Contact
          </ScrollLink>

          <ScrollLink
            to="contact"
            onClick={closeMenu}
          >
            <button className="primary-btn navbar-btn">
              Book Consultation
            </button>
          </ScrollLink>

        </nav>

        {/* Mobile Menu */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
};

export default Navbar;