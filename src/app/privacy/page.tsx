import { Metadata } from "next";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Sweet Steps Jaipur",
  description: "How Sweet Steps collects, uses, and protects your personal data when you book a 3D casting session.",
  alternates: {
    canonical: "https://sweetsteps.online/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen bg-neutral-50 text-neutral-900">
        <StickyHeader />
        <section className="pt-40 pb-20 md:pb-32 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-6 max-w-[900px]">
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-neutral-900 mb-8 leading-tight">Privacy Policy</h1>
              <p className="text-neutral-500 text-lg mb-12">Last updated: July 2026</p>
            </ScrollReveal>

            <div className="prose prose-neutral max-w-none space-y-10 text-neutral-700 leading-relaxed">
              <ScrollReveal delay={0.15}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">Who we are</h2>
                  <p>Sweet Steps Impressions provides at-home 3D casting services in Jaipur, Rajasthan. You can reach us anytime at <a href="mailto:sweetsteps05@gmail.com" className="text-neutral-900 underline hover:text-neutral-600">sweetsteps05@gmail.com</a> or +91 83024 19714.</p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">What we collect</h2>
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li>Your name, phone/WhatsApp number, email, and city</li>
                    <li>Booking details: child's age, occasion, preferred date, and address for the home visit</li>
                    <li>Photos or feedback you choose to share with us</li>
                    <li>Basic website usage data (pages visited, general location) to understand how people use our site</li>
                  </ul>
                  <p className="mt-4">We don't collect your child's name or any sensitive/health information, just their approximate age, so we bring the right kit.</p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">Why we collect it</h2>
                  <p>Simply to confirm and schedule your session, prepare the right materials, keep basic business records, and (only if you say yes) share your frame photos or testimonials publicly.</p>
                  <p className="mt-4">We never sell or rent your information to anyone.</p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">Who sees it</h2>
                  <p>Only our team, the tools we use to manage bookings and send you messages, and a delivery courier if you're outside Jaipur. Everyone we work with is required to keep your data safe.</p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">Changes</h2>
                  <p>If we update this policy, we'll post the new version here and let you know if anything major changes.</p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact</h2>
                  <p>Neetu Jain, Founder</p>
                  <p>Sweet Steps Impressions, Jaipur</p>
                  <p>WhatsApp: +91 83024 19714 · Email: <a href="mailto:sweetsteps05@gmail.com" className="text-neutral-900 underline hover:text-neutral-600">sweetsteps05@gmail.com</a></p>
                </section>
              </ScrollReveal>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}