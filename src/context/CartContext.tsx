import { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem } from '../data/menu';

interface CartContextType {
  cart: MenuItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  userAllergies: string[];
  addAllergy: (allergy: string) => void;
  removeAllergy: (index: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [userAllergies, setUserAllergies] = useState<string[]>([]);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  const addAllergy = (allergy: string) => {
    if (!userAllergies.includes(allergy.toLowerCase())) {
      setUserAllergies((prev) => [...prev, allergy.toLowerCase()]);
    }
  };

  const removeAllergy = (index: number) => {
    setUserAllergies((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, userAllergies, addAllergy, removeAllergy }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
