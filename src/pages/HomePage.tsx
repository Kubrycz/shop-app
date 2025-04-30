import React, { useState } from "react";
import perfumeImage from "../assets/images/6d7ada87bbd5977c1548dfaa328e0e31.jpg";
import perfumeImage2 from "../assets/images/2.jpg";
import perfumeImage3 from "../assets/images/3.jpg";
import perfumeImage4 from "../assets/images/4.jpg";
import perfumeImage5 from "../assets/images/5.jpg";
import perfumeImage6 from "../assets/images/6.jpg";
import "../SCSS/pages/HomeContainer.scss";
import "../SCSS/variables/images.scss";
import "../SCSS/variables/buttons.scss";
import Section from "../components/Section";
import IngrediensTextSection from "../components/IngredientsTextSection";

const HomePage = () => {

  return (
    <div className="home-background">
      <Section>
        <div className="flex-container">
          <div className="text-content">
            <h1 className="headline">Discover Natural Luxury in Every Drop</h1>
            <p className="description">
              Handcrafted perfumes inspired by nature's elements, designed for
              those who appreciate minimalist luxury and oragnic essences.
            </p>
            <button className="shop-button">Shop Collection</button>
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
              
          </Section>
    </div>
  );
};
export default HomePage;
