import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/common/ChatWidget";
import { Gift, Heart, Users, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sweet Rewards | Loyalty Program for Sweet Steps Families",
  description: "Join the Sweet Steps loyalty program in Jaipur. Earn rewards for every referral and multiple casting sessions as your baby grows.",
};

const rewards = [
  {
    title: "The Growing Heart",
    desc: "10% OFF your next casting session (6 Months, 1 Year, etc.) to capture the growth journey.",
    icon: Heart,
    color: "bg-pink-accent/10 text-pink-accent"
  },
  {
    title: "Family Referral Bloom",
    desc: "Refer a friend in Jaipur and both get a ₹500 voucher towards your next premium keepsake frame.",
    icon: Users,
    color: "bg-gold-accent/10 text-gold-accent"
  },
  {
    title: "Holiday Keepsake Priority",
    desc: "Early access to our limited-edition Diwali and Christmas themed casting sessions.",
    icon: Calendar,
    color: "bg-brown-primary/10 text-brown-primary"
  }
];

export default function RewardsPage() {
  return (
    <>
      <StickyHeader />
      <main className="pt-32 pb-24 bg-background overflow-hidden relative">
        {/* Background Mesh */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-accent/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-pink-accent/5 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-gold-accent/10 rounded-full mb-4">
               <Gift className="h-8 w-8 text-gold-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl">Sweet Rewards</h1>
            <p className="text-xl text-brown-secondary leading-relaxed">
              Once you join the Sweet Steps family, the magic doesn't have to stop. 
              Our loyalty program is designed to help your memories grow as your baby does.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {rewards.map((reward, idx) => (
              <div key={idx} className="glass-card p-10 flex flex-col items-center text-center group">
                <div className={`w-20 h-20 ${reward.color} rounded-full flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-glass`}>
                  <reward.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{reward.title}</h3>
                <p className="text-brown-secondary text-lg leading-relaxed flex-1">
                  {reward.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Social Call to Action */}
          <div className="mt-24 glass-panel p-12 text-center max-w-4xl mx-auto space-y-8 bg-white/20">
             <h2 className="text-3xl font-heading font-medium">Want to earn your first reward?</h2>
             <p className="text-xl text-brown-secondary mb-8">
               Share your unboxing story on Instagram, tag **@sweetsteps.in**, 
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
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
