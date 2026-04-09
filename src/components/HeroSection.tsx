import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Truck, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bakery.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Authentic African foodstuffs and ingredients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary/20 text-primary font-body font-medium px-4 py-2 rounded-full mb-6">
              🍚 Authentic African Foodstuffs
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6"
          >
            Premium African Meals{" "}
            <span className="text-primary">Made With Authenticity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-body text-muted-foreground mb-8"
          >
            Garri, rice, beans, palm oil, spices & more — authentic African
            ingredients sourced with care for your kitchen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild variant="cta" size="lg">
              <Link to="/menu">Order Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/menu">View Menu</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md py-4 md:py-6"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 text-foreground">
              <Truck className="text-primary" size={24} />
              <span className="font-body font-medium">Delivery Available</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Sparkles className="text-primary" size={24} />
              <span className="font-body font-medium">Fresh Daily</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Heart className="text-primary" size={24} />
              <span className="font-body font-medium">Quality Ingredients</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
