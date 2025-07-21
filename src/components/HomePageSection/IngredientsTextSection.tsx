import React, { ReactNode, useState } from "react";
import IngrediensSection from "./IngredientstSection";
import "../../SCSS/variables/fonts.scss";
import "../../SCSS/variables/buttons.scss";
import "../../SCSS/variables/colors.scss";

interface SectionProps {
  title: string;
  price: string;
  testFn?: () => void;
  children: ReactNode;
  ingredients: string;
  ingredients2: string;
  ingredients3: string;
}

const IngrediensTextSection = ({
  title,
  price,
  children,
  ingredients,
  ingredients2,
  ingredients3,
}: SectionProps) => {
  const [selectedSize, setSelectedSize] = useState("50ml");

  return (
    <div className="text-content">
      <h2 className="medium-headline">{title}</h2>
      <p className="small-headline">{price}</p>
      <div style={{ marginBottom: "2rem" }}>
        <p className="small-description">{children}</p>
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <h3 className="font-medium-dark">Fragrance Notes:</h3>
        <p className="small-description">
          <span className="font-medium">Top:</span> {ingredients}
          <br></br>
          <span className="font-medium">Heart:</span> {ingredients2}
          <br></br>
          <span className="font-medium">Base:</span> {ingredients3}
        </p>
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <h3 className="font-medium-dark">Size</h3>
        <div style={{ display: "flex", gap: "1rem", height: "2.5rem" }}>
          <button
            onClick={() => setSelectedSize("30ml")}
            className={`flex-button ${
              selectedSize === "30ml" ? "selected" : ""
            }`}
          >
            30ml
          </button>
          <button
            onClick={() => setSelectedSize("50ml")}
            className={`flex-button ${
              selectedSize === "50ml" ? "selected" : ""
            }`}
          >
            50ml
          </button>
          <button
            onClick={() => setSelectedSize("100ml")}
            className={`flex-button ${
              selectedSize === "100ml" ? "selected" : ""
            }`}
          >
            100ml
          </button>
        </div>
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <h3 className="font-medium-dark">Quantity</h3>
        <div>
          <button className="shop-button shop-button--full-width">
            Add to Card
          </button>
        </div>
        <div style={{ marginBottom: "5rem" }}></div>
        <IngrediensSection title="Product Details">
          Our perfumes are crafted using the finest natural ingredients,
          ethically sourced and blended by master perfumers. Each bottle is
          hand-filled and inspected to ensure the highest quality.
        </IngrediensSection>

        <IngrediensSection title="Ingredients">
          Alcohol Denat., Parfum (Fragrance), Aqua (Water), Linalool, Limonene,
          Coumarin, Citral, Geraniol, Citronellol, Eugenol.
        </IngrediensSection>

        <IngrediensSection title="Shipping & Returns">
          Free shipping on all orders over $75. Returns accepted within 30 days
          of purchase. Perfumes must be unopened and in original packaging.
        </IngrediensSection>
      </div>
    </div>
  );
};
export default IngrediensTextSection;
