import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import ScrollRevealProvider from "@/components/common/ScrollRevealProvider";

const inter = Inter({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], display: "swap", variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sweetsteps.vercel.app"),
  title: {
    default: "Sweet Steps | Premium 3D Casting Jaipur | Baby, Sibling & Couple Impressions",
    template: "%s | Sweet Steps Jaipur",
  },
  description: "Jaipur's #1 premium 3D casting service for babies, siblings, couples, and elders. Handcrafted keepsake frames. 100% skin safe, preserved for a lifetime. Book your session today!",
  keywords: ["baby hand casting Jaipur", "3D family impressions Jaipur", "sibling hand casting Jaipur", "couple hand casting Jaipur", "elder blessing casting Jaipur", "keepsake frames Jaipur"],
  authors: [{ name: "Sweet Steps Jaipur" }],
  creator: "Sweet Steps",
  publisher: "Sweet Steps",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sweetsteps.vercel.app",
    siteName: "Sweet Steps Jaipur",
    title: "Sweet Steps | Premium 3D Casting in Jaipur",
    description: "Capture precious bonds that last a lifetime with Jaipur's favorite 3D hand and feet impression service for all ages.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sweet Steps Baby Casting Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Steps | Premium 3D Casting Jaipur",
    description: "Jaipur's #1 premium 3D impressions for babies, couples, and families. 100% skin safe.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9DF9S56TG5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9DF9S56TG5');
          `}
        </Script>
      </head>
      <body>
        <ScrollRevealProvider />
        <main className="min-h-screen bg-neutral-50 text-neutral-900">
          {children}
        </main>
      </body>
    </html>
  );
}
