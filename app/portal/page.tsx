import type { Metadata } from "next";
import PortalClient from "./PortalClient";

export const metadata: Metadata = {
  title: "Client Portal",
  description: "Sign in to the Aegis Interlink client and employee portal.",
  robots: { index: false, follow: false },
};

export default function PortalPage() {
  return <PortalClient />;
}
