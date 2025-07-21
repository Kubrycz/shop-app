import "../SCSS/variables/colors.scss";
import "../SCSS/variables/fonts.scss";

const Newsletter = () => {
  return (
    <div>
      <div className="medium-headline medium-headline--center">
        {" "}
        Join Our Community
      </div>
      <div className="small-description small-description--center">
        Subscribe to receive updates on new releases, exclusive offers, and
        fragrance<br></br> inspiration.
      </div>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <input
          type="email"
          placeholder="Your email address"
          className="email-input"
        />
        <button className="shop-button">Subscribe</button>
      </div>
    </div>
  );
};
export default Newsletter;
