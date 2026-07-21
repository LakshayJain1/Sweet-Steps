import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-neutral-50">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-neutral-200/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neutral-300/20 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto max-w-[1200px] px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text Content */}
          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-sm font-medium">
                <MapPin className="h-3.5 w-3.5" />
                Jaipur, India
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="leading-tight text-neutral-900">
                Capture the{" "}
                <span className="text-neutral-600 italic">precious bonds</span>{" "}
                that last a lifetime.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-neutral-700 font-medium leading-relaxed max-w-lg">
                Premium 3D impression frames for families, siblings, couples, and elders.
                Preserve your most cherished relationships with timeless art.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link href="/book" className="liquid-button text-base sm:text-lg">
                  Book a session
                </Link>
                <Link href="/gallery" className="btn-ghost text-base sm:text-lg">
                  View Gallery
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-4 text-neutral-500 font-medium border-t border-neutral-200">
                <div className="flex items-center gap-2">
                  <span className="text-lg">✨</span>
                  <span className="text-sm">500+ memories captured</span>
                </div>
                <div className="hidden md:block w-px h-5 bg-neutral-300" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-neutral-700" />
                  <span className="text-sm">100% Skin Safe</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Product Image */}
          <ScrollReveal from="scale" delay={0.2} className="relative hidden lg:block" >
            <div style={{ minHeight: '520px' }} className="relative">
              <div className="absolute -inset-6 rounded-[2rem] border border-neutral-200/60" />
              <div className="relative aspect-[4/5] w-full rounded-[1.5rem] overflow-hidden bg-neutral-100 shadow-glass-raised">
                <Image
                  src="/Assets/Frame_09.webp"
                  alt="Sweet Steps Premium 3D Impression Frame"
                  fill
                  priority
                  sizes="(max-width: 1024px) 0px, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-50/60 to-transparent" />
              </div>

              <ScrollReveal delay={0.4} className="absolute -bottom-5 -left-6">
                <div className="glass-panel px-5 py-3 flex items-center gap-3 border-neutral-200/40">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">Jaipur's #1</p>
                    <p className="text-[10px] text-neutral-500">3D Impression Studio</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
