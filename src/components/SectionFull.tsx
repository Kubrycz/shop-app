import React, { ReactNode } from "react";
import "../SCSS/pages/HomeContainer.scss";

interface SectionProps {
  children: ReactNode;
}

const SectionFull = ({ children }: SectionProps) => {
  return (
    <div className="section-container section-container--full-width">
      <div className="container">
        {children}
      </div>
    </div>
  );
};
export default SectionFull;
