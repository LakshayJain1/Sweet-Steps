import Link from "next/link";
import { Instagram, Facebook, MessageCircle, MapPin } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 py-12  border-t border-neutral-200">
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <ScrollReveal className="col-span-1 md:col-span-1">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900">Sweet Steps</h2>
              <p className="text-neutral-600 prose">
                Capture the tiny moments that grow up too fast. Handcrafted 3D impression frames of your baby's hands and feet, delivered to your doorstep.
              </p>
              <div className="flex items-center space-x-4">
                <Link href="https://instagram.com/sweet_.steps__" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-neutral-900 hover:text-white transition-colors shadow-glass-soft border border-neutral-200">
                  <Instagram size={20} />
                </Link>
                <Link href="https://www.facebook.com/people/Sweet-Steps-Impression/61558591102585/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-neutral-900 hover:text-white transition-colors text-neutral-700 shadow-glass-soft border border-neutral-200">
                  <Facebook size={20} />
                </Link>
                <Link href="https://wa.me/918302419714" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-10 w-10 flex items-center justify-center rounded-full bg-white hover:bg-[#25D366] hover:text-white transition-colors text-neutral-700 shadow-glass-soft border border-neutral-200">
                  <MessageCircle size={20} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading text-neutral-900">Quick Links</h3>
              <ul className="space-y-4 text-neutral-600">
                <li><Link href="/book" className="hover:text-neutral-900 transition-colors">Book a Session</Link></li>
                <li><Link href="/gallery" className="hover:text-neutral-900 transition-colors">Gallery</Link></li>
                <li><Link href="/about" className="hover:text-neutral-900 transition-colors">About Us</Link></li>
                <li><Link href="/faq" className="hover:text-neutral-900 transition-colors">FAQs</Link></li>
                <li><Link href="/privacy" className="hover:text-neutral-900 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading text-neutral-900">Contact Us</h3>
              <div className="space-y-3 text-neutral-600 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-neutral-500 shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">Sweet Steps Impressions</p>
                    <p>Jaipur, Rajasthan 302020</p>
                  </div>
                </div>
                <a href="https://wa.me/918302419714" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-neutral-900 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span>+91 83024 19714</span>
                </a>
                <a href="mailto:sweetsteps05@gmail.com" className="flex items-center gap-2 hover:text-neutral-900 transition-colors">
                  <span className="h-4 w-4">✉</span>
                  <span>sweetsteps05@gmail.com</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading text-neutral-900">Find Us</h3>
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-neutral-200 bg-neutral-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.459442388231!2d75.76969559999999!3d26.857140299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53962efcb8f%3A0xae986bdc5dc8e3ad!2sSweet%20Steps%20Impressions%20(3D%20Hand%20%26%20Foot%20Casting)!5e0!3m2!1sen!2sin!4v1784539758881!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Sweet Steps location in Jaipur">
                </iframe>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="pt-8 border-t border-neutral-200 text-center flex flex-col items-center justify-center space-y-4">
          <p className="text-neutral-600 text-xs pt-2">
            © {new Date().getFullYear()} Sweet Steps • Handcrafted with love
          </p>
          <p className="text-neutral-500 text-xs">
            <Link href="/privacy" className="hover:text-neutral-900 underline transition-colors">Privacy Policy</Link> &nbsp;|&nbsp;
            <Link href="/terms" className="hover:text-neutral-900 underline transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
