import Section from "../Section";
import "../../SCSS/variables/colors.scss";
import "../../SCSS/variables/fonts.scss";
import "../../SCSS/components/ContactForm.scss";
import "../../SCSS/variables/fonts.scss";
import { useState } from "react";

const GetInTouch = () => {
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

  const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  return (
    <Section>
      <div className="medium-headline medium-headline--center">
        {" "}
        Get in Touch
      </div>
      <div className="description description--center">
        Whether you have a question about our fragrances, need assistance with
        an order, or want to explore<br></br> collaboration opportunities, we're
        here to help.
      </div>
      {/* .....................Formulage..................... */}
      <div className="contact-container">
        <div className="form-row">
          <label className="label">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="contact-input"
          ></input>
        </div>
        <div className="form-row">
          <label className="label">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email adress"
            className="contact-input"
          ></input>
        </div>
        <div className="form-row">
          <label className="label">Subject</label>
          <div className="select-container">
            <select id="subject" className="contact-input small-description">
              <option value="General Inquiry">General Inquiry</option>
              <option value="Product Information">Product Information</option>
              <option value="Order Support">Order Support</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Press Inquiry">Press Inquiry</option>
            </select>
            <div className="icon-contact">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className="form-row">
          <label className="label">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your message"
            className="contact-input"
          ></textarea>
        </div>
        <div className="form-row">
          <button className="shop-button">Send Message</button>
        </div>
      </div>
    </Section>
  );
};
export default GetInTouch;
