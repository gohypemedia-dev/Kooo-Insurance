import type { Metadata } from "next";
import { ProductDetailPage } from "@/components/sections/product-detail-page";
import { getProduct, slugify } from "@/content/products";
import { getCategory } from "@/content/site";

type Props = {
  params: Promise<{ product: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product } = await params;
  const detail = getProduct(product);
  if (detail) {
    return {
      title: `${detail.title} | Personal Insurance`,
      description: detail.summary,
    };
  }
  const category = getCategory("personalinsurance");
  const matched = category.items.find((i) => slugify(i.title) === product);
  return {
    title: matched ? `${matched.title} | Personal Insurance` : "Personal Insurance",
    description: matched?.description ?? "Personal asset, home, and motor insurance solutions across Australia.",
  };
}

export default async function Page({ params }: Props) {
  const { product } = await params;
  return <ProductDetailPage categorySlug="personalinsurance" productSlug={product} />;
}

