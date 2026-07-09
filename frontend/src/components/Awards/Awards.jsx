import "./Awards.css";
import { FaAward } from "react-icons/fa";

import certificate from "../../assets/certificate.png";
import trophy from "../../assets/trophy.png";

const awards = [
  {
    id: 1,
    image: certificate,
    title: "Certificate of Appreciation",
    badge: "Industry Recognition",
    desc: "Recognized by Tally Solutions for enhancing accounting and compliance standards for MSMEs.",
  },
  {
    id: 2,
    image: trophy,
    title: "Business Excellence Trophy",
    badge: "Business Excellence",
    desc: "Awarded for outstanding contribution towards business excellence and trusted accounting services.",
  },
];

const Awards = () => {
  return (
    <section className="awards" id="awards">

      <div className="container">

        <div className="awards-heading">

          <span>Achievements</span>

          <h2>Awards & Recognition</h2>

          <p>
            Our journey is marked by recognition from industry leaders for
            excellence, commitment and professional integrity.
          </p>

        </div>

        <div className="awards-grid">

          {awards.map((item) => (

            <div className="award-card" key={item.id}>

              <div className="award-image">

                <div className="award-medal">
                  <FaAward />
                </div>

                <img src={item.image} alt={item.title} />

              </div>

              <div className="award-content">

                <span className="award-badge">
                  {item.badge}
                </span>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Awards;