import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import Logout from "./Logout";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-teal-600 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">PeteineStays.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-teal-400"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-teal-400"
                to="/my-places"
              >
                My Places
              </Link>
              <Logout />
            </>
          ) : (
            <Link
              to="/login"
              className="flex items-center bg-white text-teal-400 px-3 font-bold hover:bg-teal-900"
            >
              Login
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
