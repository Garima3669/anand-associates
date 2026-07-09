import "./Hero.css";
import heroImage from "../../assets/hero.png";

import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">

        {/* Left */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">
            Trusted Accounting & Tax Consultants
          </span>

          <h1>
            Simplify Your
            <span> Tax & Accounting </span>
            Journey With Confidence
          </h1>

          <p>
            We provide professional Accounting, GST Filing,
            Income Tax Return, Bookkeeping, Company Registration
            and Financial Advisory services to individuals,
            startups and businesses across India.
          </p>

          <div className="hero-btns">

            <button className="primary-btn">
              Book Consultation
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              <FaPhoneAlt />
              Contact Us
            </button>

          </div>

          <div className="hero-stats">

            <div className="hero-stat">
              <h3>1500+</h3>
              <span>ITR Filed</span>
            </div>

            <div className="hero-stat">
              <h3>600+</h3>
              <span>Happy Clients</span>
            </div>

            <div className="hero-stat">
              <h3>10+</h3>
              <span>Years Experience</span>
            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={heroImage} alt="Accounting Services" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;