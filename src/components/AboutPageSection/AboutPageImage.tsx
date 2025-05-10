import React from "react";
import Section from "../Section";
import AboutPagePhoto from "../../assets/images/AboutPagePhoto.jpg";

const ImageSection = () => {
    return (
      <div>
        <Section>
          <div className="flex-container">
            <div className="image-container">
              <img
                src={AboutPagePhoto}
                alt="Luxury perfume with natural elements"
                className="custom-img"
              />
              <div className="AboutPage-textBox">
                <div className="AboutPage-photoText">
                  "Every fragrance tells a story of nature's most exquisite
                  elements, carefully composed to evoke emotion and memory."
                  <p className="footer-other-desc">
                    — Claire Laurent, Founder
                  </p>{" "}
                </div>
              </div>
            </div>
            <div className="text-content">
              <h1 className="medium-headline">
                A Legacy of Artisanal Excellence
              </h1>
              <p className="small-description">
                Founded in 2010 by master perfumer Claire Laurent, ESSENCE began
                as a small atelier in<br></br> Paris dedicated to creating
                fragrances that capture the sublime beauty of natural elements.
                <p>
                  {" "}
                  With a background in traditional French perfumery and a
                  passion for sustainable practices, Claire set out to create a
                  brand that honors both the art of fragrance creation and the
                  precious natural resources that make it possible.
                </p>{" "}
                <p>
                  {" "}
                  Today, ESSENCE has grown into a globally recognized name in
                  luxury perfumery, while maintaining the same commitment to
                  craftsmanship, quality, and environmental responsibility that
                  defined our beginnings.
                </p>
              </p>
            </div>
          </div>
        </Section>
      </div>
    );
}
export default ImageSection;