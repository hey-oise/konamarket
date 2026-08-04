import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const popins = Poppins({
  weight : ["400", "500", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "konamarket",
  description: "buy groceries and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${popins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-amber-100">{children}</body>
    </html>
  );
}
