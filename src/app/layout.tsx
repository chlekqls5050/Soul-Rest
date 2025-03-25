import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIND COMMA,",
  description: "MIND COMMA,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
