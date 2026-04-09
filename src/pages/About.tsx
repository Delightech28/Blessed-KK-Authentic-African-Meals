import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import aboutBaker from "@/assets/about-baker.jpg";

const About = () => {
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
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body text-muted-foreground max-w-2xl mx-auto"
            >
              Our story is rooted in bringing authentic African culinary
              traditions and premium ingredients to every home.
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="bakery-section">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-hover">
                  <img
                    src={aboutBaker}
                    alt="Our baker at work"
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full -z-10" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Serving Quality Since{" "}
                  <span className="text-primary">2015</span>
                </h2>
                <div className="space-y-4 font-body text-muted-foreground">
                  <p>
                    Blessed KK Kitchen was born from a simple dream: to bring
                    authentic African foodstuffs and meal ingredients to every
                    home. What started in a small shop has grown into a trusted
                    supplier serving hundreds of satisfied families.
                  </p>
                  <p>
                    Every day, we carefully source and curate the finest African
                    ingredients — from premium garri and quality rice to
                    aromatic spices and palm oil. Each product is selected with
                    care and delivered fresh to your doorstep.
                  </p>
                  <p>
                    We believe that quality ingredients bring authentic flavors
                    and families together. Whether it's everyday cooking or
                    special family meals, we're honored to be part of your
                    culinary journey.
                  </p>
                </div>

                {/* Values */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-card rounded-2xl shadow-card">
                    <div className="text-3xl font-heading font-bold text-primary">
                      100%
                    </div>
                    <div className="text-sm font-body text-muted-foreground">
                      Fresh Daily
                    </div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-2xl shadow-card">
                    <div className="text-3xl font-heading font-bold text-primary">
                      5K+
                    </div>
                    <div className="text-sm font-body text-muted-foreground">
                      Happy Customers
                    </div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-2xl shadow-card">
                    <div className="text-3xl font-heading font-bold text-primary">
                      9+
                    </div>
                    <div className="text-sm font-body text-muted-foreground">
                      Years of Service
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="bakery-section bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Promise to You
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-background rounded-2xl shadow-warm">
                  <div className="text-4xl mb-4">🌾</div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Quality Ingredients
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    We use only the finest flour, butter, and fresh produce in
                    every recipe.
                  </p>
                </div>
                <div className="p-6 bg-background rounded-2xl shadow-warm">
                  <div className="text-4xl mb-4">⏰</div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Fresh Every Day
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Our pastries are baked fresh each morning, never day-old or
                    frozen.
                  </p>
                </div>
                <div className="p-6 bg-background rounded-2xl shadow-warm">
                  <div className="text-4xl mb-4">💛</div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Made With Love
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Every pastry is crafted with care by our passionate baking
                    team.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
