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
      title: `${detail.title} | Specialty Insurance`,
      description: detail.summary,
    };
  }
  const category = getCategory("specialtyinsurance");
  const matched = category.items.find((i) => slugify(i.title) === product);
  return {
    title: matched ? `${matched.title} | Specialty Insurance` : "Specialty Insurance",
    description: matched?.description ?? "Specialty insurance solutions across Australia.",
  };
}

export default async function Page({ params }: Props) {
  const { product } = await params;
  return <ProductDetailPage categorySlug="specialtyinsurance" productSlug={product} />;
}

