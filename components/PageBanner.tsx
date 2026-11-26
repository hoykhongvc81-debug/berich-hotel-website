import Link from "next/link";

// Dark top band for sub-pages: keeps the fixed header (white text when not
// scrolled) readable, and holds the page's H1 and breadcrumb.
export default function PageBanner({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative bg-gradient-to-b from-burgundy-dark via-burgundy to-burgundy pt-32 pb-14 px-6 text-center">
      <nav aria-label="Breadcrumb" className="font-sarabun text-xs text-white/60 mb-6">
        {crumbs.map((c, i) => (
          <span key={c.label}>
            {i > 0 && <span className="mx-2">/</span>}
            {c.href ? (
              <Link href={c.href} className="hover:text-gold transition-colors">
                {c.label}
              </Link>
            ) : (
              <span className="text-white/90">{c.label}</span>
            )}
          </span>
        ))}
      </nav>
      <p className="font-sarabun text-gold text-xs tracking-[0.4em] uppercase mb-3">{eyebrow}</p>
      <h1 className="font-sarabun text-3xl md:text-5xl text-white font-bold leading-tight max-w-4xl mx-auto">{title}</h1>
      {intro && (
        <p className="font-sarabun text-white/75 text-sm md:text-base max-w-2xl mx-auto mt-5 leading-relaxed">{intro}</p>
      )}
    </section>
  );
}
