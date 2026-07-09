import "./WhyChoose.css";

import officeImage from "../../assets/office.png";

import {
  FaCheckCircle,
  FaAward,
  FaClock,
  FaUserShield,
} from "react-icons/fa";

const features = [
  "Expert Chartered Accounting Services",
  "Income Tax Return Filing",
  "GST Registration & Compliance",
  "Business Registration",
  "Dedicated Client Support",
  "100% Confidential Data",
];

const WhyChoose = () => {
  return (
    <section className="why section" id="why-choose">
      <div className="container">

        {/* ================= TOP ================= */}

        <div className="why-top">

          {/* LEFT IMAGE */}

          <div className="why-image">
            <img src={officeImage} alt="Office" />
          </div>

          {/* RIGHT CONTENT */}

          <div className="why-content">

            <span className="section-badge">
              Why Choose Us
            </span>

            <h2>
              Trusted Financial Partner For
              Individuals & Businesses
            </h2>

            <p>
              Anand & Associates offers professional accounting,
              taxation, GST, bookkeeping and business compliance
              services with complete transparency, accuracy and
              timely support.
            </p>

            <div className="why-features">

              {features.map((item, index) => (
                <div className="feature-item" key={index}>
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* ================= CARDS ================= */}

        <div className="why-cards">

          <div className="mini-card">

            <FaAward />

            <h3>10+</h3>

            <p>Years Experience</p>

          </div>

          <div className="mini-card">

            <FaClock />

            <h3>24/7</h3>

            <p>Quick Support</p>

          </div>

          <div className="mini-card">

            <FaUserShield />

            <h3>100%</h3>

            <p>Secure Data</p>

          </div>

          <div className="mini-card">

            <FaCheckCircle />

            <h3>1500+</h3>

            <p>ITR Filed</p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;