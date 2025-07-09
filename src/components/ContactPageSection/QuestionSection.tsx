import "../../SCSS/variables/colors.scss";
import "../../SCSS/variables/fonts.scss";
import "../../SCSS/components/ContactForm.scss";
import "../../SCSS/variables/fonts.scss";
import Section from "../Section";

const QuestionSection = () => {
  return (
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
                We offer standard shipping (5-7 business days), express shipping
                (2-3 business days), and next-day delivery options.
                International shipping is available to most countries. All
                orders over €150 qualify for free standard shipping.
              </div>

              <div style={{ paddingTop: "2rem" }}>
                <div className="small-headline-question">
                  What is your return policy?
                </div>
                <div className="small-description">
                  We accept returns within 30 days of purchase for unused and
                  unopened products in their original packaging. Please contact
                  our customer service team to initiate a return. Custom and
                  limited edition fragrances are final sale.
                </div>
              </div>

              <div style={{ paddingTop: "2rem" }}>
                <div className="small-headline-question">
                  Are your products tested on animals?
                </div>
                <div className="small-description">
                  No, ESSENCE is committed to cruelty-free practices. We never
                  test our products on animals, and we work only with suppliers
                  who share this commitment. All our products are certified
                  cruelty-free.
                </div>
              </div>

              <div style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
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
  );
};
export default QuestionSection;
