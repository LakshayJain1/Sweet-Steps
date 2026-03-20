import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface ProductCardProps {
  title: string;
  image: string;
  labels?: string[];
  description?: string;
}

const ProductCard = ({ title, image, labels = [], description }: ProductCardProps) => {
  return (
    <div className="group glass-card-hover rounded-3xl overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          width={400}
          height={400}
          loading="lazy"
          decoding="async"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* View button on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="glass-button rounded-2xl px-6 py-3 flex items-center gap-2 text-foreground font-medium">
            <Eye className="w-5 h-5" />
            View Details
          </div>
        </div>
        
        {labels.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {labels.map((label) => (
              <Badge
                key={label}
                className="gradient-warm text-white border-0 backdrop-blur-md"
              >
                {label}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="p-6 bg-white/80">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Starting from</span>
          <span className="text-lg font-bold text-gradient">Custom Quote</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
