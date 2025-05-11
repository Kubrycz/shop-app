import { useState } from "react";
import Section from "../components/Section";
import SectionFull from "../components/SectionFull";
import "../SCSS/variables/colors.scss";
import "../SCSS/variables/fonts.scss";
import "../SCSS/components/ContactForm.scss";
import "../SCSS/variables/fonts.scss";
import Atelier from "../assets/images/Atelier.jpg";
import Newsletter from "../components/Newsletter";

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

  const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

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
      {/* ..............Section Visit & Connect............. */}
      <Section>
        <div className="background-light">
          <div style={{ paddingTop: "5rem" }}>
            <div className="medium-headline medium-headline--center">
              {" "}
              Visit & Connect
            </div>
            <div className="description description--center">
              We welcome you to visit our flagship atelier or connect with us
              through various channels.
            </div>

            <div className="contact-information-container">
              <div className="contact-information-small-container">
                <div>
                  <p>Contact Information</p>
                  <p>Address</p>
                  <p>15 Rue Saint-Honoré</p>
                  <p>75001 Paris, France</p>
                </div>

                <div>
                  <p>Business Hours</p>
                  <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
                  <p>Saturday: 11:00 AM - 6:00 PM</p>
                  <p>Sunday: By appointment only</p>
                </div>

                <div>
                  <p>Phone</p>
                  <p>+33 (0) 1 42 60 55 75</p>
                </div>

                <div>
                  <p>Email</p>
                  <p>contact@essence-parfum.com</p>
                </div>
              </div>

              <div className="contact-information-small-container map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.294826347662!2d22.566629576694293!3d51.246203971751204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722576da293bb87%3A0x73b5dc14b177a9f7!2sPlac%20Litewski%2C%2020-400%20Lublin!5e0!3m2!1spl!2spl!4v1715436804171!5m2!1spl!2spl"
                  style={{ border: 0, borderRadius: "0.5rem" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Lublina"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* ....................Section Visit Our Atelier............ */}
      <Section>
        <div className="background-light">
          <div className="contact-information-container">
            <div className="text-content">
              <div className="contact-container-backgroundLight">
                <h1 className="medium-headline">Visit Our Atelier</h1>
                <p className="small-description">
                  Experience the world of ESSENCE in person at our flagship
                  atelier in<br></br> Paris. Discover our complete collection,
                  enjoy personalized<br></br> consultations, and immerse
                  yourself in the art of perfumery.
                  <p>
                    {" "}
                    Our expert perfume consultants will guide you through our
                    <br></br>
                    collections and help you discover the fragrance that
                    perfectly
                    <br></br>
                    resonates with your personal style and preferences.
                  </p>{" "}
                  <p>
                    {" "}
                    <div style={{ paddingTop: "1rem" }}>
                      <p className="font-medium-dark">Exclusive Services </p>
                    </div>{" "}
                    <p>
                      <i className="fas fa-check"></i> Personal fragrance
                      consultations
                    </p>{" "}
                    <p>
                      <i className="fas fa-check"></i> Custom fragrance creation
                      workshops
                    </p>{" "}
                    <p>
                      <i className="fas fa-check"></i> Exclusive limited
                      editions
                    </p>{" "}
                    <p>
                      <i className="fas fa-check"></i> Fragrance library access
                    </p>
                  </p>
                </p>
              </div>
            </div>
            <div className="image-container">
              <img
                src={Atelier}
                alt="Luxury perfume with natural elements"
                className="custom-img"
              />
              <div className="AboutPage-textBox">
                <div className="AboutPage-photoText">
                  <i className="fas fa-star" style={{ fontSize: "12px" }}></i>
                  <i className="fas fa-star" style={{ fontSize: "12px" }}></i>
                  <i className="fas fa-star" style={{ fontSize: "12px" }}></i>
                  <i className="fas fa-star" style={{ fontSize: "12px" }}></i>
                  <i className="fas fa-star" style={{ fontSize: "12px" }}></i>
                  <span> 5.0 (124 reviews)</span>
                  <p>
                    "An unforgettable experience that transformed how I think
                    about fragrance. The attention to detail and personalized
                    service was exceptional."{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="background-light">
          <div style={{ paddingTop: "4rem" }}>
            <div className="medium-headline medium-headline--center">
              {" "}
              Frequently Asked Questions
            </div>
            <div className="description description--center">
              Find answers to common questions about our products, services, and
              policies.
            </div>
            <div className="question-container">
              <div style={{ paddingTop: "3rem" }}>
                <div className="small-headline-question">
                  What are your shipping options?
                </div>
                <div className="small-description">
                  We offer standard shipping (5-7 business days), express
                  shipping (2-3 business days), and next-day delivery options.
                  International shipping is available to most countries. All
                  orders over €150 qualify for free standard shipping.
                </div>

                <div style={{ paddingTop: "2rem" }}>
                  <div className="small-headline-question">
                    What is your return policy?
                  </div>
                  <div className="small-description">
                    We accept returns within 30 days of purchase for unused and
                    unopened products in their original packaging. Please
                    contact our customer service team to initiate a return.
                    Custom and limited edition fragrances are final sale.
                  </div>
                </div>

                <div style={{ paddingTop: "2rem" }}>
                  <div className="small-headline-question">
                    Are your products tested on animals?
                  </div>
                  <div className="small-description">
                    No, ESSENCE is committed to cruelty-free practices. We never
                    test our products on animals, and we work only with
                    suppliers who share this commitment. All our products are
                    certified cruelty-free.
                  </div>
                </div>

                <div style={{ paddingTop: "2rem" }}>
                  <div className="small-headline-question">
                    How can I book a consultation at your atelier?
                  </div>
                  <div className="small-description">
                    You can book a consultation by calling our atelier directly,
                    using our online booking system, or sending us an email with
                    your preferred date and time. We recommend booking at least
                    one week in advance, especially during peak seasons.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <div style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};
export default ContactUs;
