import { Button } from "../ui/button";

const VisitSection = () => {
  return (
    <>
      <div className="flex flex-col justify-items-center px-5 md:px-16 xl:px-44 items-start xl:items-center my-20 xl:my-40 space-y-8">
        <h1 className="text-3xl text-primary-blue font-bold">Visit Our Shop</h1>
        <p className="text-start xl:text-center text-[#7A888E]">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <Button className="w-full md:w-auto">Visit Shop</Button>
      </div>
      <hr className="mx-5 md:mx-16 xl:mx-40 my-10" />
    </>
  );
};

export default VisitSection;
