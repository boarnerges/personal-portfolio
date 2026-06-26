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
  title: "Segun Owolabi | Helping Service Businesses Grow with Software & Automation",
  description: "Helping service businesses grow with lead-generating websites, enquiry management, and business automation. Custom web software built for real business outcomes.",
  keywords: ["Segun Owolabi", "Web Developer", "Software Engineer", "Service Business Websites", "Lead Generation", "Enquiry Management", "Business Automation", "Custom Web App", "Freelance Developer"],
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
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow pt-8 pb-20 md:pb-16">{children}</main>
          <Footer />
          <LeadCapture />
          <MobileStickyCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
