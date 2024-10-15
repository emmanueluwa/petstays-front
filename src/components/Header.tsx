import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import Logout from "./Logout";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-teal-600 py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl md:text-3xl text-white font-bold tracking-tight hover:text-teal-100 transition-colors"
          >
            PeteineStays.com
          </Link>

          <nav className="hidden md:flex space-x-4">
            {isLoggedIn ? (
              <>
                <NavLink to="/my-bookings">My Bookings</NavLink>
                <NavLink to="/my-places">My Places</NavLink>
                <Logout />
              </>
            ) : (
              <Button
                asChild
                variant="secondary"
                className="bg-white text-teal-600 hover:bg-teal-100"
              >
                <Link to="/login">Login</Link>
              </Button>
            )}
          </nav>

          <Button
            variant="ghost"
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-2">
            {isLoggedIn ? (
              <>
                <NavLink to="/my-bookings" onClick={toggleMenu}>
                  My Bookings
                </NavLink>
                <NavLink to="/my-places" onClick={toggleMenu}>
                  My Places
                </NavLink>
                <Logout onClick={toggleMenu} />
              </>
            ) : (
              <Button
                asChild
                variant="secondary"
                className="bg-white text-teal-600 hover:bg-teal-100"
                onClick={toggleMenu}
              >
                <Link to="/login">Login</Link>
              </Button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    className="text-white font-semibold hover:text-teal-100 transition-colors px-3 py-2 rounded-md hover:bg-teal-500"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
