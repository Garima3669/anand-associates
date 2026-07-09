import "./Process.css";
import {
  FaComments,
  FaFolderOpen,
  FaCalculator,
  FaCheckCircle,
} from "react-icons/fa";

const process = [
  {
    icon: <FaComments />,
    title: "Free Consultation",
    desc: "Understand your financial requirements and provide the best solution.",
  },
  {
    icon: <FaFolderOpen />,
    title: "Document Collection",
    desc: "Collect the necessary documents securely through online or offline channels.",
  },
  {
    icon: <FaCalculator />,
    title: "Processing & Filing",
    desc: "Our experts prepare and verify your returns with complete accuracy.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Completion",
    desc: "Receive confirmation, reports and ongoing compliance support.",
  },
];

const Process = () => {
  return (
    <section className="process section" id="process">

      <div className="container">

        <div className="section-title">

          <span>Our Process</span>

          <h2>Simple, Transparent & Efficient</h2>

          <p>
            We follow a streamlined process to ensure your accounting and tax
            work is completed accurately and on time.
          </p>

        </div>

        <div className="process-grid">

          {process.map((item, index) => (
            <div className="process-card" key={index}>

              <div className="process-number">
                {index + 1}
              </div>

              <div className="process-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Process;