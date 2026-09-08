import ProductGroupPage from "@/components/ProductGroupPage";
import { productGroups } from "../../data/product-series";

export default function RioGrandePage() {
  return <ProductGroupPage group={productGroups[1]} />;
}
