import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aegisinterlink.com"),
  title: {
    default: "Aegis Interlink | Cybersecurity, IT Infrastructure & Managed Services",
    template: "%s | Aegis Interlink",
  },
  description:
    "Aegis Interlink delivers end-to-end cybersecurity, networking infrastructure, managed IT services, and custom application development for federal agencies and enterprise clients.",
  keywords: [
    "cybersecurity",
    "managed IT services",
    "penetration testing",
    "cloud security",
    "IT infrastructure",
    "federal IT contractor",
    "SOC analyst",
    "DevSecOps",
    "FedRAMP",
    "Aegis Interlink",
  ],
  authors: [{ name: "Aegis Interlink" }],
  applicationName: "Aegis Interlink",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Aegis Interlink",
    title: "Aegis Interlink | Cybersecurity, IT Infrastructure & Managed Services",
    description:
      "End-to-end cybersecurity, networking infrastructure, managed IT services, and custom application development for federal agencies and enterprise clients.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aegis Interlink | Cybersecurity, IT Infrastructure & Managed Services",
    description:
      "End-to-end cybersecurity, networking infrastructure, managed IT services, and custom application development for federal agencies and enterprise clients.",
  },
  verification: {
    google: "7UnEK2makzikCvdnB2LZDEgz13yN1FlvCziNP4UvzmU",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
