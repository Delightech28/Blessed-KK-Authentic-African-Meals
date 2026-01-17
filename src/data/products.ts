// Product data for SweetCrust Bakery
import chocolateCake from "@/assets/products/chocolate-cake.jpg";
import glazedDoughnuts from "@/assets/products/glazed-doughnuts.jpg";
import meatPies from "@/assets/products/meat-pies.jpg";
import cupcakes from "@/assets/products/cupcakes.jpg";
import cookies from "@/assets/products/cookies.jpg";
import redVelvetCake from "@/assets/products/red-velvet-cake.jpg";

export type ProductCategory = "Cakes" | "Doughnuts" | "Meat Pies" | "Cupcakes" | "Cookies";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: ProductCategory;
}

export const categories: ProductCategory[] = ["Cakes", "Doughnuts", "Meat Pies", "Cupcakes", "Cookies"];

export const products: Product[] = [
  {
    id: "chocolate-cake",
    name: "Classic Chocolate Cake",
    price: 4500,
    description: "Rich, moist chocolate cake with creamy ganache frosting",
    image: chocolateCake,
    category: "Cakes",
  },
  {
    id: "red-velvet-cake",
    name: "Red Velvet Cake",
    price: 5000,
    description: "Velvety red cake with smooth cream cheese frosting",
    image: redVelvetCake,
    category: "Cakes",
  },
  {
    id: "glazed-doughnuts",
    name: "Glazed Doughnuts (6pcs)",
    price: 2500,
    description: "Soft, fluffy doughnuts with sweet glaze and colorful sprinkles",
    image: glazedDoughnuts,
    category: "Doughnuts",
  },
  {
    id: "chocolate-doughnuts",
    name: "Chocolate Doughnuts (6pcs)",
    price: 2800,
    description: "Irresistible doughnuts dipped in rich chocolate",
    image: glazedDoughnuts,
    category: "Doughnuts",
  },
  {
    id: "classic-meat-pies",
    name: "Classic Meat Pies (4pcs)",
    price: 2000,
    description: "Golden, flaky pastry filled with savory seasoned beef",
    image: meatPies,
    category: "Meat Pies",
  },
  {
    id: "chicken-pies",
    name: "Chicken Pies (4pcs)",
    price: 2200,
    description: "Crispy pies stuffed with tender chicken and herbs",
    image: meatPies,
    category: "Meat Pies",
  },
  {
    id: "vanilla-cupcakes",
    name: "Vanilla Cupcakes (6pcs)",
    price: 3000,
    description: "Light vanilla cupcakes with swirled buttercream",
    image: cupcakes,
    category: "Cupcakes",
  },
  {
    id: "strawberry-cupcakes",
    name: "Strawberry Cupcakes (6pcs)",
    price: 3200,
    description: "Fresh strawberry cupcakes with pink frosting",
    image: cupcakes,
    category: "Cupcakes",
  },
  {
    id: "chocolate-chip-cookies",
    name: "Chocolate Chip Cookies (12pcs)",
    price: 1800,
    description: "Chewy cookies loaded with chocolate chips",
    image: cookies,
    category: "Cookies",
  },
  {
    id: "butter-cookies",
    name: "Butter Cookies (12pcs)",
    price: 1500,
    description: "Classic buttery cookies that melt in your mouth",
    image: cookies,
    category: "Cookies",
  },
];

export const formatPrice = (price: number): string => {
  return `₦${price.toLocaleString()}`;
};

export const generateWhatsAppLink = (product: Product, quantity: number = 1): string => {
  const phoneNumber = "2348012345678"; // Replace with actual phone number
  const message = encodeURIComponent(
    `Hello SweetCrust Bakery 👋\n\nI'd like to order:\n\nProduct: ${product.name}\nPrice: ${formatPrice(product.price)}\nQuantity: ${quantity}\n\nPlease confirm availability. Thank you! 🍰`
  );
  return `https://wa.me/${phoneNumber}?text=${message}`;
};
