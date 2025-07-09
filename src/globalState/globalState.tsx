import React, { createContext, useContext, useState } from "react";
import Product from "../models/products";

interface ProductContextType {
  basket: Product[];
  addToBasket: (text: Product) => void;
  removeFromBasket: (id: number) => void;
}

const BasketContext = createContext<ProductContextType | undefined>(undefined);

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [basket, setBasket] = useState<Product[]>([]); // <-- TUTAJ!

  const addToBasket = (product: Product) => {
    setBasket((prevTasks) => [...prevTasks, product]);
  };

  const removeFromBasket = (id: number) => {
    setBasket((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
