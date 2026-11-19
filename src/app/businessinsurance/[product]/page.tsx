import type { Metadata } from "next";
import { ProductDetailPage } from "@/components/sections/product-detail-page";
import { getProduct, getProductsByCategory, slugify } from "@/content/products";
import { getCategory } from "@/content/site";

type Props = {
  params: Promise<{ product: string }>;
};

export function generateStaticParams() {
  const category = getCategory("businessinsurance");
  const siteSlugs = category ? category.items.map((i) => slugify(i.title)) : [];
  const productSlugs = getProductsByCategory("businessinsurance").map((p) => p.slug);
  const combined = Array.from(new Set([...siteSlugs, ...productSlugs]));
  return combined.map((product) => ({ product }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product } = await params;
  const detail = getProduct(product);
  if (detail) {
    return {
      title: `${detail.title} | Business Insurance`,
      description: detail.summary,
    };
  }
  const category = getCategory("businessinsurance");
  const matched = category?.items.find((i) => slugify(i.title) === product);
  return {
    title: matched ? `${matched.title} | Business Insurance` : "Business Insurance Product",
    description: matched?.description ?? "Commercial business insurance solutions across Australia.",
  };
}

export default async function Page({ params }: Props) {
  const { product } = await params;
  return <ProductDetailPage categorySlug="businessinsurance" productSlug={product} />;
}
