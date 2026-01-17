import { motion } from "framer-motion";
import { MessageCircle, Phone, Instagram, MapPin, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Contact = () => {
  const whatsappLink = "https://wa.me/2348012345678?text=Hello%20SweetCrust%20Bakery%20%F0%9F%91%8B%0AI%20would%20like%20to%20make%20an%20order.";

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-28">
        {/* Hero */}
        <section className="bg-card py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body text-muted-foreground max-w-2xl mx-auto"
            >
              Ready to order? Get in touch with us — we'd love to hear from you!
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="bakery-section">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Main CTA - WhatsApp */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-8 md:p-12 shadow-hover"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#25D366] rounded-full mb-6">
                    <MessageCircle className="text-white" size={40} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    Order via WhatsApp
                  </h2>
                  <p className="font-body text-muted-foreground mb-8">
                    The fastest way to place your order! Send us a message and we'll respond within minutes.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn text-lg px-10 py-4"
                  >
                    <MessageCircle size={24} />
                    Chat on WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Phone */}
                <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                      Call Us
                    </h3>
                    <a href="tel:+2348012345678" className="font-body text-muted-foreground hover:text-primary transition-colors">
                      +234 801 234 5678
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Instagram className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                      Follow Us
                    </h3>
                    <a 
                      href="https://instagram.com/sweetcrustbakery" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      @sweetcrustbakery
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                      Visit Us
                    </h3>
                    <p className="font-body text-muted-foreground">
                      123 Bakery Street, Lekki Phase 1<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                      Opening Hours
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Monday - Saturday: 7am - 8pm<br />
                      Sunday: 9am - 6pm
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Delivery Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-primary/10 rounded-3xl p-8 text-center"
            >
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                🚚 Delivery & Pickup
              </h3>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                We deliver within Lagos! Delivery fees vary by location. Same-day delivery available for orders placed before 12pm. 
                Prefer to pick up? Visit our store during opening hours — your fresh pastries will be waiting!
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
