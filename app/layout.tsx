import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OxyFresh | Vegetable & Fruits Shop",
  description:
    "Premium ozone-washed fruits and vegetables delivered fresh across Kochi.",
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
