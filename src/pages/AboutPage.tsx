import "../SCSS/variables/images.scss";
import SectionFull from "../components/SectionFull";
import "../SCSS/variables/fonts.scss";
import ImageSection from "../components/AboutPageSection/AboutPageImage";
import OurPhilosophySection from "../components/AboutPageSection/AboutPageOurPhilosophy";
import "../SCSS/components/Products.scss";
import AboutPageJourney from "../components/AboutPageSection/AboutPageJourney";
import Section from "../components/Section";
import Newsletter from "../components/Newsletter";
import ScrollSection from "../components/ScrollSection";

const AboutPage = () => {
  return (
    <div>
      <SectionFull>
        <div className="background-light">
          <div className="aboutPage-background-image"></div>
          <div className="aboutPage-background-gradient"></div>
          <div className="aboutPage-content">
            <div className="headline"> Our Story</div>
            <div className="description">
              Crafting moments of olfactory elegance through time-honored{" "}
              <br></br>
              traditions and innovative techniques.
            </div>
          </div>
        </div>
      </SectionFull>

      {/* ...............Section Image............ */}
      <ScrollSection />
      <section id="scrollAbout-section">
        <ImageSection />

        {/* ........................Section Our Philosophy............... */}
        <OurPhilosophySection />
      </section>
      {/* ..........Section About Journey........ */}
      <AboutPageJourney />
      <Section>
        <Newsletter></Newsletter>
      </Section>
    </div>
  );
};
export default AboutPage;
