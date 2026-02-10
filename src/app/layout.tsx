import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F & F Pest Control | Professional Pest Control Services in UAE",
  description: "F & F Pest Control Trading FZE - Leading pest control company in Ajman, UAE. We offer 24/7 professional pest control services for cockroaches, rats, bedbugs, termites & more. Call +971564999912",
  keywords: "pest control UAE, pest control Ajman, cockroach control, rat control, bedbug treatment, termite control, pest control services, F&F Pest Control, MAGIC pest killer",
  openGraph: {
    title: "F & F Pest Control | Professional Pest Control Services in UAE",
    description: "24/7 Professional pest control services in Ajman, UAE. Cockroaches, rats, bedbugs, termites & more.",
    url: "https://ffpest.com",
    siteName: "F & F Pest Control",
    locale: "en_AE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ffpest.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
