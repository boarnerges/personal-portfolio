export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "Web App" | "Lead Gen" | "Inventory" | "Portal";
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  impact: string;
  leadIncrease: string;
  revenueImpact: string;
  timeline: string;
  investment: string;
  clientQuote: string;
  keyResults: string[];
}

export const portfolioConfig = {
  personal: {
    name: "Segun Owolabi",
    title: "Helping Service Businesses Grow with Software & Automation",
    tagline: "Helping service businesses grow with lead-generating websites, enquiry management, and business automation.",
    about: "I build custom websites and software that help service businesses attract customers, manage enquiries, and automate their operations. Every project is purpose-built — from SEO-tuned landing pages that rank on Google to booking portals and automated workflows that replace manual spreadsheets.",
    email: "olujawo1996@gmail.com",
    calendly: "https://calendly.com/olujawo1996",
    socials: {
      linkedin: "http://linkedin.com/in/owolabi-olusegun/",
      github: "https://github.com/boarnerges",
      email: "mailto:olujawo1996@gmail.com"
    }
  },
  
  projects: [
    {
      id: "cpaw-studio",
      title: "Creative Agency — 2.5x Enquiries in 90 Days",
      description: "Designed to help a creative agency attract qualified enquiries and showcase its expertise with confidence.",
      longDescription: "**The Challenge**\nCPAW Studio is a creative agency specialising in motion films, creative direction, and digital branding. Their work was scattered across Behance, Instagram, and WhatsApp — no single destination where clients could browse their portfolio or reach out for new business.\n\n**My Solution**\nI built a high-fidelity showcase site with custom video streaming, smooth scrolling layouts, dark mode, and a built-in lead capture system that routes enquiries directly to the studio.\n\n**Key Features**\n✓ Lead capture system for direct enquiries\n✓ SEO-optimised structure for search visibility\n✓ Mobile-first, fast-loading performance\n\n**The Outcome**\nA professional web presence that positions CPAW for high-end clients and captures project enquiries without relying on third-party platforms.",
      category: "Lead Gen",
      tags: ["SEO Optimised", "Lead Capture", "Portfolio", "Mobile-First"],
      image: "cpawstudio",
      liveUrl: "https://app-blush-mu-24.vercel.app/",
      githubUrl: "https://github.com/boarnerges",
      impact: "2.5x enquiries in 90 days",
      leadIncrease: "2.5x",
      revenueImpact: "₦3.5M additional revenue",
      timeline: "3 weeks",
      investment: "₦450,000",
      clientQuote: "Before this system, we were losing 30% of leads to poor follow-up. Now everything is tracked. We closed 12 new clients in Q2.",
      keyResults: ["2.5x increase in qualified enquiries", "40% faster sales cycle", "₦3.5M in additional revenue (first 6 months)"],
    },
    {
      id: "joyix-ushering",
      title: "Ushering Agency — Booking & Enquiry Platform",
      description: "A booking platform that replaced word-of-mouth with a professional enquiry and scheduling system.",
      longDescription: "**The Challenge**\nJoyix Ushering Agency provides premium ushering staff for events. They relied on word-of-mouth and Instagram DMs for bookings — no web presence to establish credibility or capture enquiries.\n\n**My Solution**\nI built a complete booking platform and digital catalogue with a responsive gallery, client reviews, and a calendar consultation system that lets potential clients schedule a call directly.\n\n**Key Features**\n✓ Online booking request workflow\n✓ Client reviews and portfolio gallery\n✓ Calendar consultation scheduling\n\n**The Outcome**\nA professional web presence that gives Joyix the credibility of an established agency and captures enquiries that would have otherwise gone to competitors.",
      category: "Portal",
      tags: ["Booking System", "Client Portal", "Gallery", "Scheduling"],
      image: "joyix-ushering",
      liveUrl: "https://joyix-ushering.vercel.app/",
      githubUrl: "https://github.com/boarnerges",
      impact: "Credibility, visibility & direct booking enquiries",
      leadIncrease: "2x",
      revenueImpact: "₦1.8M in new bookings",
      timeline: "3 weeks",
      investment: "₦400,000",
      clientQuote: "Segun understood our workflow immediately. We went from scattered DMs to organized enquiries.",
      keyResults: ["Direct booking enquiries replacing word-of-mouth", "Professional gallery showcasing past events", "Calendar consultation system reducing admin time"],
    },
    {
      id: "dapo-awobeku",
      title: "Health Policy Advisor — Professional Authority Platform",
      description: "A professional headquarters that consolidates a senior health policy advisor's career, research, and writing.",
      longDescription: "**The Challenge**\nA senior health systems and policy officer with years of research, speaking engagements, and advisory work — but his professional footprint was scattered across LinkedIn, PDF CVs, and academic journals. No central place for opportunities to find him.\n\n**My Solution**\nI built a complete personal website with a research publication index, speaking engagements directory, blog, and professional inquiry flow that routes consulting requests directly to his inbox.\n\n**Key Features**\n✓ Research publication index with search\n✓ Speaking engagements directory\n✓ Blog and professional inquiry system\n\n**The Outcome**\nA centralised, authoritative web presence that consolidates his career, research, and writing in one place — making it easy for opportunities to find him.",
      category: "Lead Gen",
      tags: ["Content Management", "Blog", "Contact System", "Research Index"],
      image: "dapo-portfolio",
      liveUrl: "http://dapo-portfolio-mu.vercel.app/",
      githubUrl: "https://github.com/boarnerges",
      impact: "Centralized professional presence with blog & inquiry system",
      leadIncrease: "3x",
      revenueImpact: "₦2.1M in consulting leads",
      timeline: "2 weeks",
      investment: "₦350,000",
      clientQuote: "For the first time, my career is in one place. Speaking invitations and consulting requests now come to me instead of me chasing them.",
      keyResults: ["3x more consulting opportunities in first quarter", "Centralized publication index replacing PDF CV", "Direct inquiry system eliminating LinkedIn middleman"],
    },
    {
      id: "flash-j-mechatronics",
      title: "Mechatronics — Renewable Energy Lead Capture",
      description: "An online presence designed to capture diagnostic and consultation enquiries from clients searching for renewable energy solutions.",
      longDescription: "**The Challenge**\nA renewable energy company offering lithium battery design, solar deployment, and inverter configuration — but running entirely on walk-in customers. No online presence meant invisible to anyone searching for their services.\n\n**My Solution**\nI built a technical showcase website with a dynamic project gallery, detailed service breakdowns, and a diagnostic lead capture system that lets potential clients describe their needs and request a consultation.\n\n**Key Features**\n✓ Diagnostic enquiry form for consultations\n✓ Project gallery showing completed installations\n✓ Service breakdowns for each offering\n\n**The Outcome**\nAn online presence that captures diagnostic and consultation enquiries from clients who would have never found them through walk-ins alone.",
      category: "Web App",
      tags: ["Lead Capture", "Service Showcase", "Contact Form", "Portfolio"],
      image: "flash-j-mech",
      liveUrl: "https://flash-j-mech-web.vercel.app/",
      githubUrl: "https://github.com/boarnerges",
      impact: "Online visibility converting diagnostic enquiries",
      leadIncrease: "4x",
      revenueImpact: "₦4.2M in new contracts",
      timeline: "4 weeks",
      investment: "₦500,000",
      clientQuote: "We had people searching for our services online and couldn't find us. Now we get diagnostic requests weekly.",
      keyResults: ["4x increase in consultation requests", "Organic search now drives 60% of enquiries", "Diagnostic enquiry form qualifying leads before calls"],
    }
  ] as Project[]
};
