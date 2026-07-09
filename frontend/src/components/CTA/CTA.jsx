import "./CTA.css";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="cta">

      <div className="container">

        <div className="cta-box">

          <div className="cta-content">

            <span>Need Professional Assistance?</span>

            <h2>
              Let's Simplify Your Accounting &
              Tax Compliance
            </h2>

            <p>
              Whether you're filing an Income Tax Return,
              managing GST, registering a business or
              maintaining accounts, Anand & Associates is
              here to help with reliable and timely services.
            </p>

          </div>

          <div className="cta-buttons">

            <button className="secondary-btn">
              <FaPhoneAlt />
              Call Now
            </button>

            <button className="primary-btn white-btn">
              Book Consultation
              <FaArrowRight />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;