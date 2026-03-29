import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default function BeforeAfterSection() {
  return (
    <section className="section-padding bg-transparent">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl leading-tight">
              From <span className="text-pink-accent italic">tiny toes</span> to timeless treasures.
            </h2>
            <p className="text-xl text-brown-secondary leading-relaxed max-w-lg">
              Photos capture the look, but our 3D impressions capture the feeling. 
              The exact scale, every tiny wrinkle, and the preciousness of their first few months, 
              frozen forever in a beautiful handcrafted frame.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-accent/10 flex items-center justify-center text-gold-accent shrink-0">
                  ✨
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Unmatched Detail</h4>
                  <p className="text-brown-secondary">Captures fingerprints and skin texture with 100% accuracy.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-accent/10 flex items-center justify-center text-pink-accent shrink-0">
                  🏠
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Home Comfort</h4>
                  <p className="text-brown-secondary">We visit you, so your baby stays happy in their own environment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <BeforeAfterSlider
              beforeImage="/product-1.jpg" 
              afterImage="/product-2.jpg"
              beforeLabel="Newborn Days"
              afterLabel="A Lifetime Memory"
              caption="Slide to see how we transform a fleeting moment into a lasting masterpiece."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
