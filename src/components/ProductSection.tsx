import React, { useState } from "react";
import "../SCSS/variables/buttons.scss";
import "../SCSS/variables/images.scss";
import "../SCSS/variables/fonts.scss";
import Section from "./Section";
import { DualScreenClosedAlert20Filled } from "@fluentui/react-icons";
import Product from "../models/products";
import { useProductContext } from "../globalState/globalState";

interface ProductSectionProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  products: Product[];
}

const categories = [
  { label: "All Products", value: "all" },
  { label: "Signature Collection", value: "signature" },
  { label: "Seasonal", value: "seasonal" },
  { label: "Gift Sets", value: "sets" },
  { label: "Limited Edition", value: "limited" },
];

const ProductSection: React.FC<ProductSectionProps> = ({
  selectedCategory,
  setSelectedCategory,
  products,
}) => {
  const { basket, addToBasket, removeFromBasket } = useProductContext();
  return (
    <div style={{ marginTop: "4rem" }}>
      <div className="button-container">
        {categories.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setSelectedCategory(value)}
            className={`button-collection ${
              selectedCategory === value ? "selected" : ""
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <Section>
        <div className="product-container">
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card group">
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="product-details">
                  <h3 className="font-medium-dark">{product.name}</h3>
                  <p className="font-medium">{product.description}</p>
                  <p className="font-medium">
                    {/* {product.price} */}$
                    {parseFloat(product.price).toFixed(2)}
                  </p>
                  <button
                    className="shop-button shop-button--full-width"
                    onClick={() => {
                      addToBasket(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
export default ProductSection;
