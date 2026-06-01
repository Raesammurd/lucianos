import { useState } from 'react';
import { menuItems, MenuItem } from '../data/menu';
import { useCart } from '../context/CartContext';
import FadeIn from './FadeIn';
import AnimatedHeading from './AnimatedHeading';

const categories = ["all", ...Array.from(new Set(menuItems.map(item => item.category)))];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { cart, addToCart, removeFromCart, userAllergies } = useCart();

  const filteredMenu = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    // Check allergies
    const containsAllergen = userAllergies.some(allergy => 
        item.ingredients.some(ing => ing.toLowerCase().includes(allergy.toLowerCase()))
    );
    
    if (containsAllergen) {
        const proceed = window.confirm(`⚠️ WARNING: ${item.name} contains ingredients you are allergic to. Are you sure you want to add this to your cart?`);
        if (!proceed) return;
    }

    addToCart(item);
  };

  const handleRemoveOne = (item: MenuItem) => {
    const index = cart.findIndex(c => c.id === item.id);
    if (index !== -1) {
      removeFromCart(index);
    }
  };

  return (
    <section id="menu" className="py-24 px-6 md:px-12 lg:px-16 bg-white text-black min-h-screen">
      <FadeIn>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <span style={{ fontFamily: "'Caveat', cursive" }} className="text-2xl text-black/60 mb-2">Taste the passion</span>
            <AnimatedHeading 
              text="Our Menu" 
              className="text-4xl md:text-5xl font-light mb-6"
            />
            <div className="h-1 w-24 bg-black/10"></div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-black text-white border-black shadow-[0_4px_14px_rgba(0,0,0,0.2)]' 
                    : 'border-black/20 text-black/70 hover:border-black/50 hover:bg-black/5'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item, i) => {
              const containsAllergen = userAllergies.some(allergy => 
                item.ingredients.some(ing => ing.toLowerCase().includes(allergy.toLowerCase()))
              );
              const cartCount = cart.filter(cartItem => cartItem.id === item.id).length;

              return (
                <FadeIn key={item.id} delay={100 * (i % 3)} duration={800}>
                  <div className="bg-white rounded-xl p-6 border border-black/10 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:border-black/30 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)]">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-medium">{item.name}</h3>
                      <span className="text-lg">£{item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-black/60 mb-6 flex-1 text-sm leading-relaxed">{item.desc}</p>
                    
                    {containsAllergen && (
                      <div className="bg-red-50 border border-red-200 text-red-600 text-xs p-3 rounded-lg mb-4">
                        ⚠️ Contains ingredients matching your allergies!
                      </div>
                    )}

                    {cartCount > 0 ? (
                      <div className="mt-auto flex items-center justify-between bg-black text-white py-2 px-3 rounded-lg shadow-sm">
                        <button 
                          onClick={() => handleRemoveOne(item)}
                          className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors text-xl font-light"
                        >
                          -
                        </button>
                        <span className="font-medium text-sm">{cartCount} in Cart</span>
                        <button 
                          onClick={() => handleAddToCart(item)}
                          className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors text-xl font-light"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => handleAddToCart(item)}
                        className="mt-auto w-full py-3 rounded-lg font-medium transition-all duration-300 shadow-sm bg-black/5 hover:bg-black text-black hover:text-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
