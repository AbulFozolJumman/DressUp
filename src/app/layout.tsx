import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Providers from "@/lib/Providers";
import ProvidersOfPersistGate from "@/Providers/ProvidersOfPersistGate";
import Footer from "@/components/shared/Footer";

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
          <ProvidersOfPersistGate>
            <Navbar />
            <div className="min-h-screen">{children}</div>
            <Footer />
          </ProvidersOfPersistGate>
        </body>
      </html>
    </Providers>
  );
}
