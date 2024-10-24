import Image from "next/image";
import BgImage from "../../public/images/bgImage.png";
import { Button } from "../ui/button";
import Forbes from "../../public/images/forbes.png";
import { PartnersLogos } from "@/app/constants";

const HeroSection = () => {
  return (
    <div className="relative w-full h-fit md:h-[650px]   xl:h-screen ">
      <Image
        src={BgImage}
        alt="Background Image"
        layout="fill"
        className="absolute z-[-1] md:object-contain xl:object-cover opacity-50 xl:opacity-100"
        loading="lazy"
      />

      <div className="h-full px-5 md:px-16 xl:px-40 pt-16 md:pt-40 space-y-6 py-10 md:py-0">
        <h1 className="text-primary-blue text-lg">
          We&apos;re here to help you
        </h1>
        <p className="text-primary-blue font-bold text-6xl">Relax & Rest</p>
        <p className="text-primary-blue md: xl:max-w-xl">
          With the aid of our Melatonin Sleepstiq, we can assure you that you
          can get quality sleep.
        </p>
        <Button className="w-full md:w-auto">Visit Shop</Button>
      </div>

      <div className="bg-white overflow-x-hidden absolute bottom-0 left-0 xl:left-40 right-0  transform translate-y-[100%] md:translate-y-0 xl:translate-y-1/2 shadow-xl">
        <div className="relative w-[1500px] h-[100px] ">
          <div className="animate-primary flex justify-around h-full absolute left-0 top-0 w-full items-center p-4 ">
            {PartnersLogos.map((logo, Idx) => {
              return (
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  key={Idx}
                  className={`${
                    logo.image === Forbes ? "w-fit h-6" : "w-fit h-8"
                  }`}
                  placeholder="blur"
                />
              );
            })}
          </div>

          <div className="animate-secondary flex justify-around h-full absolute left-0 top-0 w-full items-center p-4 ">
            {PartnersLogos.map((logo, Idx) => {
              return (
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  key={Idx}
                  className={`${
                    logo.image === Forbes ? "w-fit h-6" : "w-fit h-8"
                  }`}
                  placeholder="blur"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
