import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import OurProducts from "../../components/OurProducts/OurProducts";
import Services from "../../components/Services/Services";
import Hero from "@/components/Hero/Hero";
import FlashSales from "@/components/FlashSales/FlashSales";
import Categories from "@/components/Categories/Categories";
import BestSellingProducts from "@/components/BestSellingProducts/BestSellingProducts";
import EnhanceYourMusic from "@/components/EnhanceYourMusic/EnhanceYourMusic";
import Featured from "@/components/Featured/Featured";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { Link } from "react-router-dom";
const Home = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
      <section>
        <Toaster position="top-center" reverseOrder={false} />
        <Hero />
        <FlashSales />
        {user ?
          <>
            <Categories />
            <BestSellingProducts />
            <EnhanceYourMusic />
            <OurProducts />
            <Featured />
            <Services />
          </> : null}
      </section>
    </>
  );
};

export default Home;
