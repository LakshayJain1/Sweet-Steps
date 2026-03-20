import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is the impression process safe for babies?",
    answer: "Yes, absolutely! We use non-toxic, skin-safe materials that are gentle on your baby's delicate skin. Our process is quick, gentle, and completely safe for newborns. All materials are dermatologically tested.",
  },
  {
    question: "How long does it take to receive the frame?",
    answer: "Usually 10 to 15 days after the session. This includes 7-10 days for crafting your frame with care and 3-5 days for delivery. We also offer express delivery for urgent requests.",
  },
  {
    question: "Do you offer home visits?",
    answer: "Yes! Home sessions are available on request throughout Jaipur. We understand that traveling with a newborn can be challenging, so we're happy to come to you at no extra charge.",
  },
  {
    question: "Can I choose the frame style?",
    answer: "Absolutely! We offer multiple frame options including classic white, modern black, natural wood, and premium gold-accented frames. You can choose during booking, and custom options are available.",
  },
  {
    question: "What if I need to reschedule?",
    answer: "No problem! You can reschedule up to 24 hours before your session without any charges. Simply contact us via WhatsApp or phone, and we'll find a new time that works for you.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Refunds are handled case by case and are available before production starts. Once we begin crafting your frame, we're unable to offer refunds as each piece is custom-made to your specifications.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px] -translate-y-1/2" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-sm font-medium mb-5">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Help Center</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-5">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our keepsake frames and booking process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card-hover rounded-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Accordion type="single" collapsible>
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="border-0 px-6"
                  >
                    <AccordionTrigger className="text-left font-heading font-medium text-foreground hover:text-primary py-6 hover:no-underline group">
                      {faq.question}
                      <span className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12h14" className="transition-transform group-data-[state=open]:rotate-45" />
                        </svg>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
