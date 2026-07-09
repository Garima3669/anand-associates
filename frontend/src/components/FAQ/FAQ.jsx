import { useState } from "react";
import "./FAQ.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "Who should file an Income Tax Return (ITR)?",
    answer:
      "Individuals, salaried employees, freelancers, business owners and anyone meeting the income criteria under the Income Tax Act should file an ITR."
  },
  {
    question: "Do you provide GST registration and filing services?",
    answer:
      "Yes. We offer GST registration, monthly/quarterly return filing, GST compliance and consultancy services."
  },
  {
    question: "Can you help with business registration?",
    answer:
      "Absolutely. We assist with Proprietorship, Partnership, LLP, Private Limited Company, MSME and Startup registrations."
  },
  {
    question: "How can I share my documents?",
    answer:
      "You can securely upload them online, email them or visit our office. We ensure complete confidentiality of your financial information."
  },
  {
    question: "Do you provide accounting services for businesses?",
    answer:
      "Yes. We provide bookkeeping, payroll, financial reporting and complete accounting solutions for businesses of all sizes."
  }
];

const FAQ = () => {

  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq section">

      <div className="container">

        <div className="section-title">

          <span>FAQs</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Find quick answers to the most common questions about our accounting,
            GST and tax services.
          </p>

        </div>

        <div className="faq-wrapper">

          {faqData.map((item, index) => (

            <div className="faq-item" key={index}>

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <span>{item.question}</span>

                {active === index ? <FaMinus /> : <FaPlus />}

              </button>

              <div className={`faq-answer ${active === index ? "show" : ""}`}>

                <p>{item.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;