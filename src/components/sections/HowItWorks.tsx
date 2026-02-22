import { Camera, Palette, Sparkles, Truck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Camera,
    title: "Capture",
    desc: "Share your favorite photos and impressions with us"
  },
  {
    step: "02",
    icon: Palette,
    title: "Craft",
    desc: "Our artisans design your unique frame with care"
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Customize",
    desc: "Add personal touches, names, and special details"
  },
  {
    step: "04",
    icon: Truck,
    title: "Deliver",
    desc: "Beautifully packaged and shipped to your door"
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20" style={{ backgroundColor: "white" }}>
      <div className="container px-6">
        <div className="text-center mb-14">
          <p
            className="mb-3"
            style={{
              color: "#B85C7A",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "1px",
              textTransform: "uppercase"
            }}
          >
            Our Process
          </p>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(28px, 3.5vw, 38px)",
              fontWeight: 700,
              color: "#2E2E2E",
              lineHeight: 1.2
            }}
          >
            How We Bring Your Memories to Life
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connection line - desktop only */}
          <div
            className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
            style={{ backgroundColor: "#C6B6E940" }}
          />

          {steps.map((item, i) => (
            <div key={i} className="text-center relative group">
              <div className="flex justify-center mb-5">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center relative transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${i % 2 === 0 ? "#C6B6E930" : "#F2B8C630"
                      }, ${i % 2 === 0 ? "#C6B6E915" : "#F2B8C615"})`,
                  }}
                >
                  <item.icon
                    size={28}
                    style={{ color: i % 2 === 0 ? "#C6B6E9" : "#F2B8C6" }}
                  />
                  <span
                    className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: "#B85C7A", fontSize: "11px", fontWeight: 700 }}
                  >
                    {item.step}
                  </span>
                </div>
              </div>
              <h3 className="font-heading" style={{ fontWeight: 700, fontSize: "17px", color: "#2E2E2E", marginBottom: "8px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#717182", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
