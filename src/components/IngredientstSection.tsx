import React, { ReactNode } from "react";
import "../SCSS/components/IngredientsSection.scss";
import "../SCSS/variables/fonts.scss";

interface SectionProps {
  children: ReactNode;
  title: string;
}

const IngrediensSection = ({ children, title }: SectionProps) => {
  return (
    <div className="product-info">
      <div className="info-item">
        <h3 className="info-title">
          <span className="font-medium-dark" style={{ marginRight: "0.5rem" }}>
            {title}
          </span>
          <i className="fa fa-chevron-down"></i>
        </h3>
        
        <p className="font-medium">{children}</p>
      </div>
    </div>
  );
};
export default IngrediensSection;
