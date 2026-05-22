import FadeIn from './FadeIn';
import AnimatedHeading from './AnimatedHeading';

export default function About() {
  return (
    <section id="story" className="py-24 px-6 md:px-12 lg:px-16 bg-black text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <FadeIn duration={1000}>
            <div className="relative group">
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-xl transition duration-1000 group-hover:bg-white/10 group-hover:blur-2xl"></div>
              
              <div className="liquid-glass rounded-2xl border border-white/10 overflow-hidden relative shadow-[0_12px_40px_rgba(0,0,0,0.5)] transform transition-all duration-500 hover:-translate-y-2 hover:border-white/30">
                <img 
                  src="/owner_and_son.png" 
                  alt="Salvi and Luciano" 
                  className="w-full h-auto object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </div>
          </FadeIn>

          {/* Text Side */}
          <FadeIn delay={200} duration={1000}>
            <div className="flex flex-col">
              <span style={{ fontFamily: "'Caveat', cursive" }} className="text-3xl text-white/70 mb-2">Our Story</span>
              <AnimatedHeading 
                text="About Us" 
                className="text-4xl md:text-6xl font-light mb-8"
              />
              
              <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
                <p>
                  Welcome to Luciano's, the tastiest slice of Italy this side of Buxton! We're a family-owned Italian restaurant that's all about bringing the flavours and traditions of the Old Country to your table.
                </p>
                <p>
                  Our founder is a seasoned restaurateur with a passion for Italian cuisine that runs deep in his blood - his family hails from the sun-drenched South of Italy, and he grew up surrounded by the sights, smells, and sounds of the kitchen. It's no wonder that he named the restaurant after his own son, Luciano - it's a true labour of love!
                </p>
                <p>
                  Speaking of love, we put a lot of it into every dish we serve. We use only the freshest, highest-quality ingredients to create our delicious pastas, pizzas, and more. Our chefs are true artisans who know how to make every bite burst with flavour and authenticity.
                </p>
                <p>
                  But it's not just the food that makes Luciano's special - it's the atmosphere, too. We want you to feel like part of the family when you dine with us, so we've created a warm, welcoming space that's perfect for gathering with friends and family.
                </p>
                <p>
                  And let's not forget about the vino! We've got a fantastic selection of Italian wines, carefully chosen to pair perfectly with our menu. From crisp and refreshing whites to bold and fruity reds, there's something for everyone to sip and savour.
                </p>
                <p>
                  So come on down to Luciano's and experience the joy of true Italian hospitality. Whether you're in the mood for a romantic date night, a family celebration, or just a casual night out with friends, we've got you covered. Buon appetito!
                </p>
              </div>

              {/* Signature */}
              <div className="mt-12 flex flex-col items-start">
                <span style={{ fontFamily: "'Caveat', cursive" }} className="text-4xl text-white tracking-wide">Salvi and Luciano</span>
                <span className="text-white/50 text-sm mt-1 uppercase tracking-widest">Owner & Son</span>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
