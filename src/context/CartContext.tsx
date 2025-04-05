
import React, { createContext, useState, useContext, ReactNode } from "react";
import { toast } from "sonner";

export type PartType = {
  id: string;
  name: string;
  type: 'cpu' | 'gpu' | 'ram' | 'storage' | 'case' | 'motherboard' | 'powersupply' | 'cooling';
  price: number;
  image: string;
  description: string;
};

type CartItem = {
  part: PartType;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (part: PartType) => void;
  removeFromCart: (partId: string) => void;
  clearCart: () => void;
  updateQuantity: (partId: string, quantity: number) => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
  getCartTotal: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (part: PartType) => {
    setCartItems((prevItems) => {
      // Check if item already exists in cart
      const existingItem = prevItems.find((item) => item.part.id === part.id);
      
      if (existingItem) {
        // If exists, update quantity
        const updatedItems = prevItems.map((item) =>
          item.part.id === part.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        toast.success(`Added another ${part.name} to your cart`);
        return updatedItems;
      } else {
        // If new item, add to cart
        toast.success(`${part.name} added to your cart`);
        return [...prevItems, { part, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (partId: string) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find(item => item.part.id === partId);
      if (itemToRemove) {
        toast.info(`${itemToRemove.part.name} removed from cart`);
      }
      return prevItems.filter((item) => item.part.id !== partId);
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info("Cart cleared");
  };

  const updateQuantity = (partId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(partId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.part.id === partId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.part.price * item.quantity,
      0
    );
  };
  
  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };
  
  // New function to get cart total for real-time display
  const getCartTotal = () => {
    return getTotalPrice();
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        getTotalPrice,
        getItemCount,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
