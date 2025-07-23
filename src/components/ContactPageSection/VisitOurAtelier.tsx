import "../../SCSS/variables/colors.scss";
import "../../SCSS/variables/fonts.scss";
import "../../SCSS/components/ContactForm.scss";
import "../../SCSS/variables/fonts.scss";
import Section from "../Section";

const VisitAtelier = () => {
  return (
    <Section>
      <div className="background-light">
        <div className="contact-information-container">
          <div className="text-content">
            <div className="contact-container-backgroundLight">
              <h1 className="medium-headline">Visit Our Atelier</h1>
              <p className="small-description">
                Experience the world of ESSENCE in person at our flagship
                atelier in<br></br> Paris. Discover our complete collection,
                enjoy personalized<br></br> consultations, and immerse yourself
                in the art of perfumery.
                <p>
                  {" "}
                  Our expert perfume consultants will guide you through our
                  <br></br>
                  collections and help you discover the fragrance that perfectly
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
                    <i className="fas fa-check"></i> Exclusive limited editions
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
              src="/images/Atelier.jpg"
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
  );
};
export default VisitAtelier;
