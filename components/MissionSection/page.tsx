import Image from "next/image";
import Mission from "../../public/images/mission.png";
import { Button } from "../ui/button";

const MissionSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-center pl-5 md:pl-16 xl:pl-40 gap-5 my-16 xl:my-32">
      <div className="space-y-6 col-span-5">
        <p className="text-primary-blue font-bold text-3xl xl:text-3xl">
          Our Mission
        </p>

        <p className="text-[#7A888E]  text-sm xl:text-base max-w-[420px]">
          We started Sleepstiq with 1 simple goal: to be your best friend at
          bedtime. We, just like you, deal with stress, unease, and trouble
          sleeping from a number of silly things like school, work, screens,
          numbers, and people. That's why we created products that aim to -
        </p>

        <div className="text-[#7A888E]">
          <p>✓ Promote Calm </p>
          <p>✓ Support Sleep </p>
          <p>✓ Reduce Stress</p>
          <p>✓ Aid Relaxation</p>
        </div>
      </div>
      <Image src={Mission} alt="shop" className="col-span-7" />
    </div>
  );
};

export default MissionSection;
