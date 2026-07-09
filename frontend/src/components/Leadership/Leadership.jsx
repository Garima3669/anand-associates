import "./Leadership.css";
import { FaAward, FaBriefcase } from "react-icons/fa";

import founder from "../../assets/trophy.png";
import son from "../../assets/trophy.png";

const team = [
  {
    id: 1,
    image: founder,
    name: "Basant Anand",
    role: "Founder & Senior Tax Consultant",
    icon: <FaAward />,
    description:
      "With decades of experience in taxation, GST and accounting, Mr. Basant Anand has guided businesses and individuals with trusted financial solutions built on integrity and professionalism.",
  },
  {
    id: 2,
    image: son,
    name: "Your Son Name",
    role: "Partner & Financial Consultant",
    icon: <FaBriefcase />,
    description:
      "Bringing a modern approach to accounting and financial advisory, he works closely with clients to provide efficient, technology-driven and compliant business solutions.",
  },
];

const Leadership = () => {
  return (
    <section className="leadership section" id="leadership">
      <div className="container">

        <div className="section-title">
          <span>Leadership Team</span>

          <h2>Meet Our Experts</h2>

          <p>
            Behind every successful client is a dedicated team committed to
            delivering trusted accounting, taxation and business advisory
            services.
          </p>
        </div>

        <div className="leader-grid">

          {team.map((member) => (

            <div className="leader-card" key={member.id}>

              <div className="leader-image">

                <img
                  src={member.image}
                  alt={member.name}
                />

              </div>

              <div className="leader-content">

                <div className="leader-icon">
                  {member.icon}
                </div>

                <h3>{member.name}</h3>

                <span>{member.role}</span>

                <p>{member.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Leadership;