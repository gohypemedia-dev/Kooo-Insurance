import type { Metadata } from "next";
import InsuranceSolutionsPage, { metadata as solMetadata } from "../insurancesolutions/page";

export const metadata: Metadata = {
  ...solMetadata,
  title: "Insurance Solutions | Kooo Insurance",
};

export default InsuranceSolutionsPage;

