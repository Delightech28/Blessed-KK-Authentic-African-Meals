import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Adaeze O.",
    text: "The best chocolate cake I've ever had! So moist and delicious. My family loved it for my birthday celebration.",
    rating: 5,
  },
  {
    id: "2",
    name: "Chidi M.",
    text: "Their meat pies are incredible - crispy outside, perfectly seasoned inside. I order every weekend now!",
    rating: 5,
  },
  {
    id: "3",
    name: "Funke A.",
    text: "Fresh doughnuts delivered right to my door. The kids were so happy! Will definitely order again.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bakery-section bg-card">
      <div className="bakery-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from our happy customers!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 shadow-warm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-foreground mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <p className="font-body font-semibold text-primary">
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
