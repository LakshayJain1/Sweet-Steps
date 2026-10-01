import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[640px] max-h-[1080px] flex flex-col justify-between overflow-hidden bg-[#FAF6F0] select-none pt-20 sm:pt-24 md:pt-28 pb-3 sm:pb-5">
      {/* Background Living Room Scene - Perfectly Scaled & Centered */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <picture>
          <source srcSet="/hero_desktop.webp" type="image/webp" />
          <img
            src="/hero_desktop.png"
            alt="Loved ones together - Sweet Steps 3D family impression frames"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_46%] select-none pointer-events-none"
          />
        </picture>
        {/* Subtle soft gradient overlay to keep text ultra crisp without darkening the photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-black/10 pointer-events-none" />
      </div>

      {/* Main Hero Typography & Call-To-Action (Proportionally sized to fit 100vh) */}
      <div className="relative z-10 container mx-auto max-w-4xl px-4 sm:px-6 flex flex-col items-center text-center mt-1 sm:mt-2">

        {/* Main Headline with Golden Serif Italic Text */}
        <h1 className="font-serif text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] text-[#241D17] font-normal leading-[1.12] tracking-[-0.015em] mb-2 sm:mb-2.5">
          Loved ones, together<br />
          in one <span className="italic font-serif font-normal text-[#C4923E] bg-gradient-to-r from-[#B8842E] via-[#D4A346] to-[#BA8630] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(180,130,50,0.15)]">timeless frame</span>.
        </h1>

        {/* Subtitle Description */}
        <p className="font-body text-xs sm:text-[13px] md:text-[14.5px] text-[#5C5043] font-normal leading-relaxed max-w-lg mx-auto mb-4 sm:mb-5">
          Turn your family's unique bond into a beautiful 3D impression frame<br className="hidden sm:inline" />
          — a piece to cherish for years to come.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-3.5">
          {/* Explore Frames (Primary Dark Button) */}
          <a
            href="/gallery"
            className="group inline-flex items-center gap-2 bg-[#1C1A17] hover:bg-neutral-800 text-white text-xs sm:text-[13px] font-medium px-5 sm:px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
          >
            <span>Explore Frames</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          {/* Watch Our Story (Secondary Frosted Button linking to Instagram) */}
          <a
            href="https://instagram.com/sweet_.steps__"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-[#241D17] border border-[#DDD3BF]/90 backdrop-blur-md text-xs sm:text-[13px] font-medium px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-300 active:scale-95"
          >
            <Play className="w-3 h-3 fill-[#241D17] text-[#241D17]" />
            <span>Watch Our Story</span>
          </a>
        </div>
      </div>

      {/* Hand-Drawn Handwritten Annotations & Curved Doodle Arrows */}

      {/* 1. Top-Left Annotation: For generations that stay close (Points to Grandparents) */}
      <div className="absolute hidden md:flex flex-col items-center left-[7%] lg:left-[14%] xl:left-[17%] top-[38%] lg:top-[40%] z-10 pointer-events-none select-none text-left">
        <span className="font-caveat text-base lg:text-[20px] text-[#7E6955] font-medium leading-[1.1] -rotate-3 tracking-wide drop-shadow-sm">
          For<br />
          generations<br />
          that stay close
        </span>
        <svg className="w-10 h-11 lg:w-11 lg:h-13 mt-0.5 ml-6 text-[#7E6955]" viewBox="0 0 60 70" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 10 8 C 22 24, 30 42, 48 54" />
          <path d="M 37 54 L 49 55 L 45 44" />
        </svg>
      </div>

      {/* 2. Top-Right Annotation: For the moments that bring us together (Points to Parents & Baby) */}
      <div className="absolute hidden md:flex flex-col items-center right-[7%] lg:right-[14%] xl:right-[17%] top-[35%] lg:top-[37%] z-10 pointer-events-none select-none text-left">
        <span className="font-caveat text-base lg:text-[20px] text-[#7E6955] font-medium leading-[1.1] rotate-2 tracking-wide drop-shadow-sm">
          For the<br />
          moments that<br />
          bring us together
        </span>
        <svg className="w-10 h-11 lg:w-11 lg:h-13 mt-0.5 mr-6 text-[#7E6955]" viewBox="0 0 60 70" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 50 8 C 38 24, 30 42, 12 54" />
          <path d="M 23 54 L 11 55 L 15 44" />
        </svg>
      </div>

      {/* 3. Bottom-Right Annotation: For every member of the family ♡ (Beside Golden Retriever) */}
      <div className="absolute hidden md:flex flex-col items-start right-[4%] md:right-[7%] lg:right-[11%] xl:right-[13%] bottom-[10%] lg:bottom-[12%] z-10 pointer-events-none select-none text-left">
        <span className="font-caveat text-sm lg:text-[17px] text-[#7E6955] font-medium leading-[1.1] -rotate-2 tracking-wide drop-shadow-sm">
          For every<br />
          member of<br />
          the family <span className="font-serif text-xs">♡</span>
        </span>
        <svg className="w-7 h-7 mt-0.5 ml-2 text-[#7E6955]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 28 6 C 20 12, 14 20, 8 26" />
          <path d="M 14 26 L 7 27 L 9 20" />
        </svg>
      </div>

      {/* Bottom Scroll-to-Explore Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-1 cursor-pointer mt-auto pb-1.5 group select-none">
        <a href="#how-it-works" className="flex flex-col items-center gap-1 focus:outline-none">
          <div className="w-3.5 h-6 rounded-full border-[1.5px] border-[#7E6955]/80 flex justify-center pt-0.5 transition-transform duration-300 group-hover:translate-y-0.5">
            <span className="w-1 h-1.5 bg-[#7E6955] rounded-full animate-bounce" />
          </div>
          <span className="font-body text-[10px] sm:text-[11px] font-medium text-[#7E6955] tracking-wide">
            Scroll to explore
          </span>
        </a>
      </div>
    </section>
  );
}
