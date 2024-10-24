import RatingStar from "../../../public/images/star.png";
import Image from "next/image";

interface ReviewCardProps {
  body: string;
  name: string;
}
const ReviewCard = ({ body, name }: ReviewCardProps) => {
  return (
    <div className="bg-[#FBF9F2] h-56 px-7 py-5 max-w-xs space-y-5">
      <p className="italic h-24">{body}</p>
      <p className="font-bold text-[#4D533C]">{name}</p>
      <Image src={RatingStar} alt="ratings" className="w-24" />
    </div>
  );
};

export default ReviewCard;
