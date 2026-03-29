import { Home, ScanFace, Gift, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "We visit you",
    desc: "A professional casting artist visits your home at your convenience.",
    icon: Home,
  },
  {
    title: "We capture the impression",
    desc: "A fast, 100% baby-safe process to capture every tiny wrinkle.",
    icon: ScanFace,
  },
  {
    title: "You receive the frame",
    desc: "Your beautiful handcrafted frame is delivered in 10-15 days.",
    icon: Gift,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#FFFBF7] section-padding">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="text-center space-y-4 mb-20">
          <h2>How It Works</h2>
          <p className="text-xl text-brown-secondary font-medium">Simple, stress-free, and magical.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Subtle connecting line with glow */}
          <div className="hidden md:block absolute top-[15%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-gold-accent/30 to-transparent blur-[1px]" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card flex flex-col items-center p-8 text-center group">
              <div className="w-20 h-20 bg-white/40 backdrop-blur-xl rounded-full flex items-center justify-center shadow-glass mb-10 text-gold-accent border border-white group-hover:scale-110 group-hover:bg-white/60 transition-all duration-500">
                <step.icon className="h-10 w-10 text-brown-primary drop-shadow-sm" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">{step.title}</h3>
              <p className="text-brown-secondary text-lg leading-relaxed">{step.desc}</p>
              
              {/* Animated hover glow indicator */}
              <div className="mt-8 w-12 h-1 bg-gold-accent/10 group-hover:bg-gold-accent/40 rounded-full transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
