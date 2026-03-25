import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Próximo Prato",
  description: "Projeto do curso de NextJS 15 com React 19 e Tailwind 4",
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
