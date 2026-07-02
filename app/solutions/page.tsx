import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Aegis Interlink's cybersecurity, cloud, managed IT, and application development solutions built for federal agencies and enterprise clients.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    url: "/solutions",
    title: "Solutions | Aegis Interlink",
    description:
      "Cybersecurity, cloud, managed IT, and application development solutions built for federal agencies and enterprise clients.",
  },
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}
