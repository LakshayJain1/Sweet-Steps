import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is the impression process safe for babies?",
    answer: "Yes, absolutely! We use non-toxic, skin-safe materials that are gentle on your baby's delicate skin. Our process is quick, gentle, and completely safe for newborns.",
  },
  {
    question: "How long does it take to receive the frame?",
    answer: "Usually 10 to 15 days after the session. This includes 7-10 days for crafting your frame with care and 3-5 days for delivery.",
  },
  {
    question: "Do you offer home visits?",
    answer: "Yes! Home sessions are available on request. We understand that traveling with a newborn can be challenging, so we're happy to come to you at no extra charge within Jaipur.",
  },
  {
    question: "Can I choose the frame style?",
    answer: "Absolutely! We offer multiple frame options including classic white, modern black, natural wood, and premium gold-accented frames. You can choose during booking.",
  },
  {
    question: "What if I need to reschedule?",
    answer: "No problem! You can reschedule up to 24 hours before your session. Simply contact us via WhatsApp or phone, and we'll find a new time that works for you.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Refunds are handled case by case and are available before production starts. Once we begin crafting your frame, we're unable to offer refunds as each piece is custom-made.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about our keepsake frames.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-0 shadow-soft data-[state=open]:shadow-card transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-heading font-medium text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
