import type { Metadata } from "next";
import ApplyClient from "./ApplyClient";
import { allRoles, getRoleBySlug } from "../../data";

export function generateStaticParams() {
  return allRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getRoleBySlug(slug);

  if (!role) {
    return { title: "Careers", robots: { index: false, follow: false } };
  }

  const title = `${role.title} — ${role.location}`;
  const description = `${role.title} (${role.type}, ${role.level}) at Aegis Interlink. ${role.location}. ${role.salary}. ${role.overview.slice(0, 140)}...`;

  return {
    title,
    description,
    alternates: { canonical: `/careers/apply/${role.slug}` },
    openGraph: {
      url: `/careers/apply/${role.slug}`,
      title: `${title} | Aegis Interlink Careers`,
      description,
    },
  };
}

export default function ApplyPage() {
  return <ApplyClient />;
}
