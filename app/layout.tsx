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
  title: {
    default: "Arbarne Agriculture Group | Future Farms in Africa",
    template: "%s | Arbarne Agriculture Group",
  },
  description:
    "Arbarne Agriculture Group is building future-ready farms across Africa through agri-energy, smart farming technologies, and innovation. We connect farmers, innovators, financiers, and stakeholders to co-create sustainable, climate-resilient food systems.",

  keywords: [
    "future farming Africa",
    "agri-energy Kenya",
    "smart farming Africa",
    "climate smart agriculture",
    "sustainable agriculture Africa",
    "women in agriculture Africa",
    "agritech Kenya",
    "food systems innovation",
  ],

  authors: [{ name: "Arbarne Agriculture Group" }],

  openGraph: {
    title: "Arbarne Agriculture Group | Future Farms in Africa",
    description:
      "Building future-ready farms through agri-energy, smart farming, and innovation across Africa.",
    url: "https://arbarnegroup.com",
    siteName: "Arbarne Agriculture Group",
    type: "website",
   
  },
  metadataBase: new URL("https://arbarnegroup.com"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
