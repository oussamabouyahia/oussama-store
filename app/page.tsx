import HeaderSlider from "@/components/HeaderSlider";
import { Navbar } from "@/components/Navbar";
import { fetchProducts } from "../utils/actions/product.action";
import HomeProducts from "@/components/HomeProducts";
import { Footer } from "@/components/Footer";
const allProducts = await fetchProducts();

export default function page() {
  return (
    <div>
      <Navbar />
      <div>
        <HeaderSlider />
        <HomeProducts products={allProducts} />
      </div>
      <Footer />
    </div>
  );
}
