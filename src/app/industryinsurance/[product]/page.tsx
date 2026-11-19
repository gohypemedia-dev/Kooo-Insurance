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
      title: `${detail.title} | Industry Insurance`,
      description: detail.summary,
    };
  }
  const category = getCategory("industryinsurance");
  const matched = category.items.find((i) => slugify(i.title) === product);
  return {
    title: matched ? `${matched.title} | Industry Insurance` : "Industry Insurance",
    description: matched?.description ?? "Specialised industry insurance packages across Australia.",
  };
}

export default async function Page({ params }: Props) {
  const { product } = await params;
  return <ProductDetailPage categorySlug="industryinsurance" productSlug={product} />;
}

