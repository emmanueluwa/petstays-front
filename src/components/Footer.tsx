import { Link } from "react-router-dom";
// import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-600 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight hover:text-teal-200 transition-colors"
            >
              PeteineStays.com
            </Link>
            <p className="mt-2 text-sm text-teal-100">
              Find your perfect pet-friendly home
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/about-us"
                className="hover:text-teal-200 transition-colors"
              >
                About Us
              </Link>
              <Link to="/faq" className="hover:text-teal-200 transition-colors">
                FAQ
              </Link>
              <Link
                to="/contact"
                className="hover:text-teal-200 transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 hover:text-teal-200 transition-colors" />
              </a> */}
              <a
                href="https://x.com/fuloXXXX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 hover:text-teal-200 transition-colors" />
              </a>
              <a
                href="https://instagram.com/peteine_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 hover:text-teal-200 transition-colors" />
              </a>
              {/* <a href="mailto:info@peteinestays.com" aria-label="Email Us">
                <Mail className="w-6 h-6 hover:text-teal-200 transition-colors" />
              </a> */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-teal-500 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-teal-100">
            © {currentYear} PeteineStays.com. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0 space-x-4 text-sm">
            <Link
              to="/privacy"
              className="hover:text-teal-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-teal-200 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
