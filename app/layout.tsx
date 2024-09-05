import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pienteger - Bespoke Software Solution Provider",
  description: "Pienteger is one of the top software development outsourcing companies in Asia. We offer exclusive offshore software development services to optimize business functions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-satoshi relative">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
