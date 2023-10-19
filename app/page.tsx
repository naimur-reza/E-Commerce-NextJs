import Banner from "./components/Banner";
import GridGallery from "./components/GridGallery";
import ProductMarquee from "./components/ProductMarquee";

export default function Home() {
  return (
    <div className="space-y-5">
      <Banner />
      <GridGallery />
      <ProductMarquee />
    </div>
  );
}
