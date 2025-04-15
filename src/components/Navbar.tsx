
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
  };
  
  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-memotag-purple">
              PhotoShare
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-memotag-purple transition-colors">
              Home
            </Link>
            <Link to="/photos" className="text-gray-600 hover:text-memotag-purple transition-colors">
              Photos
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Avatar className="h-8 w-8 bg-memotag-purple text-white">
                  <AvatarFallback>{getInitials(user.email || "")}</AvatarFallback>
                </Avatar>
                <Button variant="ghost" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" 
                className="text-gray-600 hover:text-memotag-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link to="/photos" 
                className="text-gray-600 hover:text-memotag-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Photos
              </Link>
              
              {user ? (
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8 bg-memotag-purple text-white">
                      <AvatarFallback>{getInitials(user.email || "")}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">{user.email}</span>
                  </div>
                  <Button variant="outline" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button>Sign In</Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
