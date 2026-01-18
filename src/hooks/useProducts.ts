import { useState, useEffect } from "react";
import { Product, products as defaultProducts, ProductCategory } from "@/data/products";

const STORAGE_KEY = "sweetcrust_custom_products";

export const useProducts = () => {
  const [customProducts, setCustomProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setCustomProducts(JSON.parse(stored));
      } catch {
        setCustomProducts([]);
      }
    }
  }, []);

  const allProducts = [...defaultProducts, ...customProducts];

  const addProduct = (product: Omit<Product, "id">) => {
    const newProduct: Product = {
      ...product,
      id: `custom-${Date.now()}`,
    };
    const updated = [...customProducts, newProduct];
    setCustomProducts(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return newProduct;
  };

  const deleteProduct = (id: string) => {
    const updated = customProducts.filter((p) => p.id !== id);
    setCustomProducts(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const getProductsByCategory = (category: ProductCategory | "All") => {
    if (category === "All") return allProducts;
    return allProducts.filter((p) => p.category === category);
  };

  return {
    products: allProducts,
    customProducts,
    addProduct,
    deleteProduct,
    getProductsByCategory,
  };
};
