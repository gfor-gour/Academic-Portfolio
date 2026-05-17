import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gour Gupal Talukder Shawon | Academic Portfolio",
  description: "B.Sc. in Software Engineering at Shahjalal University of Science and Technology. Research in Multi-agent LLMs, Federated Learning, and AI Evaluation.",
  keywords: [
    "Gour Gupal Talukder Shawon",
    "SUST",
    "Academic Portfolio",
    "Multi-agent LLM systems",
    "AI evaluation",
    "Federated Learning",
    "Software Engineering"
  ],
  authors: [{ name: "Gour Gupal Talukder Shawon" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${lora.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
