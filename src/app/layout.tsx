import type { Metadata } from "next";
import { Inknut_Antiqua, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inknut_antiqua = Inknut_Antiqua({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inknut-antiqua",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "sustAIn",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inknut_antiqua.variable} ${plus_jakarta_sans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
