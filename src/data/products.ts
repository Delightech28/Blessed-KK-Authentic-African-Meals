// Product data for Blessed KK Kitchen
import chocolateCake from "@/assets/products/chocolate-cake.jpg";
import glazedDoughnuts from "@/assets/products/glazed-doughnuts.jpg";
import meatPies from "@/assets/products/meat-pies.jpg";
import cupcakes from "@/assets/products/cupcakes.jpg";
import cookies from "@/assets/products/cookies.jpg";
import redVelvetCake from "@/assets/products/red-velvet-cake.jpg";

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
    id: "premium-garri",
    name: "Premium White Garri (5kg)",
    price: 3500,
    description:
      "Fine, quality white garri made from cassava - perfect for jollof and soups",
    image: chocolateCake,
    category: "Grains",
  },
  {
    id: "yellow-garri",
    name: "Yellow Garri (5kg)",
    price: 3800,
    description:
      "Authentic yellow garri with rich flavor, ideal for traditional dishes",
    image: redVelvetCake,
    category: "Grains",
  },
  {
    id: "long-grain-rice",
    name: "Long Grain Rice (10kg)",
    price: 8500,
    description: "Premium long grain parboiled rice, fluffy when cooked",
    image: glazedDoughnuts,
    category: "Grains",
  },
  {
    id: "basmati-rice",
    name: "Basmati Rice (5kg)",
    price: 7200,
    description:
      "Fragrant basmati rice for special occasions and quality meals",
    image: glazedDoughnuts,
    category: "Grains",
  },
  {
    id: "dried-locust-beans",
    name: "Dried Locust Beans (500g)",
    price: 2000,
    description: "Authentic iru - essential for soups and traditional stews",
    image: meatPies,
    category: "Proteins",
  },
  {
    id: "frozen-shrimp",
    name: "Frozen Shrimp (500g)",
    price: 4500,
    description: "High-quality frozen shrimp for seafood meals",
    image: meatPies,
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
