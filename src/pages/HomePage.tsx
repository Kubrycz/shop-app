import React, { useState } from "react";
import perfumeImage from "../assets/images/6d7ada87bbd5977c1548dfaa328e0e31.jpg";
import perfumeImage2 from "../assets/images/2.jpg";
import perfumeImage3 from "../assets/images/3.jpg";
import perfumeImage4 from "../assets/images/4.jpg";
import perfumeImage5 from "../assets/images/5.jpg";
import perfumeImage6 from "../assets/images/6.jpg";
import perfumeNo2 from "../assets/images/No2.jpg";
import perfumeNo3 from "../assets/images/No3.jpg";
import perfumeElementalCollection from "../assets/images/ElementalCollection.jpg";
import OurStory from "../assets/images/OurStory.jpg";
import "../SCSS/pages/HomeContainer.scss";
import "../SCSS/variables/images.scss";
import "../SCSS/variables/buttons.scss";
import "../SCSS/components/RecomendationSection.scss";
import Section from "../components/Section";
import IngrediensTextSection from "../components/IngredientsTextSection";
import RecomendationSection from "../components/RecomendationSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../SCSS/components/Scroll.scss";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-background">
      {/* --------------Scection Welcome------------- */}
      <Section>
        <div className="flex-container">
          <div className="text-content">
            <h1 className="headline">Discover Natural Luxury in Every Drop</h1>
            <p className="description">
              Handcrafted perfumes inspired by nature's elements, designed for
              those who appreciate minimalist luxury and oragnic essences.
            </p>
            <button className="shop-button" onClick={() => navigate("/shop")}>
              Shop Collection
            </button>
          </div>
          <div className="image-container">
            <img
              src={perfumeImage}
              alt="Luxury perfume with natural elements"
              className="custom-img"
            />
          </div>
        </div>
      </Section>

      <Section>
        {/* ----------------Product Section------------- */}

        <div className="flex-container flex-container--items-start">
          <div className="image-container sticky top-24">
            <img
              src={perfumeImage2}
              alt="Luxury perfume with natural elements"
              className="custom-img"
            />
            <div className="image-gallery">
              <img
                src={perfumeImage3}
                alt="Luxury perfume with natural elements"
                className="gallery-image"
              />
              <img
                src={perfumeImage4}
                alt="Luxury perfume with natural elements"
                className="gallery-image"
              />
              <img
                src={perfumeImage5}
                alt="Luxury perfume with natural elements"
                className="gallery-image"
              />
              <img
                src={perfumeImage6}
                alt="Luxury perfume with natural elements"
                className="gallery-image"
              />
            </div>
          </div>
          <IngrediensTextSection
            title="Elemental No.1"
            price="$120.00"
            ingredients=" Bergamot, White Sage"
            ingredients2=" Cedarwood, Lavender"
            ingredients3=" Sandwood, Amber, Moss"
          >
            A harmonious blend of earthy notes and subtle florals, Elemental
            No.1 captures the essence of natural luxury. This signature
            fragrance evokes the tranquility of stone and wood elements with a
            sophisticated finish.
          </IngrediensTextSection>
        </div>
      </Section>

      <Section>
        {/* ---------Recomendation Section------------ */}
        <div className="section-container">
          <div className="medium-headline medium-headline--center">
            <div style={{ marginTop: "-3rem", marginBottom: "2rem" }}>
              {" "}
              You May Also Like
            </div>
          </div>
          <div className="product-grid">
            <RecomendationSection
              src={perfumeNo2}
              alt="Elemental No.2"
              elemental="Elemental No.2"
              smell=" Citrus & Cedar Blend"
              price="$110.00"
            ></RecomendationSection>
            <RecomendationSection
              src={perfumeNo3}
              alt="Elemental No.3"
              elemental="Elemental No.3"
              smell=" Amber & Sandalwood"
              price="$130.00"
            ></RecomendationSection>
            <RecomendationSection
              src={perfumeElementalCollection}
              alt="Elemental Collection"
              elemental="Elemental Collection"
              smell=" Gift Set (3 x 15ml)"
              price="$160.00"
            ></RecomendationSection>
          </div>
        </div>
      </Section>

      {/* -----------Our Story Section-------------- */}
      <Section>
        <div className="flex-container">
          <div className="image-container">
            <img
              src={OurStory}
              alt="Luxury perfume with natural elements"
              className="custom-img"
            />
          </div>
          <div className="text-content">
            <h1 className="medium-headline">Our Story</h1>
            <p className="small-description">
              Founded in 2020, ESSENCE was born from a desire to create perfumes
              that honor the elements of nature while delivering a luxury
              experience.
            </p>
            <p className="small-description">
              Our perfumes are crafted using ethically sourced ingredients,
              blended by master perfumers who understand the delicate balance
              between art and science.
            </p>
            <p className="small-description">
              {" "}
              Each fragrance in our collection tells a story of natural elements
              - stone, wood, water, and air - translated into sophisticated
              scent profiles that evolve beautifully on the skin.
            </p>
            <button className="shop-button">Learn More</button>
          </div>
        </div>
        {/* .............Newsletter Section--------------- */}
      </Section>
      <Section>
        <Newsletter></Newsletter>
      </Section>
    </div>
  );
};
export default HomePage;
