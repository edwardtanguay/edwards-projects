import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edwards-projects.vercel.app"),
  title: "Edward's Projects",
  description: "All my projects including starter sites for your quick development needs",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Edward's Projects ",
    description: "All my projects including starter sites for your quick development needs",
    url: "https://edwards-projects.vercel.app",
    siteName: "Edward's Projects",
    images: [
      {
        url: "https://edwards-projects.vercel.app/images/seo-thumbnail.png",
        width: 256,
        height: 256,
        alt: "Edward's Projects - all my projects"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@edwardtanguay",
    title: "Edward's Projects",
    description: "All my projects including starter sites for your quick development needs",
    images: ["https://edwards-projects.vercel.app/images/seo-thumbnail.png"],
  },
  other: {
    "og:image:type": "image/png",
    "og:image:width": "256",
    "og:image:height": "256",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100`}
      >
        <div className="flex h-screen flex-col md:flex-row">
          <Navigation />
          <main className="flex-1 overflow-auto pt-16 md:pt-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
