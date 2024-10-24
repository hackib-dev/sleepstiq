import Footer from "@/components/Footer/page";
import HeroSection from "@/components/HeroSection/page";
import MissionSection from "@/components/MissionSection/page";
import Navbar from "@/components/Navbar/page";
import Products from "@/components/Products/page";
import ShopSection from "@/components/ShopSection/page";
import StorySection from "@/components/StorySection/page";
import VisitSection from "@/components/VisitSection/page";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StorySection />
      <ShopSection />
      <MissionSection />
      <VisitSection />
      <Products />
      <Footer />
    </>
  );
}
