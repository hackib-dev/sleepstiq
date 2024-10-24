import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductReviewCard from "./ProductCard/page";
import { productReviewers } from "./ProductCard/constants";

const Products = () => {
  return (
    <div className="pl-5 md:pl-16 xl:pl-40 mb-20 xl:mb-40">
      <div className="mt-8 lg:mt-10 xl:mt-14">
        <p className="text-[#4D533C] font-bold text-2xl mb-12">
          Product Reviews
        </p>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {productReviewers.map((review, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-[90%] md:basis-[40%] lg:basis-[32%]"
              >
                <div className="p-1">
                  <ProductReviewCard
                    penImage={review.image}
                    body={review.body}
                    name={review.name}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Products;
