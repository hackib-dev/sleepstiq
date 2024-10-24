"use client";

import Image from "next/image";
import ShopBgImage from "../../../public/images/shopBgImage.png";
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
import { useState } from "react";

const Shop = () => {
  const basePrice = 25;
  const [quantity, setQuantity] = useState(2);
  const [price, setPrice] = useState(basePrice * quantity);

  const handlePrice = (e: { target: { value: any } }) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
    setPrice(basePrice * newQuantity);
  };

  return (
    <>
      <div className="relative w-full h-full md:h-[400px]   xl:h-screen ">
        <Image
          src={ShopBgImage}
          alt="Background Image"
          layout="fill"
          className="absolute z-[-1] md:object-contain xl:object-cover opacity-50 xl:opacity-100"
          loading="lazy"
        />

        <div className="h-full px-5 md:px-16 xl:px-40 pt-16 md:pt-48 xl:pt-56 space-y-6 py-10 md:py-0 text-center md:text-start">
          <h1 className="text-primary-blue text-lg ">
            We&apos;re here to help you
          </h1>
          <p className="text-primary-blue font-bold text-6xl">Relax & Rest</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 items-center px-5 md:px-16 xl:px-40 gap-5 my-16 ">
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

          <div>
            <p>😊 Promotes calm and relaxation. </p>
            <p>💤 Inhalation allows for a rapid effect. </p>
            <p>✅ 100% drug-free, plant-based ingredients.</p>
            <p>‍⚕️ 3rd-party lab tested.</p>
          </div>
          <Image src={ShopImage} alt="shop" className="block md:hidden" />
          <div className="flex gap-10">
            <div>
              <p>Price</p>
              <p className="font-semibold mt-1">USD {price}</p>
            </div>
            <div>
              <p>Unit</p>
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={handlePrice}
                className="border-2 border-primary-blue rounded-md w-16 h-9 p-3 mt-1"
              />
            </div>
          </div>

          <Button className="w-full xl:w-auto">Buy</Button>
        </div>
      </div>
      <hr className="mx-5 md:mx-16 xl:mx-40 my-10" />
      <div className="pl-5 md:pl-16 xl:pl-40 my-20">
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
    </>
  );
};

export default Shop;
