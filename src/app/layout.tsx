import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "F & F Pest Control | Professional Pest Control Services in UAE",
  description: "Professional pest control services in Ajman and UAE. 24/7 cockroach, rat, bedbug, and termite control. Call +971 56 499 9912 for a free quote!",
  keywords: "pest control, pest control UAE, pest control Ajman, cockroach control, rat control, bedbug treatment, termite control, MAGIC pest control",
  openGraph: {
    title: "F & F Pest Control | Professional Pest Control Services in UAE",
    description: "Professional pest control services in Ajman and UAE. 24/7 cockroach, rat, bedbug, and termite control.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0a1a0f] text-white">
        {children}
      </body>
    </html>
  );
}
