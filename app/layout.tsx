import type { Metadata } from "next";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding App - Home Page",
  description:
    "My wedding e-invitation for friend and family of thon and roth on 1st of March 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="kh">
      <body className={`${montserrat.className} `}>
        <Navbar />
        <main className="w-full grow mt-19.5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
