import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { cart, removeFromCart, clearCart } = useCart();
  
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmitOrder = () => {
    if (cart.length === 0) return alert('Your cart is empty!');
    alert('Order submitted successfully! Please pay in-person upon arrival.');
    clearCart();
    onClose();
  };

  const handlePayNow = () => {
    if (cart.length === 0) return alert('Your cart is empty!');
    alert('Redirecting to Stripe Gateway... (Mocked). Payment successful!');
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#111] border-l border-white/10 z-50 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/50">
          <h2 className="text-2xl font-light text-white">Your Order</h2>
          <button 
            onClick={onClose}
            className="text-white/60 hover:text-white text-2xl transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
          >
            &times;
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {cart.length === 0 ? (
            <div className="text-white/40 text-center py-10">Your cart is empty.</div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 liquid-glass rounded-lg border border-white/5">
                <div>
                  <h4 className="font-medium text-white">{item.name}</h4>
                  <span className="text-white/60 text-sm">£{item.price.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => removeFromCart(index)}
                  className="text-red-400 hover:text-red-300 text-sm font-medium px-3 py-1 bg-red-400/10 hover:bg-red-400/20 rounded transition-colors"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        
        <div className="p-6 border-t border-white/10 bg-black/50">
          <div className="flex justify-between items-center mb-6 text-xl text-white">
            <span className="font-light">Total:</span>
            <span className="font-medium">£{totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex flex-col gap-3">
            <button 
              onClick={handleSubmitOrder}
              className="w-full bg-white text-black py-4 rounded-lg font-medium transition-all duration-300 shadow-[0_6px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.3)] transform hover:-translate-y-1"
            >
              Submit Order (Pay in-person)
            </button>
            <button 
              onClick={handlePayNow}
              className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_14px_rgba(255,255,255,0.1)]"
            >
              Pay Now (Mock Stripe)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
