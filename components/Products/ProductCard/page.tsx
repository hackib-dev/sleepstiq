import RatingStar from "../../../public/images/star.png";
import Image, { StaticImageData } from "next/image";

interface ProductReviewCardProps {
  penImage: StaticImageData;
  body: string;
  name: string;
}
const ProductReviewCard = ({
  body,
  name,
  penImage,
}: ProductReviewCardProps) => {
  return (
    <div className="h-[440px]  max-w-xs  shadow-md rounded-lg">
      <Image src={penImage} alt="pen" />
      <div className="px-7 py-5 space-y-5">
        <p className="italic h-24">{body}</p>
        <p className="font-bold text-[#4D533C]">{name}</p>
        <Image src={RatingStar} alt="ratings" className="w-24" />
      </div>
    </div>
  );
};

export default ProductReviewCard;
