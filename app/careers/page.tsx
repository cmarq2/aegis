import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Aegis Interlink. Explore open roles in cybersecurity, cloud engineering, DevSecOps, and software development, with remote and hybrid opportunities across the U.S.",
  alternates: { canonical: "/careers" },
  openGraph: {
    url: "/careers",
    title: "Careers | Aegis Interlink",
    description:
      "Explore open roles in cybersecurity, cloud engineering, DevSecOps, and software development at Aegis Interlink.",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
