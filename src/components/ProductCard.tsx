import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Product, formatPrice, generateWhatsAppLink } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bakery-card overflow-hidden group"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-body font-semibold text-sm shadow-lg">
          {formatPrice(product.price)}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <span className="text-xs font-body font-medium text-primary uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="font-heading font-semibold text-lg text-foreground mt-1 mb-2">
          {product.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* WhatsApp Order Button */}
        <a
          href={generateWhatsAppLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn w-full justify-center text-sm"
        >
          <MessageCircle size={18} />
          Order on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};
