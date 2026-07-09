import "./Services.css";

import {
  FaCalculator,
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaBuilding,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCalculator />,
    title: "Income Tax Return",
    description:
      "Accurate and hassle-free ITR filing for salaried individuals, professionals and businesses.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "GST Services",
    description:
      "GST registration, return filing, compliance and expert GST consultancy.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Accounting",
    description:
      "Bookkeeping, financial statements, payroll and day-to-day accounting solutions.",
  },
  {
    icon: <FaBuilding />,
    title: "Business Registration",
    description:
      "Private Limited, LLP, Partnership, MSME, Startup India and other registrations.",
  },
  {
    icon: <FaChartLine />,
    title: "Audit & Compliance",
    description:
      "Tax audits, ROC filings, statutory compliance and business reporting.",
  },
  {
    icon: <FaUserTie />,
    title: "Financial Advisory",
    description:
      "Professional financial planning, taxation strategy and business consulting.",
  },
];

const Services = () => {
  return (
    <section className="services section" id="services">

      <div className="container">

        <div className="section-title">

          <span>Our Services</span>

          <h2>
            Comprehensive Accounting &
            Tax Solutions
          </h2>

          <p>
            We provide complete financial, taxation and compliance services
            tailored to individuals, startups and growing businesses.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>
                Learn More →
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;