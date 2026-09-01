import type { Metadata } from "next";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://brenda-studio-portfolio.vercel.app"),
  title: {
    default: "Brenda Freitas — Product, Full Stack & AI",
    template: "%s | Brenda Freitas",
  },
  description:
    "Full Stack Developer portfolio focused on Next.js, React, TypeScript, Supabase, SaaS products, CRM workflows and AI automation.",
  keywords: ["Full Stack Developer", "Next.js", "React", "TypeScript", "Supabase", "SaaS", "Frontend Developer", "AI Automation"],
  openGraph: {
    title: "Brenda Freitas — Full Stack Developer",
    description: "SaaS, full-stack products, React/Next.js applications and AI-enabled workflows.",
    type: "website",
    siteName: "Brenda Freitas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brenda Freitas — Full Stack Developer",
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
