import { products } from "@/data/products";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, MessageCircle, Ruler, Star, ShieldCheck } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Sweet Steps Jaipur`,
    description: product.shortDesc,
    openGraph: {
      images: [{ url: product.mainImg }],
    },
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <StickyHeader />
      <main className="pt-32 pb-20 bg-neutral-50 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1200px]">
          {/* Back link */}
          <Link href="/products" className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-12 font-medium group">
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to collection
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            {/* Image Section */}
            <div className="space-y-6">
              <div className="relative aspect-[4/5] rounded-image overflow-hidden shadow-glass border border-neutral-200/60 bg-white">
                <Image
                  src={product.mainImg}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.galleryImages.map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-neutral-200/60 shadow-sm cursor-pointer hover:border-neutral-900/20 transition-colors bg-white group">
                    <Image
                      src={img}
                      alt={`${product.name} detail ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900/5 rounded-full text-neutral-600 text-sm font-bold tracking-wide uppercase">
                  Signature Style
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-neutral-900 leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl text-neutral-500 leading-relaxed font-medium">
                  {product.fullDesc}
                </p>
              </div>

              {/* Detail Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-neutral-200/60">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-neutral-100 flex items-center justify-center shrink-0">
                    <Ruler className="h-6 w-6 text-neutral-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Frame Detail</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{product.details.frameTexture}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-neutral-100 flex items-center justify-center shrink-0">
                    <Star className="h-6 w-6 text-neutral-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Quality Standards</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{product.details.quality}</p>
                  </div>
                </div>
              </div>

              {/* Customizations */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-neutral-900">Customization Options</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.details.customizations.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-3 px-4 bg-white rounded-xl border border-neutral-100 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center shrink-0">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-neutral-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
                <Link href="/book" className="liquid-button w-full sm:w-auto text-center py-5 px-10 text-xl font-bold">
                  Book a session
                </Link>
                <div className="flex items-center gap-2 text-neutral-500 font-medium">
                  <ShieldCheck className="h-5 w-5" />
                  Pricing available on request
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
