import { useEffect, useRef } from 'react';
import './Footer.css';

export default function Footer() {
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<SVGTextElement>(null);

  const fitWatermark = () => {
    if (!svgRef.current || !textRef.current) return;
    try {
      const bbox = textRef.current.getBBox();
      svgRef.current.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    } catch (e) {
      // Ignore if bbox cannot be calculated yet
    }
  };

  useEffect(() => {
    let frameId: number;
    const handleResize = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(fitWatermark);
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitWatermark);
    } else {
      window.addEventListener('load', fitWatermark);
    }
    window.addEventListener('resize', handleResize);
    
    // Initial call just in case fonts are already loaded
    setTimeout(fitWatermark, 100);

    return () => {
      window.removeEventListener('load', fitWatermark);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="footer-section">
      <div className="footer-wrapper">
        
        {/* Left Card */}
        <div className="footer-left">
          <video className="footer-left-video" autoPlay muted loop playsInline preload="auto">
            <source src="/hero-vid.mp4" type="video/mp4" />
          </video>
          
          <div className="footer-logo">
            <div className="footer-logo-mark">L</div>
            <span className="footer-logo-name">Luciano's</span>
          </div>
          
          <div className="footer-tagline-container">
            <p className="footer-tagline">
              Authentic Italian dining,<br />
              <span>delivered to your door.</span>
            </p>
          </div>
          
          <div className="footer-social-row">
            <span className="footer-social-label">Stay in touch!</span>
            <div className="footer-social-icons">
              {/* Instagram */}
              <div className="social-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              {/* Facebook */}
              <div className="social-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </div>
              {/* TripAdvisor */}
              <div className="social-icon">
                <svg viewBox="-5 0 29 21" fill="currentColor">
                  <path d="M23.1,11.2a1.5,1.5,0,0,0-1.5,1.5c0,4.3-3.5,7.8-7.8,7.8a7.7,7.7,0,0,1-5.1-2,.3.3,0,0,0-.4,0A7.7,7.7,0,0,1,3.2,20.5C-1.1,20.5-4.6,17-4.6,12.7c0-.8.8-1.5,1.5-1.5.8,0,1.5.7,1.5,1.5,0,2.7,2.2,4.9,4.9,4.9a4.8,4.8,0,0,0,3.2-1.2,3.2,3.2,0,0,1,4.1,0,4.8,4.8,0,0,0,3.2,1.2c2.7,0,4.9-2.2,4.9-4.9C18.7,11.9,19.4,11.2,20.2,11.2zM12.1,0C10.5,0,9,.4,7.9,1.4L7.7,7.9,4.1,9.9,2.2,6.8C1.9,6.2,2,5.5,2.6,5.1L9.2,1.1C10,.5,11,.1,12.1,.1s2.2.4,3.1,1l6.6,4c.6.4.7,1.1.4,1.7L20.3,9.9l-3.6-2L16.5,1.4C15.4.4,13.9,0,12.1,0Zm-4.2,9c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5,4.5-2,4.5-4.5-2-4.5-4.5-4.5Zm0,6.6A2.1,2.1,0,1,1,10,13.5,2.1,2.1,0,0,1,7.9,15.6Zm8.4-6.6c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5,4.5-2,4.5-4.5S18.8,9,16.3,9Zm0,6.6A2.1,2.1,0,1,1,18.4,13.5,2.1,2.1,0,0,1,16.3,15.6Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="footer-right">
          
          <div className="footer-right-top">
            <div className="footer-nav-cols">
              <div className="footer-col">
                <div className="footer-col-title">Navigation</div>
                <a href="#menu">Menu</a>
                <a href="#reservations">Book a Table</a>
                <a href="#reservations">Allergy Info</a>
                <a href="#story">Our Story</a>
              </div>
              <div className="footer-col">
                <div className="footer-col-title">Company</div>
                <a href="#">Contact Us</a>
                <a href="#">Locations</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © {new Date().getFullYear()} Luciano's Premium Restaurant.<br/>All rights reserved.
            </div>
            <div className="footer-cta-mini">
              <h4>
                Craving more?<br/><strong>Join our exclusive guest list.</strong>
              </h4>
              <div className="footer-subscribe-row">
                <input type="email" placeholder="Enter email address" />
                <button type="button">Subscribe</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Watermark */}
      <div className="footer-watermark" aria-hidden="true">
        <svg ref={svgRef} viewBox="62 95 876 175" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <text ref={textRef} x="500" y="240" textAnchor="middle" fontSize="320">Luciano's</text>
        </svg>
      </div>
      
    </section>
  );
}
