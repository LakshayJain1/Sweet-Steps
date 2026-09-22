import { Metadata } from "next";
import StickyHeader from "@/components/layout/StickyHeader";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/common/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Sweet Steps Terms of Service - Booking, cancellations, refunds, and liability for 3D casting sessions in Jaipur.",
  alternates: {
    canonical: "https://sweetsteps.online/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Home", href: "/" }, { name: "Terms of Service", href: "/terms" }]} />
      <StickyHeader />
      <main className="min-h-screen bg-neutral-50">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6">
          <div className="container mx-auto max-w-[800px]">
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-neutral-900 mb-8 leading-tight">Terms of Service</h1>
              <p className="text-neutral-500 text-lg mb-12">Last updated: July 2026</p>
            </ScrollReveal>

            <div className="prose prose-neutral max-w-none space-y-10 text-neutral-700 leading-relaxed">
              <ScrollReveal delay={0.15}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. The Basics</h2>
                  <p>By booking with Sweet Steps Impressions, you're agreeing to these terms. If something here doesn't work for you, just reach out before booking.</p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. What We Do</h2>
                  <p>We offer at-home 3D hand/feet casting sessions in Jaipur for babies, siblings, couples, or family and turn them into handcrafted 3D Casting frames. Delivery is free within Jaipur; outside Jaipur, you'll cover the shipping cost.</p>
                  <p className="mt-4">Since every piece is handmade, small differences in texture, colour, or finish are normal and part of what makes it special.</p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Booking</h2>
                  <p>Reaching out through our site, WhatsApp, or phone is just an enquiry; your session is only confirmed once we've spoken and agreed on the date, time, and address. We may decline or reschedule if the location is outside our service area or there's a safety concern.</p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Pricing & Payment</h2>
                  <p>Pricing depends on the package you choose, and we'll confirm it with you before the session. No advance payment needed; you pay 50% after the session, and remaining 50% before we deliver the frame. We accept cash, UPI, or bank transfer.</p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. During the Session</h2>
                  <p>Sessions take about 45 minutes (the actual casting is just a couple of minutes). We use skin-safe, non-toxic materials. A parent or guardian needs to be present throughout, and we can't cast over open wounds, infections, or severe skin irritation.</p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.45}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Delivery</h2>
                  <p>Frames are handmade after your session, usually ready in 10–15 business days. Occasionally this can take longer depending on customisation or courier delays; we'll keep you posted.</p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.55}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Photos & Privacy</h2>
                  <p>We'll only use photos of your frame on our page or socials if you say it's okay. Your family's impressions are yours.</p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. A Few Legal Basics</h2>
                  <p>Our responsibility is limited to what you paid for the service, and we're not liable for delays from couriers, weather, or other things outside our control. These terms follow Indian law, and Jaipur courts handle any disputes, though we'd always rather sort things out directly first.</p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.65}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Changes</h2>
                  <p>We may update these terms now and then; the latest version will always be on our site.</p>
                </section>
              </ScrollReveal>

              <ScrollReveal delay={0.7}>
                <section>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Contact</h2>
                  <p>Sweet Steps Impressions, Jaipur</p>
                  <p>WhatsApp: +91 83024 19714 · Email: <a href="mailto:sweetsteps05@gmail.com" className="text-neutral-900 underline hover:text-neutral-600">sweetsteps05@gmail.com</a></p>
                </section>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}