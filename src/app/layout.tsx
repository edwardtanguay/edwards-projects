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
	title: "Edward Tanguay | Full-Stack Developer & Datapod Architect",
	description: "Portfolio of Edward Tanguay, showcasing 20+ years of full-stack development expertise, the Datapod framework, and modern web applications.",
	icons: {
		icon: "/favicon.png",
	},
	openGraph: {
		title: "Edward Tanguay | Full-Stack Developer & Datapod Architect",
		description: "Portfolio of Edward Tanguay, showcasing 20+ years of full-stack development expertise, the Datapod framework, and modern web applications.",
		url: "https://edwards-projects.vercel.app",
		siteName: "Edward's Projects",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Edward Tanguay Portfolio",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Edward Tanguay | Full-Stack Developer & Datapod Architect",
		description: "Portfolio of Edward Tanguay, showcasing 20+ years of full-stack development expertise, the Datapod framework, and modern web applications.",
		images: ["/og-image.png"],
	},
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
