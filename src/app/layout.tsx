import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], weight: "400", variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Sweet Steps | Premium Baby Hand & Feet Impressions",
  description: "Handcrafted 3D impression frames of your baby's hands and feet. Made with love in Jaipur. Capture tiny moments that grow up too fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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
        <main className="min-h-screen bg-background text-brown-primary">
          {children}
        </main>
      </body>
    </html>
  );
}
