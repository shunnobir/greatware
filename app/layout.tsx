import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = localFont({
  src: "./fonts/Inter-VariableFont.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const interItalic = localFont({
  src: "./fonts/Inter-Italic-VariableFont.ttf",
  variable: "--font-inter-italic",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Great Ware",
  description:
    "Empowering businesses with elite development teams. From start to scale, we build custom software solutions tailored to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interItalic.variable} bg-white antialiased`}
      >
        <header className="border-b border-solid border-slate-200">
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
