import React from "react";
import Product from "../models/products";
import "../SCSS/variables/buttons.scss";
import "../SCSS/variables/images.scss";
import "../SCSS/variables/fonts.scss";
import "../SCSS/variables/buttons.scss";
import { ButtonGlobalClassNames } from "@fluentui/react";
import { useProductContext } from "../globalState/globalState";
import "../SCSS/components/ListProductContext.scss";
// type ProductListProps = {
//   basket: Product[];
//   addToBasket?: (text: Product) => void;
//   removeFromBasket?: (id: number) => void;
// };

const ListProduct: React.FC = () => {
  const { basket, addToBasket, removeFromBasket } = useProductContext();
  return (
    <div className="listContext-wrapper">
      {basket.map((product) => (
        <div key={product.id} className="listContext-container">
          <div className="listContext-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="listContext-info">
            <div className="listContext-text">
              <div className="font-medium-dark">{product.name}</div>
              <div className="font-medium">{product.description}</div>
            </div>

            <div className="listContext-action">
              <button>ilość</button>
              <button
                onClick={() => removeFromBasket(product.id)}
                className="unstyled-button"
              >
                usuń
              </button>
              <div className="listContext-price">
                <p className="font-medium-dark">
                  ${parseFloat(product.price).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ListProduct;
