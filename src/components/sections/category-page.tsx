import { categories, type Category } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { ListRows } from "@/components/sections/list-rows";
import { ImageBand } from "@/components/sections/image-band";
import { CtaBand } from "@/components/sections/cta-band";
import { slugify } from "@/content/products";

// Shared layout for the six insurance category pages.
// Each product row links through to its dedicated product page.
export function CategoryPage({ category }: { category: Category }) {
  const others = categories
    .filter((c) => c.slug !== category.slug)
    .map((c) => ({ label: c.name, href: `/${c.slug}` }));

  const itemsWithLinks = category.items.map((item) => ({
    ...item,
    href: item.href ?? `/${category.slug}/${slugify(item.title)}`,
  }));

  return (
    <>
      <PageTitle words={[category.shortName, "Insurance"]} intro={category.intro} />
      <section className="relative z-10 px-6 pb-28 md:px-8 md:pb-36">
        <div className="mb-8 flex items-center justify-between border-b border-navy/20 pb-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-navy/70">
            Available Coverages ({category.items.length})
          </span>
          <span className="text-xs text-muted-foreground">
            Click any product for full coverage details &amp; policy terms &rarr;
          </span>
        </div>
        <ListRows items={itemsWithLinks} />
      </section>
      <ImageBand image={category.image} rotating={{ prefix: "Also explore:", items: others }} />
      <CtaBand title={category.cta.title} text={category.cta.text} />
    </>
  );
}
