
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold text-memotag-purple">MemoTag</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            onClick={() => scrollToSection("problem")}
            className="text-gray-700 hover:text-memotag-purple cursor-pointer transition-colors"
          >
            Problem
          </a>
          <a
            onClick={() => scrollToSection("solution")}
            className="text-gray-700 hover:text-memotag-purple cursor-pointer transition-colors"
          >
            Solution
          </a>
          <a
            onClick={() => scrollToSection("traction")}
            className="text-gray-700 hover:text-memotag-purple cursor-pointer transition-colors"
          >
            Traction
          </a>
          <Button 
            onClick={() => scrollToSection("cta")}
            className="bg-memotag-purple hover:bg-memotag-darkPurple text-white"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a
              onClick={() => scrollToSection("problem")}
              className="text-gray-700 hover:text-memotag-purple cursor-pointer transition-colors py-2"
            >
              Problem
            </a>
            <a
              onClick={() => scrollToSection("solution")}
              className="text-gray-700 hover:text-memotag-purple cursor-pointer transition-colors py-2"
            >
              Solution
            </a>
            <a
              onClick={() => scrollToSection("traction")}
              className="text-gray-700 hover:text-memotag-purple cursor-pointer transition-colors py-2"
            >
              Traction
            </a>
            <Button 
              onClick={() => scrollToSection("cta")}
              className="bg-memotag-purple hover:bg-memotag-darkPurple text-white w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
