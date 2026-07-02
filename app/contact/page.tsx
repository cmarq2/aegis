import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aegis Interlink. Tell us about your project — we respond within one business day. Headquartered in Denver, CO.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact | Aegis Interlink",
    description: "Get in touch with Aegis Interlink. We respond within one business day.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
