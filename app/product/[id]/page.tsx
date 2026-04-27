import ProductDetails from "@/components/ProductDetails";
import { fetchProductById } from "@/utils/actions/product.action";

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await fetchProductById(id);
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};
export default Product;
