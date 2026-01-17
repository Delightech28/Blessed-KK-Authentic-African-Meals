import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const FeaturedProducts = () => {
  // Show first 4 products as featured
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="bakery-section">
      <div className="bakery-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Bestsellers
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved treats — freshly baked with the finest ingredients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg">
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
