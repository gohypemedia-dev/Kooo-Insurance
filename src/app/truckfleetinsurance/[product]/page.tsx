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
      title: `${detail.title} | Truck & Fleet Insurance`,
      description: detail.summary,
    };
  }
  const category = getCategory("truckfleetinsurance");
  const matched = category.items.find((i) => slugify(i.title) === product);
  return {
    title: matched ? `${matched.title} | Truck & Fleet Insurance` : "Truck & Fleet Insurance",
    description: matched?.description ?? "Truck and fleet insurance solutions across Australia.",
  };
}

export default async function Page({ params }: Props) {
  const { product } = await params;
  return <ProductDetailPage categorySlug="truckfleetinsurance" productSlug={product} />;
}

