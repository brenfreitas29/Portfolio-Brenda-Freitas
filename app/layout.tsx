import type { Metadata } from "next";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://brenda-studio-portfolio.vercel.app"),
  title: {
    default: "Brenda Freitas — Junior Full Stack Developer",
    template: "%s | Brenda Freitas",
  },
  description:
    "Junior Full Stack Developer in Buenos Aires. Explore real React, Next.js and Supabase projects: FlowDesk, VivaTrip and Hair & Skin Clinic.",
  keywords: ["Junior Full Stack Developer", "Next.js", "React", "TypeScript", "Supabase", "SaaS", "Frontend Developer", "AI Automation"],
  openGraph: {
    title: "Brenda Freitas — Junior Full Stack Developer",
    description: "SaaS, full-stack products, React/Next.js applications and AI-enabled workflows.",
    type: "website",
    siteName: "Brenda Freitas Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Brenda Freitas — Junior Full Stack Developer",
    description: "SaaS, full-stack products, React/Next.js applications and AI-enabled workflows.",
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
      translate="no"
      suppressHydrationWarning
    >
      <head>
        <meta
          name="google"
          content="notranslate"
        />
      </head>

      <body
        suppressHydrationWarning
        className="bg-[#24194f] text-white antialiased"
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
