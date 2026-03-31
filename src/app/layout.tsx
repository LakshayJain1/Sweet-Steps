import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], weight: "400", variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sweetsteps.vercel.app"),
  title: {
    default: "Sweet Steps | Baby Hand Casting Jaipur | 3D Newborn Impressions",
    template: "%s | Sweet Steps Jaipur",
  },
  description: "Jaipur's #1 premium 3D baby hand and feet impressions. Handcrafted keepsake frames in Jaipur. Safe for newborns, preserved for a lifetime. Book your home session today!",
  keywords: ["baby hand casting Jaipur", "3D baby impressions Jaipur", "newborn hand and feet casting Jaipur", "keepsake frames Jaipur", "baby casting service India"],
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
    title: "Sweet Steps | Premium Baby Casting in Jaipur",
    description: "Capture the tiny moments that grow up too fast with Jaipur's favorite 3D hand and feet impression service.",
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
    title: "Sweet Steps | Baby Hand Casting Jaipur",
    description: "Jaipur's #1 premium newborn 100% safe 3D impressions.",
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
        <main className="min-h-screen bg-neutral-50 text-neutral-900">
          {children}
        </main>
      </body>
    </html>
  );
}
