import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCapture from "@/components/LeadCapture";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lead Generation Systems for Service Businesses | Segun Owolabi",
  description: "Custom lead generation websites that rank on Google. Enquiry capture and business automation systems built specifically for service businesses in Nigeria. Book a free strategy call.",
  keywords: ["Lead Generation Websites Nigeria", "Enquiry Management System", "Business Automation Software", "Service Business Software", "Custom Website Builder Nigeria", "Lead Capture System", "Segun Owolabi", "Web Developer Nigeria"],
  openGraph: {
    title: "Lead Generation Systems for Service Businesses | Segun Owolabi",
    description: "Custom websites that rank on Google. Enquiry capture and business automation. Built for service businesses in Nigeria.",
    url: "https://segun-owolabi.vercel.app",
    siteName: "Segun Owolabi",
    images: [{ url: "https://segun-owolabi.vercel.app/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Systems for Service Businesses | Segun Owolabi",
    description: "Custom websites that rank on Google. Enquiry capture and business automation. Built for service businesses in Nigeria.",
    images: ["https://segun-owolabi.vercel.app/og-image.jpg"],
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
      className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main"
          className="fixed -top-10 left-4 z-[100] bg-brand-primary text-white px-4 py-2 text-sm font-semibold rounded-b-lg shadow-lg transition-all duration-200 focus:top-0 focus:outline-2 focus:outline-white focus:outline-offset-2"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="main" className="flex-grow pt-8 pb-20 md:pb-16">{children}</main>
          <Footer />
          <LeadCapture />
          <MobileStickyCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
