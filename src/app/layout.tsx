import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/fonts.css";

import Paper from "@/components/Paper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Della_Respira } from "next/font/google";

const d_respira = Della_Respira({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Satyaloka",
  description: "The realm of truth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <div className={"w-full flex items-center justify-center " + d_respira.className}>
          <Paper>
            <Header />
            <div className="flex flex-col gap-8">
            {children}
            </div>
            <Footer />
          </Paper>
        </div>
      </body>
    </html>
  );
}
