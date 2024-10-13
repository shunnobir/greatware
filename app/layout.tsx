import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter-VariableFont.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

const interItalic = localFont({
  src: "./fonts/Inter-Italic-VariableFont.ttf",
  variable: "--font-inter-italic",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Great Ware",
  description:
    "We help build and manage a team of world-class developers to bring your vision to life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interItalic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
