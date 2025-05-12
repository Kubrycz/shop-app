import { useState } from "react";
import Section from "../components/Section";
import SectionFull from "../components/SectionFull";
import "../SCSS/variables/colors.scss";
import "../SCSS/variables/fonts.scss";
import "../SCSS/components/ContactForm.scss";

import Newsletter from "../components/Newsletter";
import GetInTouch from "../components/ContactPageSection/GetInTouch";
import VisitConnect from "../components/ContactPageSection/VisitConnect";
import VisitAtelier from "../components/ContactPageSection/VisitOurAtelier";
import QuestionSection from "../components/ContactPageSection/QuestionSection";

const ContactUs = () => {
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
      <GetInTouch />
      {/* ..............Section Visit & Connect............. */}
      <VisitConnect />
      {/* ....................Section Visit Our Atelier............ */}
      <VisitAtelier />
      {/* ...................Question Section............. */}
      <QuestionSection />
      <div style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};
export default ContactUs;
