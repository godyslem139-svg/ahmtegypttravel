import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // استيراد الهيدر من مجلد components
import Footer from "@/components/Footer"; // استيراد الفوتر من مجلد components

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AHMT Egypt Travel | Explore The Pharaonic Magic",
  description: "Discover the best tours and travel packages in Egypt with AHMT Egypt Travel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-navy text-white">
        {/* الهيدر يظهر في كل صفحات الموقع */}
        <Navbar />
        
        {/* المحتوى المتغير لكل صفحة */}
        <main className="flex-grow">
          {children}
        </main>

        {/* الفوتر سيظهر الآن في كل صفحات الموقع تلقائياً */}
        <Footer />
      </body>
    </html>
  );
}