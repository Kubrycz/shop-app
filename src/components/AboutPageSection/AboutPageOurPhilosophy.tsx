import Section from "../Section";
import "../../SCSS/variables/fonts.scss";

const OurPhilosophySection = () => {
    return (
        <div className="background-light">
          <Section>
            <div className="medium-headline medium-headline--center">
              {" "}
              Our Philosophy
            </div>
            <div className="description description--center">
              At the heart of ESSENCE lies a dedication to three core principles
              that guide every aspect of<br></br> our creation process.
            </div>
            <div style={{ marginTop: "6rem" }}>
              <div className="product-grid">
                <div className="product-card">
                  <div style={{ marginTop: "1rem" }}>
                    <div className="AboutPage-icon-container">
                      <div className="AboutPage-icon-circle ">
                        <i className="fas fa-hands"></i>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    <div className="small-headline small-headline--center">
                      Artisanal Craftsmanship
                    </div>
                  </div>
                  <p className="small-description small-description--center ">
                    Every ESSENCE fragrance is meticulously crafted by hand,
                    following time-honored techniques passed down through
                    generations of perfumers. We believe that true luxury comes
                    from the human touch and attention to detail that cannot be
                    replicated by mass production.
                  </p>
                </div>
                <div className="product-card">
                  <div style={{ marginTop: "1rem" }}>
                    <div className="AboutPage-icon-container">
                      <div className="AboutPage-icon-circle ">
                        <i className="fas fa-leaf"></i>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    <div className="small-headline small-headline--center">
                      Sustainable Luxury
                    </div>
                  </div>
                  <p className="small-description small-description--center ">
                    We believe that luxury and environmental responsibility can
                    coexist beautifully. From our ethically sourced ingredients
                    to our recyclable packaging, sustainability informs every
                    decision we make. We are committed to creating exquisite
                    fragrances that respect our planet.
                  </p>
                </div>
                <div className="product-card">
                  <div style={{ marginTop: "1rem" }}>
                    <div className="AboutPage-icon-container">
                      <div className="AboutPage-icon-circle ">
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    <div className="small-headline small-headline--center">
                      Natural Excellence
                    </div>
                  </div>
                  <p className="small-description small-description--center ">
                    We source the finest natural ingredients from around the
                    world, working directly with growers who share our values.
                    Our dedication to quality means we never compromise on the
                    integrity of our raw materials, resulting in fragrances of
                    exceptional depth and character.
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </div>
    );
}
export default OurPhilosophySection;