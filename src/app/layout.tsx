import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dress Up",
  description: "Youth & Young Clothing Style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
