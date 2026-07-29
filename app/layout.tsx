import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Creative Studio Companion",
  description: "Learn to see, think, and work like a designer.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
