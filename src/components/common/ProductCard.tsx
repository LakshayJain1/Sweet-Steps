import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  labels?: string[];
  description?: string;
}

const ProductCard = ({ title, price, image, labels = [], description }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={400}
          height={400}
          loading="lazy"
          decoding="async"
        />
        {labels.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {labels.map((label) => (
              <Badge
                key={label}
                className="gradient-primary text-primary-foreground border-0"
              >
                {label}
              </Badge>
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-primary">
            ₹{price.toLocaleString()}
          </p>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
