import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Depth Effects */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-frame.jpg"
          alt="Sweet Steps Baby Impression Keepsake"
          fill
          priority
          className="object-cover object-right md:object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background" />
        {/* Soft Glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold-accent/15 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
        <div className="glass-panel p-8 md:p-16 max-w-3xl transform-gpu hover:shadow-glass-raised transition-all duration-700 border-white/40">
          <div className="space-y-8">
            <h1 className="leading-tight text-brown-primary">
              Capture the <span className="text-pink-accent italic">tiny moments</span> that grow up too fast.
            </h1>
            
            <p className="text-xl md:text-2xl text-brown-secondary font-medium leading-relaxed">
              Handcrafted 3D impression frames of your baby's hands and feet. 
              Made with love in Jaipur.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <Link href="/book" className="liquid-button w-full sm:w-auto text-lg">
                Book a session
              </Link>
              <Link href="/gallery" className="btn-ghost w-full sm:w-auto text-lg">
                View Gallery
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-8 text-brown-secondary/80 font-medium border-t border-white/20">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍼</span>
                <span>200+ families</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold-accent" />
                <span>100% Baby Safe</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold-accent" />
                <span>Jaipur, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
