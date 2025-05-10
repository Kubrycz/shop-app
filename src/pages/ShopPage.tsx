import React, { useState } from "react";
import Section from "../components/Section";
import ProductSection from "../components/ProductSection";
import products from "../data/Products";


const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      {/* // ...............Section Our Collection.......... */}
      <div style={{ marginTop: "4rem" }}>
        <div className="background-light">
          <Section>
            <div className="headline headline--center"> Our Collection</div>
            <div className="description description--center">
              Discover our complete range of handcrafted perfumes, each bottle a
              unique <br></br> expression of natural luxury and refined
              elegance.
            </div>
          </Section>
        </div>
      </div>
      {/* // ............Section with products............. */}
      <div>
        <ProductSection
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          products={filteredProducts}
        />
      </div>
    </div>
  );
};
export default ShopPage;
