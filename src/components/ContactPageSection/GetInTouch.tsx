import Section from "../Section";
import "../../SCSS/variables/colors.scss";
import "../../SCSS/variables/fonts.scss";
import "../../SCSS/components/ContactForm.scss";
import "../../SCSS/variables/fonts.scss";
import "../../SCSS/components/Errors.scss";
import { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    switch (name) {
      case "email":
        setFormErrors({
          ...formErrors,
          email:
            value.trim() === ""
              ? "Email is required"
              : mailRegex.test(value)
                ? ""
                : "Correct form is: *.*@gmail.com",
        });
        break;

      case "name":
        setFormErrors({
          ...formErrors,
          name: value.trim() === "" ? "Name is required" : "",
        });
        break;

      case "subject":
        setFormErrors({
          ...formErrors,
          subject:
            value.trim() === "" || value === "General Inquiry"
              ? "Please select a subject"
              : "",
        });
        break;

      case "message":
        setFormErrors({
          ...formErrors,
          message: value.trim() === "" ? "Message is required" : "",
        });
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Zapobiega przeładowaniu strony

    const errors = {
      name: formData.name.trim() === "" ? "Name is required" : "",
      email:
        formData.email.trim() === ""
          ? "Email is required"
          : !mailRegex.test(formData.email)
            ? "Correct form is: *.*@gmail.com"
            : "",
      subject: formData.subject.trim() === "" ? "Subject is required" : "",
      message: formData.message.trim() === "" ? "Message is required" : "",
    };

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      alert("Please fix the errors in the form.");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_CONTACT_API}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error, can't send message!");
      }

      const data = await response.json();
      console.log("Data saved:", data);
      alert("Message sent!");

      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
      setFormErrors({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Can't send message.");
    }
  };

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
            name="name"
            placeholder="Your name"
            className="contact-input"
            value={formData.name}
            onChange={handleChange}
          ></input>
          {formErrors.name && (
            <div className="error-message"> {formErrors.name}</div>
          )}
        </div>

        <div className="form-row">
          <label className="label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email adress"
            className="contact-input"
            value={formData.email}
            onChange={handleChange}
          ></input>
          {formErrors.email && (
            <div className="error-message"> {formErrors.email}</div>
          )}
        </div>

        <div className="form-row">
          <label className="label">Subject</label>
          <div className="select-container">
            <select
              id="subject"
              className="contact-input small-description"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
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
          {formErrors.subject && (
            <div className="error-message">{formErrors.subject}</div>
          )}
        </div>

        <div className="form-row">
          <label className="label">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your message"
            className="contact-input"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
          {formErrors.message && (
            <div className="error-message"> {formErrors.message}</div>
          )}
        </div>

        <div className="form-row">
          <button type="submit" className="shop-button" onClick={handleSubmit}>
            Send Message
          </button>
        </div>
      </div>
    </Section>
  );
};
export default GetInTouch;
