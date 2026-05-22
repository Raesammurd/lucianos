import { useState } from 'react';
import { useCart } from '../context/CartContext';
import FadeIn from './FadeIn';
import AnimatedHeading from './AnimatedHeading';

export default function Booking() {
  const { userAllergies, addAllergy, removeAllergy } = useCart();
  const [allergyInput, setAllergyInput] = useState('');
  const [isAiCollapsed, setIsAiCollapsed] = useState(true);
  const [isBooked, setIsBooked] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAddAllergy = () => {
    if (allergyInput.trim()) {
      addAllergy(allergyInput.trim());
      setAllergyInput('');
    }
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsBooked(true);
    }, 1500);
  };

  return (
    <section id="reservations" className="py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-[#050505] to-black text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
      
      <FadeIn>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 flex flex-col items-center">
            <span style={{ fontFamily: "'Caveat', cursive" }} className="text-2xl text-white/70 mb-2">Reserve your experience</span>
            <AnimatedHeading 
              text="Book a Table" 
              className="text-4xl md:text-5xl font-light mb-6"
            />
            <div className="h-1 w-24 bg-white/20"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* AI Assistant Sidebar */}
            <div className="liquid-glass p-8 rounded-2xl border border-white/10 flex flex-col h-fit shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/20">
              <div 
                className="flex justify-between items-center cursor-pointer mb-6"
                onClick={() => setIsAiCollapsed(!isAiCollapsed)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🤖</span>
                  <h3 className="text-xl font-medium">AI Assistant</h3>
                </div>
                <span className="text-xl text-white/50">{isAiCollapsed ? '▼' : '▲'}</span>
              </div>
              
              {!isAiCollapsed && (
                <div className="animate-in slide-in-from-top-4 duration-300">
                  <p className="text-white/70 mb-5 text-sm leading-relaxed">
                    Hello! I'm your dining assistant. Do you have any dietary restrictions or allergies we should know about? 
                    I'll automatically highlight incompatible menu items for you.
                  </p>
                  
                  <div className="flex gap-2 mb-6">
                    <input 
                      type="text" 
                      value={allergyInput}
                      onChange={(e) => setAllergyInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddAllergy()}
                      placeholder="e.g. peanuts, dairy..." 
                      className="flex-1 bg-black/50 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/50 transition-colors shadow-inner"
                    />
                    <button 
                      onClick={handleAddAllergy}
                      className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors shadow-[0_4px_14px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_14px_rgba(255,255,255,0.3)] transform hover:-translate-y-0.5"
                    >
                      Add
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {userAllergies.map((allergy, index) => (
                      <div key={index} className="bg-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 text-sm border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                        <span>{allergy}</span>
                        <button 
                          onClick={() => removeAllergy(index)}
                          className="text-white/50 hover:text-white transition-colors ml-1 focus:outline-none"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Form */}
            <div className="liquid-glass p-8 rounded-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/20">
              {isBooked ? (
                <div className="text-center py-12 animate-in zoom-in duration-500">
                  <div className="text-5xl mb-6">✅</div>
                  <h3 className="text-2xl font-medium mb-3">Booking Confirmed!</h3>
                  <p className="text-white/60 mb-8">We look forward to serving you.</p>
                  <button 
                    onClick={() => setIsBooked(false)}
                    className="text-sm text-white/50 hover:text-white underline decoration-white/30 transition-colors"
                  >
                    Make another booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Date</label>
                      <input required type="date" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors shadow-inner" />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Time</label>
                      <input required type="time" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors shadow-inner" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-2">Party Size</label>
                    <select className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 appearance-none transition-colors shadow-inner">
                      {[1,2,3,4,5,6,7,8,9,10].map(n => (
                        <option key={n} value={n} className="bg-gray-900 text-white">{n} {n === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-2">Name</label>
                    <input required type="text" className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors shadow-inner" />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full bg-white text-black py-4 rounded-lg font-medium transition-all duration-300 mt-4 disabled:opacity-50 shadow-[0_6px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.3)] transform hover:-translate-y-1"
                  >
                    {isProcessing ? 'Processing Deposit...' : 'Pay Deposit (£10) & Book'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
