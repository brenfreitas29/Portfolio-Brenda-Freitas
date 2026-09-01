import type { Metadata } from "next";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Brenda Freitas — Product, Full Stack & AI",
  description:
    "Full Stack Developer portfolio focused on Next.js, React, TypeScript, Supabase, SaaS products, CRM workflows and AI automation.",
  keywords: ["Full Stack Developer", "Next.js", "React", "TypeScript", "Supabase", "SaaS", "Frontend Developer", "AI Automation"],
  openGraph: {
    title: "Brenda Freitas — Full Stack Developer",
    description: "SaaS, full-stack products, React/Next.js applications and AI-enabled workflows.",
    type: "website",
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
        {/* Prevent browser automatic translation */}
        <meta
          name="google"
          content="notranslate"
        />
      </head>

      <body
        suppressHydrationWarning
        className="bg-[#24194f] text-white antialiased"
      >
        {/* Custom cosmic cursor */}
        <CustomCursor />

        {/* Website */}
        {children}
      </body>
    </html>
  );
}