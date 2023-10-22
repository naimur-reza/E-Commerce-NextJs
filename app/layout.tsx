import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daddy Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NavBar />
        <Theme appearance="dark">
          <main className="p-5 min-h-[calc(100vh-132px)] ">{children}</main>
        </Theme>
        <Footer />
      </body>
    </html>
  );
}
