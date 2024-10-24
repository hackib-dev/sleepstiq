import { FaCaretRight } from "react-icons/fa6";
import James from "../../public/images/james.png";
import Bottom from "../../public/images/bottom.png";
import Image from "next/image";
import ReviewCard from "./ReviewCard/page";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reviewers } from "./ReviewCard/constants";

const StorySection = () => {
  return (
    <div className="mt-40 md:mt-20 xl:mt-40  mb-10 xl:mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2  px-5 md:px-16 xl:px-40 mb-16 md:mb-20 xl:mb-36 items-center gap-16">
        <div>
          <p className="text-primary-blue mb-7">Our Amazing Story</p>

          <p className="text-primary-blue font-bold text-4xl mb-5 md:mb-10">
            10k+ Happy Customers
          </p>

          <div className="block md:hidden bg-[#FBF9F2] px-10 pt-14 pb-5 max-w-sm mx-auto shadow-2xl leading-8 italic">
            <p>
              I&apos;m a very anxious person but use this and feel so relaxed
              and sleep way better now with the aid of sleepstiq.
            </p>

            <div className="flex items-center gap-5 mt-20">
              <Image src={James} alt="ceo" className=" w-14" />
              <div>
                <p className="text-[#4D533C] font-bold">James Miller</p>
                <p>CEO, Techbias</p>
              </div>
            </div>
            <Image src={Bottom} alt="ceo" className="w-8 mt-5 mx-auto" />
          </div>

          <p className="text-[#7A888E] leading-7 my-7">
            There’s no secret sauce, no wizard behind the curtain. What makes
            Aerolab tick is an interdisciplinary team with a framework that
            fosters candid collaboration.
          </p>

          <p className="text-primary-blue font-semibold flex items-center underline">
            <FaCaretRight />
            More know About us
          </p>
        </div>
        <div className="hidden md:block bg-[#FBF9F2] px-10 pt-14 pb-5 max-w-sm mx-auto shadow-2xl leading-8 italic">
          <p>
            I&apos;m a very anxious person but use this and feel so relaxed and
            sleep way better now with the aid of sleepstiq.
          </p>

          <div className="flex items-center gap-5 mt-20">
            <Image src={James} alt="ceo" className=" w-14" />
            <div>
              <p className="text-[#4D533C] font-bold">James Miller</p>
              <p>CEO, Techbias</p>
            </div>
          </div>
          <Image src={Bottom} alt="ceo" className="w-8 mt-5 mx-auto" />
        </div>
      </div>
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
      <hr className="mx-5 md:mx-16 xl:mx-40 my-20" />
    </div>
  );
};

export default StorySection;
