import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nameme Animals - 입양 가능한 동물",
  description: "보호소 동물 입양 안내",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
