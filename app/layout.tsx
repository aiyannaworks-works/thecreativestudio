import type { Metadata } from "next";
import { DM_Serif_Display, Inter, Merriweather } from "next/font/google";
import "./globals.css";

const display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const reading = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-reading",
});

const interfaceFont = Inter({
  subsets: ["latin"],
  variable: "--font-interface",
});

export const metadata: Metadata = {
  title: "The Creative Studio",
  description: "Learn to see, think, and work like a designer.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${reading.variable} ${interfaceFont.variable}`}>{children}</body>
    </html>
  );
}
