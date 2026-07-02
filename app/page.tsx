import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Aegis Interlink | Cybersecurity, IT Infrastructure & Managed Services",
  description:
    "Aegis Interlink delivers end-to-end cybersecurity, networking infrastructure, managed IT services, and custom application development for federal agencies and enterprise clients.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Aegis Interlink | Cybersecurity, IT Infrastructure & Managed Services",
    description:
      "End-to-end cybersecurity, networking infrastructure, managed IT services, and custom application development for federal agencies and enterprise clients.",
  },
};

export default function Home() {
  return <HomeClient />;
}
