import { useState } from "react";
import Section from "../components/Section";
import SectionFull from "../components/SectionFull";
import "../SCSS/variables/colors.scss";
import "../SCSS/variables/fonts.scss";

const ContactUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div>
      <SectionFull>
        <div className="background-light">
          <div className="contactUs-background-image"></div>
          <div className="contactUs-background-gradient"></div>
          <div className="aboutPage-content">
            <div className="headline"> Contact Us</div>
            <div className="description">
              We'd love to hear from you. Reach out to our team for any<br></br>
              inquiries about our fragrances, collaborations, or experiences.
            </div>
          </div>
        </div>
      </SectionFull>
      {/* ................Get in touch section................ */}
      <Section>
        <div className="medium-headline medium-headline--center">
          {" "}
          Get in Touch
        </div>
        <div className="description description--center">
          Whether you have a question about our fragrances, need assistance with
          an order, or want to explore<br></br> collaboration opportunities,
          we're here to help.
        </div>
        {/* .....................Formulage..................... */}
        <button></button>
      </Section>
    </div>
  );
};
export default ContactUs;
