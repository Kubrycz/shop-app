import React from "react";
import "../SCSS/pages/HomeContainer.scss";
import "../SCSS/variables/fonts.scss";
import "../SCSS/variables/images.scss";
import "../SCSS/components/RecomendationSection.scss"

interface SectionProps {
  alt: string;
  src: string;
  elemental: string;
  smell: string;
  price: string;
}

const RecomendationSection = ({
  src,
  alt,
  elemental,
  smell,
  price,
}: SectionProps) => {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={src} alt={alt} className="product-image" />
      </div>
      <h3 className="font-medium-dark">{elemental}</h3>
      <p className="font-medium">{smell}</p>
      <p className="font-medium">{price}</p>
      <button className="shop-button shop-button--full-width">
        Add to Cart
      </button>
    </div>
  );
};
export default RecomendationSection;
