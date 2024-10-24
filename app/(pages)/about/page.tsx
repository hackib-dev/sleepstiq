import Image from "next/image";
import AboutBgImage from "../../../public/images/aboutBgImage.png";
import { Button } from "../../../components/ui/button";
import Mission from "../../../public/images/mission.png";
import ShopImage from "../../../public/images/shop.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReviewCard from "@/components/StorySection/ReviewCard/page";
import { Reviewers } from "@/components/StorySection/ReviewCard/constants";

const AboutUs = () => {
  return (
    <>
      <div className="relative w-full h-full md:h-[400px]   xl:h-screen ">
        <Image
          src={AboutBgImage}
          alt="Background Image"
          layout="fill"
          className="absolute z-[-1] md:object-contain xl:object-cover opacity-50 xl:opacity-100"
          loading="lazy"
        />

        <div className="h-full px-5 md:px-16 xl:px-40 pt-16 md:pt-40 space-y-6 py-10 md:py-0 items-center  flex flex-col">
          <h1 className="text-primary-blue text-lg ">
            We&apos;re here to help you
          </h1>
          <p className="text-primary-blue font-bold text-6xl text-center">
            Relax & Rest
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 items-center pl-5 md:pl-16 xl:pl-40 gap-5 my-16 xl:my-32">
        <div className="space-y-6 col-span-5">
          <p className="text-primary-blue font-bold text-3xl xl:text-3xl">
            About Us
          </p>

          <p className="text-primary-blue  text-sm xl:text-base max-w-[420px]">
            When concentrated melatonin is inhaled, in theory, it is instantly
            absorbed by alveoli in the lungs and enters the bloodstream, instead
            of being metabolized by the liver, as would a tablet. Only a small
            amount of melatonin, then, is required to create a physiological
            effect. In October 2020, Sleepstiq was birthed to bring a lasting
            solution to the sleeping problem of humans. Once inhaled, melatonin
            enters the bloodstream and immediately begins to “mellow you out”
            before leaving you “sleeping on a cloud.”
          </p>
        </div>
        <Image src={Mission} alt="shop" className="col-span-7" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 items-center px-5 md:px-16 xl:px-40 gap-5">
        <Image
          src={ShopImage}
          alt="shop"
          className="hidden md:block col-span-7 "
        />
        <div className="space-y-6 col-span-5">
          <p className="text-primary-blue font-bold text-3xl xl:text-3xl">
            About Product
          </p>

          <p className="text-[#7A888E] max-w-[420px] text-sm xl:text-base">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <Image src={ShopImage} alt="shop" className="block md:hidden" />
          <Button className="w-full xl:w-auto">Visit Shop</Button>
        </div>
      </div>
      <hr className="mx-5 md:mx-16 xl:mx-40 my-10" />
      <div className="pl-5 md:pl-16 xl:pl-40">
        <div className="mt-8 lg:mt-10 xl:mt-14">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {Reviewers.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-[90%] md:basis-[40%] lg:basis-[30%]"
                >
                  <div className="p-1">
                    <ReviewCard body={review.body} name={review.name} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col justify-items-center px-5 md:px-16 xl:px-44 items-start xl:items-center my-20 space-y-8">
        <h1 className="text-3xl text-primary-blue font-bold">Visit Our Shop</h1>
        <p className="text-start xl:text-center text-[#7A888E]">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <Button className="w-full md:w-auto">Visit Shop</Button>
      </div>
    </>
  );
};

export default AboutUs;
