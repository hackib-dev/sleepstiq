import Image from "next/image";
import ShopImage from "../../public/images/shop.png";
import { Button } from "../ui/button";

const ShopSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-center px-5 md:px-16 xl:px-40 gap-5">
      <Image
        src={ShopImage}
        alt="shop"
        className="hidden md:block col-span-7 "
      />
      <div className="space-y-6 col-span-5">
        <p className="text-primary-blue font-bold text-3xl xl:text-3xl">
          Shop Now
        </p>

        <p className="text-[#7A888E] max-w-[420px] text-sm xl:text-base">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <Image src={ShopImage} alt="shop" className="block md:hidden" />
        <Button className="w-full xl:w-auto">Visit Shop</Button>
      </div>
    </div>
  );
};

export default ShopSection;
