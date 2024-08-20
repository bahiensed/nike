import type { Metadata } from "next";
import { inter } from '@/fonts';
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "X-Tudo",
  description: "Curso de Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        
        {children}

      </body>
    </html>
  );
}
