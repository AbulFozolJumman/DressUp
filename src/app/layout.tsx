import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Providers from "@/lib/Providers";

export const metadata: Metadata = {
  title: "Dress Up",
  description: "Young & Youth Clothing Store",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" data-theme="light">
        <body>
          <Navbar />
          <div className="min-h-screen w-[90%] mx-auto">{children}</div>
        </body>
      </html>
    </Providers>
  );
}
