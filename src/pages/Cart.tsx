
import React from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    clearCart 
  } = useCart();

  const handleCheckout = () => {
    toast.success("Order placed successfully!");
    clearCart();
  };

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      
      <div className="pt-24 px-4 pb-20">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gaming-light">Your Cart</h1>
            
            <Link to="/customize">
              <Button variant="outline" className="border-gaming-blue/50 hover:bg-gaming-blue/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
          
          {cartItems.length === 0 ? (
            <div className="gaming-card p-12 text-center">
              <div className="mb-6 flex justify-center">
                <ShoppingBag className="h-20 w-20 text-gaming-purple/50" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-400 mb-8">
                Looks like you haven't added any parts to your cart yet.
              </p>
              <Link to="/customize">
                <Button className="gaming-btn">
                  Start Building Your PC
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="gaming-card overflow-hidden">
                  <div className="bg-gaming-purple/20 p-4">
                    <div className="grid grid-cols-5 gap-4 text-sm font-semibold">
                      <div className="col-span-2">Product</div>
                      <div className="text-center">Price</div>
                      <div className="text-center">Quantity</div>
                      <div className="text-right">Subtotal</div>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gaming-purple/30">
                    {cartItems.map((item) => (
                      <div key={item.part.id} className="p-4">
                        <div className="grid grid-cols-5 gap-4 items-center">
                          <div className="col-span-2 flex items-center space-x-4">
                            <img 
                              src={item.part.image} 
                              alt={item.part.name}
                              className="w-16 h-16 object-contain"
                            />
                            <div>
                              <h3 className="font-medium">{item.part.name}</h3>
                              <p className="text-sm text-gray-400">{item.part.type}</p>
                            </div>
                          </div>
                          
                          <div className="text-center">
                            ₹{item.part.price.toFixed(2)}
                          </div>
                          
                          <div className="flex items-center justify-center">
                            <button
                              className="p-1 rounded-l border border-gaming-purple/30 hover:bg-gaming-purple/20"
                              onClick={() => updateQuantity(item.part.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            
                            <span className="px-4 py-1 border-t border-b border-gaming-purple/30 bg-gaming-dark">
                              {item.quantity}
                            </span>
                            
                            <button
                              className="p-1 rounded-r border border-gaming-purple/30 hover:bg-gaming-purple/20"
                              onClick={() => updateQuantity(item.part.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          <div className="flex items-center justify-end">
                            <span className="font-medium">
                              ₹{(item.part.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              className="ml-4 text-gray-400 hover:text-red-500"
                              onClick={() => removeFromCart(item.part.id)}
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 border-t border-gaming-purple/30 flex justify-between">
                    <Button
                      variant="outline"
                      className="text-red-500 border-red-500/30 hover:bg-red-500/10"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <div className="gaming-card p-6">
                  <h2 className="text-xl font-semibold mb-6 pb-4 border-b border-gaming-purple/30">
                    Order Summary
                  </h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Subtotal</span>
                      <span>₹{getTotalPrice().toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-400">Shipping</span>
                      <span>Free</span>
                    </div>
                    
                    <div className="flex justify-between text-xl font-semibold pt-4 border-t border-gaming-purple/30">
                      <span>Total</span>
                      <span className="text-gaming-blue">₹{getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button
                    className="gaming-btn w-full text-lg py-6"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
