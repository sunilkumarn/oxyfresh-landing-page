import type { Metadata } from "next";
import "./globals.css";

const publicAssetPath = process.env.GITHUB_PAGES === "true" ? "/oxyfresh-landing-page" : "";
const logoPath = `${publicAssetPath}/oxyfresh-logo.png`;
const faviconPath = `${publicAssetPath}/favicon.png`;

export const metadata: Metadata = {
  title: "OxyFresh | Vegetable & Fruits Shop",
  description:
    "Premium ozone-washed fruits and vegetables delivered fresh across Kochi.",
  icons: {
    icon: faviconPath,
    shortcut: faviconPath,
    apple: logoPath,
  },
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
