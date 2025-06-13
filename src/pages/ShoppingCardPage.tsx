import "../SCSS/variables/fonts.scss";
import "../SCSS/variables/colors.scss";
import "../SCSS/components/ShoppingCardPage.scss";
import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import ListProduct from "../components/ListProductContext";

const ShoppingCard = () => {
  const navigate = useNavigate();

  return (
    <div className="background-light">
      <div className="header-shop">
        <div className="container-shop">
          <div className="logo" onClick={() => navigate("/home")}>
            ESSENCE
          </div>
        </div>
      </div>

      <div className="container-backHome">
        <button className="unstyled-button" onClick={() => navigate("/home")}>
          <div className="backHome-shopCard backHome-shopCard--center">
            <i
              className="fa fa-long-arrow-right"
              style={{
                fontSize: "0.9rem",
                textAlign: "center",
                justifyContent: "center",
              }}
            ></i>
            <span> Back to HomePage </span>
            <i
              className="fa fa-long-arrow-left"
              style={{
                fontSize: "0.9rem",
                textAlign: "center",
                justifyContent: "center",
              }}
            ></i>
          </div>
        </button>
      </div>
      {/* .................Section shopProducts......... */}
      <div>
        <Section>
          <div>
            <ListProduct />
          </div>
        </Section>
      </div>
    </div>
  );
};
export default ShoppingCard;
