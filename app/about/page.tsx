import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aegis Interlink has grown from a boutique IT consultancy into a full-spectrum managed cybersecurity and IT services provider trusted by federal and enterprise clients.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About | Aegis Interlink",
    description:
      "Aegis Interlink has grown from a boutique IT consultancy into a full-spectrum managed cybersecurity and IT services provider trusted by federal and enterprise clients.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
