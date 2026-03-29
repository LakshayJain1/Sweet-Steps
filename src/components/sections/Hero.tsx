import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-frame.jpg"
          alt="Sweet Steps Baby Impression Keepsake"
          fill
          priority
          className="object-cover md:h-[60vh] h-screen object-right md:object-center"
        />
        {/* Overlay gradient as requested */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBF7]/95 via-[#FFFBF7]/80 to-transparent" />
      </div>

      <div className="container mx-auto max-w-[1200px] px-6 relative z-10 w-full">
        <div className="w-full lg:w-[60%] space-y-8 py-10 md:py-20">
          
          <h1 className="leading-tight drop-shadow-sm">
            Capture the <span className="text-pink-accent italic">tiny moments</span> that grow up too fast.
          </h1>
          
          <p className="text-xl md:text-2xl text-brown-secondary font-medium max-w-lg leading-[1.6]">
            Handcrafted 3D impression frames of your baby's hands and feet. 
            Made with love in Jaipur.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link href="/book" className="btn-primary w-full sm:w-auto text-lg shadow-sm">
              Book a session &rarr;
            </Link>
            <Link href="/gallery" className="btn-ghost w-full sm:w-auto text-lg hover:border-gold-accent hover:text-gold-accent bg-white/40 backdrop-blur-sm">
              See our work
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-10 text-brown-secondary/90 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-xl">🍼</span>
              <span>200+ happy families</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-pink-accent hidden md:block" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-gold-accent" />
              <span>Safe for newborns</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-pink-accent hidden md:block" />
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gold-accent" />
              <span>Jaipur, India</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
