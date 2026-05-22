import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Booking from './components/Booking';
import Contact from './components/Contact';
import OpeningHours from './components/OpeningHours';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-black">
        <Navbar onOpenCart={() => setIsCartOpen(true)} />
        <main>
          <Hero />
          <About />
          <Menu />
          <Booking />
          <Contact />
          <OpeningHours />
        </main>
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
