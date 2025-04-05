
import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { partCategories, getPartsByType, pcParts } from "../data/parts";
import { PartType } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { Plus, ShoppingCart, Check, Info, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Customize = () => {
  const [selectedCategory, setSelectedCategory] = useState(partCategories[0].id as PartType['type']);
  const [selectedParts, setSelectedParts] = useState<Record<string, PartType>>({});
  const [totalPrice, setTotalPrice] = useState(0);
  const { addToCart, getCartTotal } = useCart();
  
  const parts = getPartsByType(selectedCategory);
  
  // Calculate total price whenever selected parts change
  useEffect(() => {
    const newTotal = Object.values(selectedParts).reduce((sum, part) => sum + part.price, 0);
    setTotalPrice(newTotal);
  }, [selectedParts]);
  
  // Get real-time cart total
  const cartTotal = getCartTotal();
  
  const handlePartSelect = (part: PartType) => {
    setSelectedParts(prev => ({
      ...prev,
      [part.type]: part
    }));
    toast.success(`${part.name} selected`);
  };
  
  const handleAddAllToCart = () => {
    const selectedPartsArray = Object.values(selectedParts);
    
    if (selectedPartsArray.length === 0) {
      toast.error("No parts selected");
      return;
    }
    
    selectedPartsArray.forEach(part => {
      addToCart(part);
    });
    
    toast.success("All parts added to cart!");
  };
  
  const selectedPartsCount = Object.keys(selectedParts).length;
  const allPartCategories = partCategories.length;
  const completionPercentage = Math.round((selectedPartsCount / allPartCategories) * 100);

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gaming-light mb-4">Build Your Nova X</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select components for your custom performance laptop. Each choice affects performance, aesthetics, and price.
            </p>
          </div>
          
          {/* Main layout with sidebar and content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left sidebar - Categories */}
            <div className="lg:col-span-3 space-y-4">
              <div className="sticky top-24">
                <div className="gaming-card p-4 mb-6">
                  <h3 className="text-lg font-medium mb-4">Configuration Progress</h3>
                  <div className="w-full bg-gaming-dark/50 rounded-full h-2.5 mb-2">
                    <div 
                      className="bg-gaming-purple h-2.5 rounded-full transition-all duration-500 ease-in-out" 
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gaming-light/70">
                    {selectedPartsCount} of {allPartCategories} categories selected
                  </p>
                  
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gaming-light/70">Current Configuration</span>
                      <span className="text-xl font-bold text-gaming-light">₹{totalPrice.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2 border-t border-gaming-purple/20">
                      <span className="text-sm text-gaming-light/70">Cart Total</span>
                      <span className="text-xl font-bold text-gaming-green">₹{cartTotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2 border-t border-gaming-purple/20">
                      <span className="text-sm text-gaming-light/70">Combined Total</span>
                      <span className="text-xl font-bold text-gaming-blue">₹{(totalPrice + cartTotal).toFixed(2)}</span>
                    </div>
                    
                    <Button
                      onClick={handleAddAllToCart}
                      disabled={selectedPartsCount === 0}
                      className="w-full gaming-btn mt-4"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    
                    {selectedPartsCount > 0 && (
                      <Link to="/cart" className="w-full block">
                        <Button className="w-full gaming-btn-secondary">
                          View Cart
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
                
                <Card className="gaming-card">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium mb-4">Components</h3>
                    <div className="space-y-1">
                      {partCategories.map((category) => {
                        const isSelected = selectedParts[category.id];
                        return (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id as PartType['type'])}
                            className={`w-full text-left p-3 rounded-md transition-all flex justify-between items-center ${
                              selectedCategory === category.id
                                ? "bg-gaming-purple/20 text-gaming-light"
                                : "hover:bg-gaming-purple/10 text-gaming-light/70"
                            } ${isSelected ? "border-l-2 border-gaming-green" : ""}`}
                          >
                            <span className="flex items-center">
                              {category.name}
                              {isSelected && (
                                <span className="ml-2 inline-flex items-center bg-gaming-green/20 text-gaming-green text-xs px-2 py-0.5 rounded-full">
                                  <Check className="h-3 w-3 mr-1" />
                                  Selected
                                </span>
                              )}
                            </span>
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Right content - Parts Selection */}
            <div className="lg:col-span-9">
              <Card className="gaming-card overflow-hidden">
                <div className="p-6 border-b border-gaming-purple/20">
                  <h2 className="text-2xl font-bold">{partCategories.find(cat => cat.id === selectedCategory)?.name}</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Select the {partCategories.find(cat => cat.id === selectedCategory)?.name.toLowerCase()} for your build
                  </p>
                </div>
                
                <div className="divide-y divide-gaming-purple/10">
                  {parts.map((part) => (
                    <div 
                      key={part.id} 
                      className={`p-6 transition-colors hover:bg-gaming-purple/5 ${
                        selectedParts[part.type]?.id === part.id 
                          ? "bg-gaming-green/5 border-l-4 border-gaming-green" 
                          : "border-l-4 border-transparent"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row items-start md:items-center">
                        <div className="w-full md:w-40 flex-shrink-0 mb-4 md:mb-0">
                          <img 
                            src={part.image} 
                            alt={part.name}
                            className="w-32 h-32 object-contain mx-auto"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold mb-2">{part.name}</h3>
                          
                          <div className="flex items-start mb-4">
                            <Info className="h-4 w-4 text-gaming-blue mt-1 mr-2 flex-shrink-0" />
                            <p className="text-sm text-gray-400">{part.description}</p>
                          </div>
                          
                          <div className="flex items-center text-gaming-light/70 text-sm">
                            <span className="mr-4">Type: {part.type}</span>
                            <span>ID: {part.id}</span>
                          </div>
                        </div>
                        
                        <div className="md:w-48 flex-shrink-0 mt-4 md:mt-0 flex md:flex-col items-center md:items-end justify-between w-full">
                          <span className="text-2xl font-bold text-gaming-blue">₹{part.price.toFixed(2)}</span>
                          
                          <div className="flex space-x-2 mt-2">
                            <Button
                              className={`gaming-btn ${
                                selectedParts[part.type]?.id === part.id ? "bg-gaming-green" : ""
                              }`}
                              onClick={() => handlePartSelect(part)}
                            >
                              {selectedParts[part.type]?.id === part.id ? (
                                <>
                                  <Check className="mr-2 h-4 w-4" />
                                  Selected
                                </>
                              ) : (
                                "Select"
                              )}
                            </Button>
                            
                            <Button 
                              variant="outline" 
                              className="border-gaming-purple/50 hover:bg-gaming-purple/20"
                              onClick={() => addToCart(part)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
