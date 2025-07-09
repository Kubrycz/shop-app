import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import products from "../data/Products";
import ScrollSection from "../components/ScrollSection";
import ProductSection from "../components/ProductSection";
import Product from "../models/products";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [productsData, setProductsData] = useState<Product[]>([]);

  //const productsObj = await products();
  useEffect(() => {
    const handler = async () => {
      const result = await products();
      setProductsData(result);
    };
    handler();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

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
      <ScrollSection />
      <section id="scroll-section">
        <div>
          <ProductSection
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            products={filteredProducts}
          />
        </div>
      </section>
    </div>
  );
};
export default ShopPage;
