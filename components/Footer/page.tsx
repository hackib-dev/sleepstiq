import Image from "next/image";
import BgImage from "../../public/images/bgBitmap.png";
import Logo from "../../public/images/footerLogo.png";
import Facebook from "../../public/images/facebook.png";
import Twitter from "../../public/images/twitter.png";
import GooglePlus from "../../public/images/googlePlus.png";
import LinkedIn from "../../public/images/linkedin.png";
import { LucideCopyright } from "lucide-react";
import Line from "../../public/images/line.png";

const Footer = () => {
  return (
    <div className="relative  bg-[#12305B] px-5 md:px-20 py-10 bg-opacity-95 -z-50">
      <Image
        src={BgImage}
        alt="Background Image"
        fill
        className="z-20 object-cover absolute top-0 left-0"
      />
      <Image src={Logo} alt="logo" className="flex  w-32 mx-auto mb-12" />
      <div className="grid grid-cols-3 md:grid-cols-2 xl:grid-cols-12 gap-10">
        <div className="col-span-1">
          <h1 className="uppercase  text-white font-medium  mb-5">Company</h1>
          <div className="space-y-3 text-sm">
            <p className="text-[#ABABAB]">About</p>
            <p className="text-[#ABABAB]">Blog</p>
            <p className="text-[#ABABAB]">Contact</p>
            <p className="text-[#ABABAB]">Jobs</p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 xl:col-span-3  w-full">
          <h1 className="uppercase  text-white font-medium mb-5">Contact</h1>
          <div className="space-y-3 text-sm">
            <h1 className="text-[#ABABAB]">Phone</h1>
            <p className="text-white font-medium">+234 7708 507 3128</p>
            <h1 className="text-[#ABABAB]">Address</h1>
            <p className="text-white font-medium">
              16, Ogundipe Close, Upston Close
            </p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 xl:col-span-5 ml-0 xl:ml-5 flex">
          <div>
            <h1 className="uppercase  text-white font-medium mb-5">
              Consumer Advisory
            </h1>
            <p className="text-white text-sm leading-6">
              These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease. This product should be used only as
              directed on the label. All trademarks and copyrights are property
              of their respective owners and not affiliated with nor do they
              endorse this product. Results may vary.
            </p>
            <p className="text-white text-sm leading-6 mt-3">
              By using our website or product, you agree to follow our terms of
              service.
            </p>
          </div>

          <Image src={Line} alt="line" className="ml-4 h-52 hidden xl:block" />
        </div>
        <div className="col-span-3 md:col-span-1 xl:col-span-3">
          <h1 className="uppercase  text-white font-medium mb-5">
            Get in Touch
          </h1>
          <p className="text-[#ABABAB] text-sm mb-5">
            Feel free to get in touch with us via email
          </p>
          <p className="text-lg text-white font-bold mb-5">
            hello@sleepstiq.com
          </p>
          <div className="flex gap-2 mb-12">
            <Image src={Facebook} alt="facebook" width={28} />
            <Image src={Twitter} alt="twitter" width={28} />
            <Image src={GooglePlus} alt="Gplus" width={28} />
            <Image src={LinkedIn} alt="linkedin" width={28} />
          </div>

          <div className="flex items-center gap-1 text-[#ABABAB]">
            <span>
              <LucideCopyright width={14} />
            </span>
            <p className="text-xs ">2020@sleepstiq. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
