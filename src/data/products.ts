// Product data for Blessed KK Kitchen
import egusi from "@/assets/products/Whole Egusi Fresh Authentic Hand peeled Nigeria Egusi _ Whole Melon seeds 100g.jpeg";
import ogbono from "@/assets/products/HOW TO REMOVE LUMPS IN OGBONO SOUP.jpeg";
import onions from "@/assets/products/Onions.jpeg";
import snails from "@/assets/products/Oven dried snails.jpeg";
import crayfish from "@/assets/products/50g freshly dried Crayfish (1).jpeg";
import catfish from "@/assets/products/Dried catfish.jpeg";
import redOil from "@/assets/products/Red oil original.jpeg";
import bitterLeaf from "@/assets/products/Dried Bitter Leaf _ Onugbu _ Ndole Leaves _ Ewuro - Uncut & Washed.jpeg";
import tigerNut from "@/assets/products/Export Large quantity of Tiger Nut (Cyperus esculentus) chufa_ And Shea Butter around the globe.jpeg";
import cocoyam from "@/assets/products/coco yam.jpeg";
import stockfish from "@/assets/products/Stockfish_ okporoko_ price per.jpeg";
import bombayDuck from "@/assets/products/Bombay duck_.jpeg";
import scentLeaf from "@/assets/products/scent leaves.jpeg";

export type ProductCategory =
  | "Grains"
  | "Spices & Seasonings"
  | "Proteins"
  | "Oils & Condiments"
  | "Legumes";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: ProductCategory;
}

export const categories: ProductCategory[] = [
  "Grains",
  "Spices & Seasonings",
  "Proteins",
  "Oils & Condiments",
  "Legumes",
];

export const products: Product[] = [
  {
    id: "premium-egusi",
    name: "Premium Egusi (Painter)",
    price: 15000,
    description:
      "High-quality whole egusi (melon seeds) - finely hand-peeled for authentic egusi soup",
    image: egusi,
    category: "Proteins",
  },
  {
    id: "premium-ogbono",
    name: "Premium Ogbono (Painter)",
    price: 45000,
    description:
      "High-quality ogbono (bush mango) powder - perfect for authentic ogbono soup with smooth, rich texture",
    image: ogbono,
    category: "Proteins",
  },
  {
    id: "long-grain-rice",
    name: "Fresh Onions (Painter)",
    price: 10000,
    description:
      "Fresh, quality onions - essential vegetable for all African soups and stews",
    image: onions,
    category: "Legumes",
  },
  {
    id: "basmati-rice",
    name: "Oven Dried Snails (Pieces)",
    price: 30000,
    description:
      "Premium oven dried snails - authentic protein for traditional soups and special dishes",
    image: snails,
    category: "Proteins",
  },
  {
    id: "dried-locust-beans",
    name: "Dried Crayfish (Painter)",
    price: 15000,
    description:
      "Premium dried crayfish - essential protein for soups and traditional stews",
    image: crayfish,
    category: "Proteins",
  },
  {
    id: "frozen-shrimp",
    name: "Dried Catfish (4 Pieces)",
    price: 18000,
    description:
      "High-quality dried catfish for authentic seafood soups and meals",
    image: catfish,
    category: "Proteins",
  },
  {
    id: "palm-oil",
    name: "Red Palm Oil (25 liter)",
    price: 60000,
    description:
      "Pure, quality red palm oil - the heart of authentic African cooking",
    image: redOil,
    category: "Oils & Condiments",
  },
  {
    id: "vegetable-oil",
    name: "Dried Bitter Leaf (1kg)",
    price: 4000,
    description:
      "Authentic dried bitter leaf (onugbu) - perfect for traditional African soups",
    image: bitterLeaf,
    category: "Spices & Seasonings",
  },
  {
    id: "pepperspice-mix",
    name: "Tiger Nut (Painter)",
    price: 10000,
    description:
      "Premium tiger nut (chufa) - nutritious and authentic African legume for snacks and traditional dishes",
    image: tigerNut,
    category: "Legumes",
  },
  {
    id: "crayfish",
    name: "Dry Cocoyam (1kg)",
    price: 15000,
    description:
      "Fresh, quality cocoyam - versatile tuber for soups, porridges and traditional meals",
    image: cocoyam,
    category: "Legumes",
  },
  {
    id: "stockfish",
    name: "Stockfish (Pieces)",
    price: 10000,
    description:
      "Premium dried stockfish (okporoko) - essential for authentic soups and stews",
    image: stockfish,
    category: "Proteins",
  },
  {
    id: "scent-leaf",
    name: "Scent Leaf (1kg)",
    price: 4000,
    description:
      "Dried scent leaf (basil) - aromatic and flavorful herb for authentic African soups and stews",
    image: scentLeaf,
    category: "Spices & Seasonings",
  },
];

export const formatPrice = (price: number): string => {
  return `₦${price.toLocaleString()}`;
};

export const generateWhatsAppLink = (
  product: Product,
  quantity: number = 1,
): string => {
  const phoneNumber = "2348062838990";
  const message = encodeURIComponent(
    `Hello Blessed KK 👋\n\nI'd like to order:\n\nProduct: ${product.name}\nPrice: ${formatPrice(product.price)}\nQuantity: ${quantity}\n\nPlease confirm availability and delivery time. Thank you! 🙏`,
  );
  return `https://wa.me/${phoneNumber}?text=${message}`;
};
