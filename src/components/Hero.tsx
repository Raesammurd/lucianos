import FadeIn from './FadeIn';
import AnimatedHeading from './AnimatedHeading';

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col">
      {/* Background Video - using a premium placeholder since we didn't specify a restaurant one */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        style={{ filter: "brightness(0.6)" }}
      >
        <source
          src="/hero-vid.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col h-full w-full">
        {/* Hero Content (Bottom aligned) */}
        <div className="px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end w-full">
            
            {/* Left Column */}
            <div className="max-w-2xl">
              <AnimatedHeading 
                text={"A taste of Italy,\nperfected in Manchester."} 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 text-white"
              />
              
              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-5">
                  Experience authentic fine dining with a modern cinematic twist.
                </p>
              </FadeIn>
              
              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <a href="#reservations" className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Book a Table
                  </a>
                  <a href="#menu" className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors">
                    View Menu
                  </a>
                </div>
              </FadeIn>
            </div>
            
            {/* Right Column */}
            <FadeIn delay={1400} duration={1000} className="mt-8 lg:mt-0 flex lg:justify-end items-end justify-start">
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl inline-block">
                <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
                  Fine Dining. Delivered.
                </p>
              </div>
            </FadeIn>
            
          </div>
        </div>
      </div>
    </div>
  );
}
