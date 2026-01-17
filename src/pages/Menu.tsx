import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, ProductCategory } from "@/data/products";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter((product) => product.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-28">
        {/* Header */}
        <section className="bg-card py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
            >
              Our Menu
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body text-muted-foreground max-w-2xl mx-auto"
            >
              Browse our delicious selection of freshly baked treats. Click any item to order directly via WhatsApp!
            </motion.p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bakery-section pb-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-5 py-2.5 rounded-full font-body font-medium transition-all duration-300 ${
                  activeCategory === "All"
                    ? "bg-primary text-primary-foreground shadow-warm"
                    : "bg-card text-foreground hover:bg-primary/10 shadow-card"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-body font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-warm"
                      : "bg-card text-foreground hover:bg-primary/10 shadow-card"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="font-body text-muted-foreground">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
