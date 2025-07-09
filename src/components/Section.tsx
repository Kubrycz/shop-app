import React, { ReactNode } from "react";
import "../SCSS/pages/HomeContainer.scss";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <div className="section-container">
      <div className="cotainer">
        {children}
      </div>
    </div>
  );
};
export default Section;
