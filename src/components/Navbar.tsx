import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Home, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";
const Navbar: React.FC = () => {
  const {
    getItemCount
  } = useCart();
  const itemCount = getItemCount();
  return <nav className="bg-gaming-dark border-b border-gaming-purple/30 py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-gaming-purple rounded-full flex items-center justify-center">
            <Settings className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gaming-purple to-gaming-blue bg-clip-text text-transparent">NOVA X</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <Link to="/" className="flex items-center space-x-1 text-gaming-light hover:text-gaming-blue transition-colors">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link to="/customize" className="flex items-center space-x-1 text-gaming-light hover:text-gaming-blue transition-colors">
            <Settings className="h-4 w-4" />
            <span>Customize</span>
          </Link>
          <Link to="/cart" className="flex items-center space-x-1 text-gaming-light hover:text-gaming-blue transition-colors">
            <div className="relative">
              <ShoppingCart className="h-4 w-4" />
              {itemCount > 0 && <Badge className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-gaming-green text-gaming-dark">
                  {itemCount}
                </Badge>}
            </div>
            <span>Cart</span>
          </Link>
        </div>
        
        <div className="flex md:hidden items-center">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gaming-light" />
            {itemCount > 0 && <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-[10px] bg-gaming-green text-gaming-dark">
                {itemCount}
              </Badge>}
          </Link>
        </div>
      </div>
    </nav>;
};
export default Navbar;