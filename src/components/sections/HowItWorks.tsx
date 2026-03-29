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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gold-accent/20" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center bg-card rounded-card p-6 shadow-sm border-t-[3px] border-t-gold-accent text-center transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-8 text-gold-accent border-4 border-[#FFFBF7]">
                <step.icon className="h-10 w-10" />
              </div>
              <h3 className="mb-4">{step.title}</h3>
              <p className="text-brown-secondary text-lg leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
