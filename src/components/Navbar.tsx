import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, Search, Heart, User } from "lucide-react";
import Chatbot from "./ChatBot";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#FAF7F2] border-b border-[#E2D5C3] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-[#8B4513]" />
            <span className="ml-2 text-2xl font-serif text-[#8B4513]">
              StitchLoop
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-[#8B4513] font-semibold"
                  : "text-[#5C4033] hover:text-[#8B4513]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`transition-colors ${
                isActive("/shop")
                  ? "text-[#8B4513] font-semibold"
                  : "text-[#5C4033] hover:text-[#8B4513]"
              }`}
            >
              Shop
            </Link>
            <Link
              to="/exchange"
              className={`transition-colors ${
                isActive("/exchange")
                  ? "text-[#8B4513] font-semibold"
                  : "text-[#5C4033] hover:text-[#8B4513]"
              }`}
            >
              Exchange
            </Link>
            <Link
              to="/virtual-try-on"
              className={`transition-colors ${
                isActive("/virtual-try-on")
                  ? "text-[#8B4513] font-semibold"
                  : "text-[#5C4033] hover:text-[#8B4513]"
              }`}
            >
              Try-On
            </Link>
            <Link
              to="/blog"
              className={`transition-colors ${
                isActive("/blog")
                  ? "text-[#8B4513] font-semibold"
                  : "text-[#5C4033] hover:text-[#8B4513]"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/challenges"
              className={`transition-colors ${
                isActive("/challenges")
                  ? "text-[#8B4513] font-semibold"
                  : "text-[#5C4033] hover:text-[#8B4513]"
              }`}
            >
              Challenges
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigate("/search")}
              className={`p-2 rounded-full transition-colors ${
                isActive("/search") ? "bg-[#E2D5C3]" : "hover:bg-[#E2D5C3]"
              }`}
            >
              <Search
                className={`h-5 w-5 ${
                  isActive("/search") ? "text-[#8B4513]" : "text-[#5C4033]"
                }`}
              />
            </button>
            <button
              onClick={() => navigate("/wishlist")}
              className={`p-2 rounded-full transition-colors ${
                isActive("/wishlist") ? "bg-[#E2D5C3]" : "hover:bg-[#E2D5C3]"
              }`}
            >
              <Heart
                className={`h-5 w-5 ${
                  isActive("/wishlist") ? "text-[#8B4513]" : "text-[#5C4033]"
                }`}
              />
            </button>
            <button
              onClick={() => navigate("/profile")}
              className={`p-2 rounded-full transition-colors ${
                isActive("/profile") ? "bg-[#E2D5C3]" : "hover:bg-[#E2D5C3]"
              }`}
            >
              <User
                className={`h-5 w-5 ${
                  isActive("/profile") ? "text-[#8B4513]" : "text-[#5C4033]"
                }`}
              />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-[#5C4033] hover:bg-[#E2D5C3] transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleNavigation("/shop")}
              className={`block px-3 py-2 rounded-md w-full text-start ${
                isActive("/shop")
                  ? "bg-[#E2D5C3] text-[#8B4513] font-semibold"
                  : "text-[#5C4033] hover:bg-[#E2D5C3]"
              }`}
            >
              Shop
            </button>
            <button
              onClick={() => handleNavigation("/exchange")}
              className={`block px-3 py-2 rounded-md w-full text-start ${
                isActive("/exchange")
                  ? "bg-[#E2D5C3] text-[#8B4513] font-semibold"
                  : "text-[#5C4033] hover:bg-[#E2D5C3]"
              }`}
            >
              Exchange
            </button>
            <button
              onClick={() => handleNavigation("/virtual-try-on")}
              className={`block px-3 py-2 rounded-md w-full text-start ${
                isActive("/virtual-try-on")
                  ? "bg-[#E2D5C3] text-[#8B4513] font-semibold"
                  : "text-[#5C4033] hover:bg-[#E2D5C3]"
              }`}
            >
              Tryon
            </button>
            <button
              onClick={() => handleNavigation("/blog")}
              className={`block px-3 py-2 rounded-md w-full text-start ${
                isActive("/blog")
                  ? "bg-[#E2D5C3] text-[#8B4513] font-semibold"
                  : "text-[#5C4033] hover:bg-[#E2D5C3]"
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => handleNavigation("/challenges")}
              className={`block px-3 py-2 rounded-md w-full text-start ${
                isActive("/challenges")
                  ? "bg-[#E2D5C3] text-[#8B4513] font-semibold"
                  : "text-[#5C4033] hover:bg-[#E2D5C3]"
              }`}
            >
              Challenges
            </button>
            <button
              onClick={() => handleNavigation("/search")}
              className={`block px-3 py-2 rounded-md w-full text-start ${
                isActive("/search")
                  ? "bg-[#E2D5C3] text-[#8B4513] font-semibold"
                  : "text-[#5C4033] hover:bg-[#E2D5C3]"
              }`}
            >
              Search
            </button>
            <button
              onClick={() => handleNavigation("/wishlist")}
              className={`block px-3 py-2 rounded-md w-full text-start ${
                isActive("/wishlist")
                  ? "bg-[#E2D5C3] text-[#8B4513] font-semibold"
                  : "text-[#5C4033] hover:bg-[#E2D5C3]"
              }`}
            >
              Wishlist
            </button>
            <button
              onClick={() => handleNavigation("/profile")}
              className={`block px-3 py-2 rounded-md w-full text-start ${
                isActive("/profile")
                  ? "bg-[#E2D5C3] text-[#8B4513] font-semibold"
                  : "text-[#5C4033] hover:bg-[#E2D5C3]"
              }`}
            >
              Profile
            </button>
          </div>
        </div>
      )}
      <Chatbot />
    </nav>
  );
};

export default Navbar;
