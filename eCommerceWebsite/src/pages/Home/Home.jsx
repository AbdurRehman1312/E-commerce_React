import { Toaster } from "react-hot-toast";
import OurProducts from "../../components/OurProducts/OurProducts";
import Services from "../../components/Services/Services";
import Hero from "@/components/Hero/Hero";
import FlashSales from "@/components/FlashSales/FlashSales";
import Categories from "@/components/Categories/Categories";
import BestSellingProducts from "@/components/BestSellingProducts/BestSellingProducts";
import EnhanceYourMusic from "@/components/EnhanceYourMusic/EnhanceYourMusic";
import Featured from "@/components/Featured/Featured";
const Home = () => {

  return (
    <>
      <section>
        <Toaster position="top-center" reverseOrder={false} />
        <Hero />
        <FlashSales />
        <Categories />
        <BestSellingProducts />
        <EnhanceYourMusic />
        <OurProducts />
        <Featured />
        <Services />
      </section>
    </>
  );
};

export default Home;
