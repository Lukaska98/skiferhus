import ProductGroupPage from "@/components/ProductGroupPage";
import { productGroups } from "../../data/product-series";

export default function StounlinePage() {
  return <ProductGroupPage group={productGroups[0]} />;
}
