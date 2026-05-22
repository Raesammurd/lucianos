import FadeIn from './FadeIn';
import AnimatedHeading from './AnimatedHeading';

export default function OpeningHours() {
  const hours = [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday', time: '5:00 PM - 9:00 PM' },
    { day: 'Wednesday', time: '5:00 PM - 9:00 PM' },
    { day: 'Thursday', time: '5:00 PM - 9:00 PM' },
    { day: 'Friday', time: '5:00 PM - 9:00 PM' },
    { day: 'Saturday', time: '5:00 PM - 9:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];

  return (
    <section id="hours" className="py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-black to-[#050505] text-white">
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12 flex flex-col items-center">
            <span style={{ fontFamily: "'Caveat', cursive" }} className="text-2xl text-white/70 mb-2">Plan your visit</span>
            <AnimatedHeading 
              text="Opening Hours" 
              className="text-4xl md:text-5xl font-light mb-6"
            />
            <div className="h-1 w-24 bg-white/20"></div>
          </div>

          <div className="liquid-glass rounded-2xl p-8 md:p-12 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] transform transition-all duration-300 hover:border-white/20 hover:shadow-[0_16px_50px_rgba(0,0,0,0.6)]">
            <div className="flex flex-col gap-4">
              {hours.map((h, i) => (
                <div key={i} className={`flex justify-between items-center py-4 border-b border-white/5 last:border-0 ${h.time === 'Closed' ? 'text-red-400/80' : 'text-white/90'}`}>
                  <span className="text-lg font-medium tracking-wide">{h.day}</span>
                  <span className="text-lg font-light tracking-wider">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
