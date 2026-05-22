import { useState } from 'react';
import FadeIn from './FadeIn';
import AnimatedHeading from './AnimatedHeading';

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-16 bg-white text-black">
      <FadeIn>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <span style={{ fontFamily: "'Caveat', cursive" }} className="text-2xl text-black/60 mb-2">Get in touch</span>
            <AnimatedHeading 
              text="Contact Us" 
              className="text-4xl md:text-5xl font-light mb-6"
            />
            <div className="h-1 w-24 bg-black/10"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col">
              <p className="text-black/70 text-lg leading-relaxed mb-8 font-light">
                Please feel free to call us on <a href="tel:01298461011" className="text-black font-medium hover:underline">01298 461011</a> or email us on <a href="mailto:info@lucianosbuxton.co.uk" className="text-black font-medium hover:underline">info@lucianosbuxton.co.uk</a> or fill out the contact form below if you have any enquiries and we'll get back to as soon as possible.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-black/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)]">
              {isSent ? (
                <div className="text-center py-16 animate-in zoom-in duration-500">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-2xl font-medium mb-2">Message Sent!</h3>
                  <p className="text-black/60">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-sm text-black/60 mb-2">Name</label>
                    <input required type="text" className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-black/30 transition-colors shadow-inner placeholder:text-black/40" />
                  </div>
                  <div>
                    <label className="block text-sm text-black/60 mb-2">Email</label>
                    <input required type="email" className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-black/30 transition-colors shadow-inner placeholder:text-black/40" />
                  </div>
                  <div>
                    <label className="block text-sm text-black/60 mb-2">Message</label>
                    <textarea required rows={4} placeholder="Type your message here..." className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-black/30 transition-colors shadow-inner resize-none placeholder:text-black/40"></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-black text-white py-4 rounded-lg font-medium transition-all duration-300 mt-2 shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)] transform hover:-translate-y-1"
                  >
                    Send Message
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
