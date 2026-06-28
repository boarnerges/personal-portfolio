import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Lead Generation, Enquiry Management & Automation",
  description: "Custom lead generation websites, enquiry management portals, and business automation systems for service businesses in Nigeria. Fixed pricing, direct access.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
