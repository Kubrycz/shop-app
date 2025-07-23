import Section from "../Section";
import "../../SCSS/components/Products.scss";
import "../../SCSS/variables/images.scss";

const JourneySection = () => {
  return (
    <div>
      <Section>
        <div className="medium-headline medium-headline--center">
          The Journey of Our Ingredients
        </div>
        <div className="description description--center">
          From harvest to bottle, we carefully monitor every step of our
          ingredients' journey to ensure uncompromising quality and
          sustainability.
        </div>
        <div style={{ marginTop: "6rem" }}>
          <div className="AboutPage-product-grid">
            <div className="AboutPage-product-card">
              <div style={{ marginTop: "1rem" }}>
                {" "}
                <div className="image-wrapper">
                  <img
                    src="/images/AboutPage1.jpg"
                    alt="Luxury perfume with natural elements"
                    className="custom-img"
                  />
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <div className="small-headline small-headline--center">
                  Meticulous Selection
                </div>
              </div>
              <p className="small-description small-description--center ">
                Our perfumers personally select each batch of raw materials,
                ensuring only the highest quality ingredients make their way
                into our fragrances.
              </p>
            </div>
            <div className="AboutPage-product-card">
              <div style={{ marginTop: "1rem" }}>
                {" "}
                <div className="image-wrapper">
                  <img
                    src="/images/AboutPage2.jpg"
                    alt="Luxury perfume with natural elements"
                    className="custom-img"
                  />
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <div className="small-headline small-headline--center">
                  Artful Extraction
                </div>
              </div>
              <p className="small-description small-description--center ">
                Using both traditional and innovative extraction methods, we
                carefully preserve the authentic character of each botanical
                essence.
              </p>
            </div>
            <div className="AboutPage-product-card">
              <div style={{ marginTop: "1rem" }}>
                {" "}
                <div className="image-wrapper">
                  <img
                    src="/images/AboutPage3.jpg"
                    alt="Luxury perfume with natural elements"
                    className="custom-img"
                  />
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <div className="small-headline small-headline--center">
                  Sustainable Luxury
                </div>
              </div>
              <p className="small-description small-description--center ">
                We believe that luxury and environmental responsibility can
                coexist beautifully. From our ethically sourced ingredients to
                our recyclable packaging, sustainability informs every decision
                we make. We are committed to creating exquisite fragrances that
                respect our planet.
              </p>
            </div>
            <div className="AboutPage-product-card">
              <div style={{ marginTop: "1rem" }}>
                {" "}
                <div className="image-wrapper">
                  <img
                    src="/images/AboutPage4.jpg"
                    alt="Luxury perfume with natural elements"
                    className="custom-img"
                  />
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <div className="small-headline small-headline--center">
                  Rigorous Testing
                </div>
              </div>
              <p className="small-description small-description--center ">
                Every fragrance undergoes extensive quality testing and
                maturation before being deemed worthy of the ESSENCE name.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
export default JourneySection;
