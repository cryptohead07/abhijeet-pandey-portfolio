import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhijeet Pandey — Founder, Developer, Product Builder",
  description: "The work of Abhijeet Pandey: founder, developer, and product builder at VibTish Ventures.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
