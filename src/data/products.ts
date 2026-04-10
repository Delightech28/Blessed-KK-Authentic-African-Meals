// Product data for Blessed KK Kitchen
import egusi from "@/assets/products/Whole Egusi Fresh Authentic Hand peeled Nigeria Egusi _ Whole Melon seeds 100g.jpeg";
import ogbono from "@/assets/products/HOW TO REMOVE LUMPS IN OGBONO SOUP.jpeg";
import onions from "@/assets/products/Onions.jpeg";
import snails from "@/assets/products/Oven dried snails.jpeg";
import crayfish from "@/assets/products/50g freshly dried Crayfish (1).jpeg";
import catfish from "@/assets/products/Dried catfish.jpeg";
import cupcakes from "@/assets/products/cupcakes.jpg";
import cookies from "@/assets/products/cookies.jpg";

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
    name: "Premium Egusi (500g)",
    price: 3500,
    description:
      "High-quality whole egusi (melon seeds) - finely hand-peeled for authentic egusi soup",
    image: egusi,
    category: "Proteins",
  },
  {
    id: "premium-ogbono",
    name: "Premium Ogbono (500g)",
    price: 3800,
    description:
      "High-quality ogbono (bush mango) powder - perfect for authentic ogbono soup with smooth, rich texture",
    image: ogbono,
    category: "Proteins",
  },
  {
    id: "long-grain-rice",
    name: "Fresh Onions (1kg)",
    price: 8500,
    description:
      "Fresh, quality onions - essential vegetable for all African soups and stews",
    image: onions,
    category: "Legumes",
  },
  {
    id: "basmati-rice",
    name: "Oven Dried Snails (500g)",
    price: 7200,
    description:
      "Premium oven dried snails - authentic protein for traditional soups and special dishes",
    image: snails,
    category: "Proteins",
  },
  {
    id: "dried-locust-beans",
    name: "Dried Crayfish (500g)",
    price: 2000,
    description: "Premium dried crayfish - essential protein for soups and traditional stews",
    image: crayfish,
    category: "Proteins",
  },
  {
    id: "frozen-shrimp",
    name: "Dried Catfish (500g)",
    price: 4500,
    description: "High-quality dried catfish for authentic seafood soups and meals",
    image: catfish,
    category: "Proteins",
  },
  {
    id: "palm-oil",
    name: "Red Palm Oil (1 liter)",
    price: 3000,
    description:
      "Pure, quality red palm oil - the heart of authentic African cooking",
    image: cupcakes,
    category: "Oils & Condiments",
  },
  {
    id: "vegetable-oil",
    name: "Premium Vegetable Oil (2 liters)",
    price: 5500,
    description: "Refined vegetable oil for frying and cooking",
    image: cupcakes,
    category: "Oils & Condiments",
  },
  {
    id: "pepperspice-mix",
    name: "African Pepper & Spice Mix (200g)",
    price: 1800,
    description:
      "Authentic blend of peppers and spices for traditional seasonings",
    image: cookies,
    category: "Spices & Seasonings",
  },
  {
    id: "crayfish",
    name: "Dried Crayfish (300g)",
    price: 2200,
    description: "Premium dried crayfish for authentic flavor in soups",
    image: cookies,
    category: "Proteins",
  },
];

export const formatPrice = (price: number): string => {
  return `₦${price.toLocaleString()}`;
};

export const generateWhatsAppLink = (
  product: Product,
  quantity: number = 1,
): string => {
  const phoneNumber = "2349163854228";
  const message = encodeURIComponent(
    `Hello Blessed KK 👋\n\nI'd like to order:\n\nProduct: ${product.name}\nPrice: ${formatPrice(product.price)}\nQuantity: ${quantity}\n\nPlease confirm availability and delivery time. Thank you! 🙏`,
  );
  return `https://wa.me/${phoneNumber}?text=${message}`;
};
