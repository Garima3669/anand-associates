import "./Testimonials.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    profession: "Business Owner",
    review:
      "Anand & Associates has been managing our GST and accounting for the past three years. Their team is professional, responsive, and always ensures timely compliance.",
  },
  {
    name: "Priya Verma",
    profession: "Software Engineer",
    review:
      "The ITR filing process was incredibly smooth. Everything was explained clearly, and my return was filed accurately without any hassle.",
  },
  {
    name: "Amit Gupta",
    profession: "Startup Founder",
    review:
      "From company registration to bookkeeping and tax planning, Anand & Associates has been a reliable financial partner for our business.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="container">

        <div className="section-title">
          <span>Testimonials</span>
          <h2>What Our Clients Say</h2>
          <p>
            We believe trust is earned through consistent service and long-term
            client relationships.
          </p>
        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <FaQuoteLeft className="quote-icon" />

              <p className="review">
                "{item.review}"
              </p>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="client">

                <div className="avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.profession}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;