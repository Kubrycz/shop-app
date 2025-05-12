import "../../SCSS/variables/colors.scss";
import "../../SCSS/variables/fonts.scss";
import "../../SCSS/components/ContactForm.scss";
import "../../SCSS/variables/fonts.scss";
import Section from "../Section";

const VisitConnect = () => {
  return (
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
              <p className="medium-headline">Contact Information</p>
              <div>
                <div className="icon-and-label">
                  <div className="Connect-icon-circle">
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className="font-medium-dark">Address</p>
                    <p className="small-description">
                      15 Rue Saint-Honoré<br></br>
                      75001 Paris, France
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="icon-and-label">
                  <div className="Connect-icon-circle">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="font-medium-dark">Business Hours</p>
                    <p className="small-description">
                      Monday - Friday: 10:00 AM - 7:00 PM<br></br>
                      Saturday: 11:00 AM - 6:00 PM<br></br>
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>

              <div className="icon-and-label">
                <div className="Connect-icon-circle">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                </div>
                <div>
                  <p className="font-medium-dark">Phone</p>
                  <p className="small-description">+33 (0) 1 42 60 55 75</p>
                </div>
              </div>

              <div className="icon-and-label">
                <div className="Connect-icon-circle">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div>
                  <p className="font-medium-dark">Email</p>
                  <p className="small-description">
                    contact@essence-parfum.com
                  </p>
                </div>
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
  );
};
export default VisitConnect;
