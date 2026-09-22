const SITE_URL = "https://sweetsteps.online";

export interface BreadcrumbTrailItem {
  name: string;
  /** Site-relative path, e.g. "/gallery" */
  href: string;
}

/**
 * Renders a BreadcrumbList JSON-LD script block.
 * Pass the full trail from Home to the current page.
 */
export default function BreadcrumbJsonLd({ trail }: { trail: BreadcrumbTrailItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
