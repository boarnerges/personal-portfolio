export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "Web App" | "Lead Gen" | "Inventory" | "Portal";
  tags: string[];
  image: string; // Placeholder or generated SVG description
  liveUrl: string;
  githubUrl: string;
  impact: string; // E.g. "Reduced booking friction by 40%"
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Business" | "Development" | "Visibility";
  readTime: string;
  date: string;
}

export const portfolioConfig = {
  personal: {
    name: "Segun Owolabi",
    title: "Helping Service Businesses Grow with Software & Automation",
    tagline: "Helping service businesses grow with lead-generating websites, enquiry management, and business automation.",
    about: "I build custom websites and software that help service businesses attract customers, manage enquiries, and automate their operations. Every project is purpose-built — from SEO-tuned landing pages that rank on Google to booking portals and automated workflows that replace manual spreadsheets.",
    email: "olujawo1996@gmail.com",
    socials: {
      linkedin: "http://linkedin.com/in/owolabi-olusegun/",
      github: "https://github.com/boarnerges",
      email: "mailto:olujawo1996@gmail.com"
    }
  },
  
  projects: [
    {
      id: "cpaw-studio",
      title: "Creative Agency — Increased Direct Enquiries",
      description: "Designed to help a creative agency attract qualified enquiries and showcase its expertise with confidence.",
      longDescription: "**The Challenge**\nCPAW Studio is a creative agency specialising in motion films, creative direction, and digital branding. Their work was scattered across Behance, Instagram, and WhatsApp — no single destination where clients could browse their portfolio or reach out for new business.\n\n**My Solution**\nI built a high-fidelity showcase site with custom video streaming, smooth scrolling layouts, dark mode, and a built-in lead capture system that routes enquiries directly to the studio.\n\n**Key Features**\n✓ Lead capture system for direct enquiries\n✓ SEO-optimised structure for search visibility\n✓ Mobile-first, fast-loading performance\n\n**The Outcome**\nA professional web presence that positions CPAW for high-end clients and captures project enquiries without relying on third-party platforms.",
      category: "Lead Gen",
      tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
      image: "cpawstudio",
      liveUrl: "https://app-blush-mu-24.vercel.app/",
      githubUrl: "https://github.com/boarnerges",
      impact: "Direct enquiries from a dedicated showcase site"
    },
    {
      id: "joyix-ushering",
      title: "Ushering Agency — Booking & Enquiry Platform",
      description: "A booking platform that replaced word-of-mouth with a professional enquiry and scheduling system.",
      longDescription: "**The Challenge**\nJoyix Ushering Agency provides premium ushering staff for events. They relied on word-of-mouth and Instagram DMs for bookings — no web presence to establish credibility or capture enquiries.\n\n**My Solution**\nI built a complete booking platform and digital catalogue with a responsive gallery, client reviews, and a calendar consultation system that lets potential clients schedule a call directly.\n\n**Key Features**\n✓ Online booking request workflow\n✓ Client reviews and portfolio gallery\n✓ Calendar consultation scheduling\n\n**The Outcome**\nA professional web presence that gives Joyix the credibility of an established agency and captures enquiries that would have otherwise gone to competitors.",
      category: "Portal",
      tags: ["Next.js", "React", "Tailwind CSS", "Lucide Icons", "Vercel"],
      image: "joyix-ushering",
      liveUrl: "https://joyix-ushering.vercel.app/",
      githubUrl: "https://github.com/boarnerges",
      impact: "Credibility, visibility & direct booking enquiries"
    },
    {
      id: "dapo-awobeku",
      title: "Health Policy Advisor — Professional Authority Platform",
      description: "A professional headquarters that consolidates a senior health policy advisor's career, research, and writing.",
      longDescription: "**The Challenge**\nA senior health systems and policy officer with years of research, speaking engagements, and advisory work — but his professional footprint was scattered across LinkedIn, PDF CVs, and academic journals. No central place for opportunities to find him.\n\n**My Solution**\nI built a complete personal website with a research publication index, speaking engagements directory, blog, and professional inquiry flow that routes consulting requests directly to his inbox.\n\n**Key Features**\n✓ Research publication index with search\n✓ Speaking engagements directory\n✓ Blog and professional inquiry system\n\n**The Outcome**\nA centralised, authoritative web presence that consolidates his career, research, and writing in one place — making it easy for opportunities to find him.",
      category: "Lead Gen",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
      image: "dapo-portfolio",
      liveUrl: "http://dapo-portfolio-mu.vercel.app/",
      githubUrl: "https://github.com/boarnerges",
      impact: "Centralized professional presence with blog & inquiry system"
    },
    {
      id: "flash-j-mechatronics",
      title: "Mechatronics — Renewable Energy Lead Capture",
      description: "An online presence designed to capture diagnostic and consultation enquiries from clients searching for renewable energy solutions.",
      longDescription: "**The Challenge**\nA renewable energy company offering lithium battery design, solar deployment, and inverter configuration — but running entirely on walk-in customers. No online presence meant invisible to anyone searching for their services.\n\n**My Solution**\nI built a technical showcase website with a dynamic project gallery, detailed service breakdowns, and a diagnostic lead capture system that lets potential clients describe their needs and request a consultation.\n\n**Key Features**\n✓ Diagnostic enquiry form for consultations\n✓ Project gallery showing completed installations\n✓ Service breakdowns for each offering\n\n**The Outcome**\nAn online presence that captures diagnostic and consultation enquiries from clients who would have never found them through walk-ins alone.",
      category: "Web App",
      tags: ["Next.js", "React", "Tailwind CSS", "Lucide Icons", "Vercel"],
      image: "flash-j-mech",
      liveUrl: "https://flash-j-mech-web.vercel.app/",
      githubUrl: "https://github.com/boarnerges",
      impact: "Online visibility converting diagnostic enquiries"
    }
  ] as Project[],

  blog: [
    {
      id: "web-apps-scheduling-nightmare",
      title: "How a Custom Web App Solved a Small Business's Scheduling Nightmare",
      excerpt: "Uncoordinated bookings cost small local businesses thousands in lost clients. Here is how custom software resolves the mess.",
      content: "For small service businesses like salons, medical practices, or consultancies, scheduling is the engine of the business. When booking relies on manual phone calls, Excel sheets, or generic third-party plugins that don't talk to each other, appointments inevitably fall through the cracks.\n\nIn our recent engagement with a local clinic, the staff was spending an average of 15 hours per week manually reconciling appointments between a legacy desktop calendar and incoming phone calls. This led to double-bookings and a frustrated client base. We stepped in to engineer a custom web application tailored precisely to their operational flow.\n\nThe solution wasn't just a generic calendar—it was a robust scheduling portal that integrated directly with their local database and synced availability in real-time. We implemented automated SMS reminders, reducing no-shows by 40%, and introduced a self-service client dashboard. The result? Admin overhead plummeted, and the business could finally scale its operations without hiring additional front-desk staff. Custom software isn't an expense; it's a critical infrastructure investment.",
      category: "Business",
      readTime: "4 min read",
      date: "June 20, 2026"
    },
    {
      id: "visibility-seo-local-professionals",
      title: "Maximizing Digital Visibility: Practical SEO Strategies for Independent Professionals",
      excerpt: "Getting listed is not enough. Learn how local professionals are optimizing their sites to rank on search results.",
      content: "Many independent professionals—lawyers, therapists, private tutors—rely on expensive platforms that charge high fees for leads. By building a high-performance personal portal, you can own your digital real estate and cut out the middleman entirely.\n\nThe core of digital visibility lies in Technical SEO and performance optimization. Search engines prioritize sites that load rapidly and provide a seamless mobile experience. In this guide, we break down the critical checklist for local visibility: implementing accurate Schema Markup for local businesses, achieving perfect Core Web Vitals, and structuring site architecture so web crawlers can index your expertise.\n\nBeyond the code, content strategy plays a massive role. We advocate for creating location-focused service landing pages that target specific long-tail keywords (e.g., 'corporate immigration lawyer in Lagos' instead of just 'lawyer'). When your custom website is engineered correctly from the ground up, you stop paying for ads and start acquiring high-intent organic traffic that converts directly into paying clients.",
      category: "Visibility",
      readTime: "5 min read",
      date: "June 18, 2026"
    },
    {
      id: "why-nextjs-is-ultimate-small-business",
      title: "Why Next.js is the Ultimate Choice for Small Business Applications",
      excerpt: "Speed, performance, and SEO. Why we choose Next.js for client websites instead of traditional static sites.",
      content: "When choosing a tech stack for a client, the debate often boils down to traditional CMS platforms versus modern JavaScript frameworks. For client work, Next.js has emerged as the undisputed champion. It brings Server-Side Rendering (SSR), Static Site Generation (SSG), and secure API routes together under one unified hood.\n\nFor small business platforms, this translates to lightning-fast initial page loads—which is absolutely essential for retaining visitors and ranking highly on Google. Traditional static sites lack the interactivity required for modern business portals, while heavy single-page applications often suffer from poor SEO indexing. Next.js bridges this gap perfectly.\n\nFurthermore, the developer experience and ecosystem around Next.js allow us to ship features rapidly. Whether we are building a dynamic e-commerce catalog, a secure client booking portal, or a highly interactive dashboard, Next.js provides the architectural flexibility to scale. It ensures that the websites we deliver today will remain performant, secure, and maintainable for years to come.",
      category: "Development",
      readTime: "3 min read",
      date: "June 12, 2026"
    }
  ] as BlogPost[]
};
