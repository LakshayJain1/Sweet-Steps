import StickyHeader from "@/components/layout/StickyHeader";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/common/ChatWidget";
import { Gift, Heart, Users, Calendar } from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  title: "Sweet Rewards | Loyalty Program",
  description: "Join the Sweet Steps loyalty program in Jaipur. Earn rewards for every referral and multiple casting sessions as your baby grows.",
  keywords: [
    "baby casting loyalty program Jaipur",
    "referral discount hand casting Jaipur",
    "repeat customer discount 3D casting Jaipur",
    "baby milestone casting discounts Jaipur",
    "family casting rewards Jaipur",
    "Sweet Steps referral program"
  ],
  alternates: {
    canonical: "https://sweetsteps.online/rewards",
  },
};

const rewards = [
  {
    title: "The Growing Heart",
    desc: "10% OFF your next casting session (6 Months, 1 Year, etc.) to capture the growth journey.",
    icon: Heart,
    color: "bg-neutral-100 text-neutral-700"
  },
  {
    title: "Family Referral Bloom",
    desc: "Refer a friend in Jaipur and both get a ₹500 voucher towards your next premium keepsake frame.",
    icon: Users,
    color: "bg-neutral-100 text-neutral-700"
  },
  {
    title: "Holiday Keepsake Priority",
    desc: "Early access to our limited-edition Diwali and Christmas themed casting sessions.",
    icon: Calendar,
    color: "bg-neutral-100 text-neutral-700"
  }
];

export default function RewardsPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Home", href: "/" }, { name: "Rewards", href: "/rewards" }]} />
      <StickyHeader />
      <main className="pt-32 pb-24 bg-neutral-50 overflow-hidden relative">
        {/* Background Mesh: monochromatic */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-300/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-neutral-400/8 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto max-w-[1200px] px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-neutral-100 rounded-full mb-4">
                <Gift className="h-8 w-8 text-neutral-700" />
              </div>
              <h1 className="text-5xl md:text-6xl text-neutral-900">Sweet Rewards</h1>
              <p className="text-xl text-neutral-500 leading-relaxed">
                Once you join the Sweet Steps family, the magic doesn't have to stop. 
                Our loyalty program is designed to help your memories grow as your baby does.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {rewards.map((reward, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.12}>
                <div className="glass-card p-10 flex flex-col items-center text-center group h-full">
                  <div className={`w-20 h-20 ${reward.color} rounded-full flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-glass border border-neutral-200`}>
                    <reward.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-neutral-900">{reward.title}</h3>
                  <p className="text-neutral-500 text-lg leading-relaxed flex-1">
                    {reward.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Social Call to Action */}
          <ScrollReveal delay={0.2}>
            <div className="mt-24 glass-panel p-12 text-center max-w-4xl mx-auto space-y-8 bg-white/30">
              <h2 className="text-3xl font-heading font-medium text-neutral-900">Want to earn your first reward?</h2>
              <p className="text-xl text-neutral-500 mb-8">
                Share your unboxing story on Instagram, tag @sweet_.steps__, 
                and get an instant discount voucher for your next family session!
              </p>
              <a 
                href="https://wa.me/918302419714?text=Hi, I shared my Sweet Steps story! Here is the link."
                className="liquid-button text-xl px-12 py-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Claim My Reward →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
