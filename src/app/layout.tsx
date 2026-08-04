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
  description:
    "Shop quality groceries & house hold item.",


  authors: [{ name: "konamarket" }],
  creator: "Oise Okugbe",
  publisher: "konamarket",

  openGraph: {
    title: "konamarket",
    description:
      "Shop quality groceries & house hold item.",
    url: "https://konamarket.vercel.app", // Replace with the real domain
    siteName: "konamarket",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "konamarket",
      },
    ],
    locale: "en_US",
    type: "website",
  },

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
