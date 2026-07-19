import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Sumanth Reddy Konannagari | Full-Stack AI Engineer";
const description =
  "Full-stack and AI engineer building scalable backend systems, cloud-native applications, enterprise APIs, RAG pipelines, and agentic AI solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title,
    description,
    url: profile.siteUrl,
    siteName: "Sumanth Reddy Konannagari — Portfolio",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: profile.name,
    jobTitle: "Full-Stack AI Engineer",
    description,
    email: `mailto:${profile.email}`,
    url: profile.siteUrl,
    address: { "@type": "PostalAddress", addressRegion: "Ontario", addressCountry: "CA" },
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: [
      "Full-Stack Software Engineering",
      "AI and Machine Learning Engineering",
      "Java",
      "Spring Boot",
      "C#",
      "ASP.NET Web API",
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "RAG pipelines",
      "AI agents",
      "AWS",
      "Docker",
      "CI/CD",
      "PostgreSQL",
      "MySQL",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans text-content-primary antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
