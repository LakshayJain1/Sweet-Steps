import { Play } from "lucide-react";

export default function VideoTestimonials() {
  const testimonials = [
    {
      title: "Baby Arish's First Casting",
      location: "Malviya Nagar, Jaipur",
      thumbnail: "/product-1.jpg",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Example URL
    },
    {
      title: "Family Hand Casting",
      location: "Vaishali Nagar, Jaipur",
      thumbnail: "/product-3.jpg",
      url: "#"
    }
  ];

  return (
    <section className="section-padding bg-transparent">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6">Real stories, real tears.</h2>
          <p className="text-xl text-brown-secondary leading-relaxed">
            See the emotional reaction of our Jaipur families as they unbox their baby's 3D hand and feet impressions for the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((video, idx) => (
            <div key={idx} className="glass-card group overflow-hidden border-white/40">
              <div className="relative aspect-video w-full cursor-pointer overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                />
                <div className="absolute inset-0 bg-brown-primary/20 backdrop-blur-[2px] transition-colors group-hover:bg-brown-primary/40" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/40 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white shadow-glass transition-all group-hover:scale-110 group-hover:bg-white/60">
                    <Play className="h-8 w-8 fill-current text-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-brown-primary/80 to-transparent text-white">
                  <h4 className="text-2xl font-bold mb-1">{video.title}</h4>
                  <p className="opacity-80 text-sm font-medium">{video.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
