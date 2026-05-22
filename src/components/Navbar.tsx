import { useCart } from '../context/CartContext';

export default function Navbar({ onOpenCart }: { onOpenCart: () => void }) {
  const { cart } = useCart();

  return (
    <div className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-16 pt-6">
      <nav className="liquid-glass rounded-xl px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl font-semibold tracking-tight text-white">
          LUCIANO'S
        </div>
        
        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/90">
          <a href="#menu" className="hover:text-white transition-colors">Menu</a>
          <a href="#reservations" className="hover:text-white transition-colors">Reservations</a>
          <a href="#story" className="hover:text-white transition-colors">Our Story</a>
        </div>
        
        {/* Right: Button */}
        <div>
          <button 
            onClick={onOpenCart}
            className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <span>Cart</span>
            {cart.length > 0 && (
              <span className="bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
