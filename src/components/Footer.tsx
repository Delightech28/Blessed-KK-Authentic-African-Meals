import { Link } from "react-router-dom";
import { Phone, Instagram, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Blessed KK Kitchen
            </h3>
            <p className="text-card/80 font-body">
              Freshly baked pastries made with love, quality ingredients, and a
              passion for perfection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 font-body">
              <li>
                <Link
                  to="/"
                  className="text-card/80 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-card/80 hover:text-primary transition-colors"
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-card/80 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-card/80 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 font-body">
              <li className="flex items-center gap-2 text-card/80">
                <Phone size={18} className="text-primary" />
                <span>+234 801 234 5678</span>
              </li>
              <li className="flex items-center gap-2 text-card/80">
                <Instagram size={18} className="text-primary" />
                <a
                  href="https://instagram.com/blessedkk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @blessedkk
                </a>
              </li>
              <li className="flex items-center gap-2 text-card/80">
                <MapPin size={18} className="text-primary" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/20 pt-8 text-center">
          <p className="text-card/60 font-body text-sm">
            © {new Date().getFullYear()} Blessed KK Kitchen. All rights
            reserved. Made with 🧡
          </p>
        </div>
      </div>
    </footer>
  );
};
