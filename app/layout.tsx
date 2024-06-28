import type { Metadata } from "next";
import "./globals.css";
import { relative } from "path";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Cars On Rent With Drivers - Musafir Tours Travels Pune",
  description:
    "The Best Tours and Travels Company In India. Car Rental With Drivers, Self-Drive Cars On Rent, Holiday and Tourism Packages All Over India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
