import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arbarnegroup.com"),

  title: {
    default: "Arbarne Agriculture Group | Smart Farming & Agri-Energy in Africa",
    template: "%s | Arbarne Agriculture Group",
  },

  description:
    "Arbarne Agriculture Group builds climate-smart farms across Africa using agri-energy, smart farming, and agritech innovation. Partner with us to transform sustainable food systems.",

  keywords: [
    "agriculture investment Kenya",
    "smart farming Africa",
    "agritech Kenya",
    "climate smart agriculture Africa",
    "sustainable farming Kenya",
    "agri-energy Africa",
    "food security Africa",
  ],

  authors: [{ name: "Arbarne Agriculture Group" }],
  creator: "Arbarne Agriculture Group",

  openGraph: {
    title: "Arbarne Agriculture Group | Future Farms in Africa",
    description:
      "Building climate-smart, scalable farms across Africa using agri-energy and agritech.",
    url: "https://arbarnegroup.com",
    siteName: "Arbarne Agriculture Group",
    type: "website",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Arbarne Agriculture Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arbarne Agriculture Group",
    description:
      "Smart farming and agri-energy innovation across Africa.",
    images: ["/og-image.png"],
  },

  icons: {
  icon: "/favicon.ico",
},

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
