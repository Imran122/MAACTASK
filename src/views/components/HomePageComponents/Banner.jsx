import { Link } from "react-router-dom";
import bannerimg from "../../../assets/images/landingpage/banner.png";
import laptop from "../../../assets/images/landingpage/laptop.png";
import mobile from "../../../assets/images/landingpage/mobile.png";
export default function Banner() {
  return (
    <div className="">
      <div className="md:h-[1400px] h-[1050px] border-b-2">
        <img className=" w-full md:h-[910px] h-[600px]" src={bannerimg} />
      </div>
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-full">
        <div>
          <h2 className="text-center md:text-4xl text-xl font-custom_primary_font md:font-extrabold font-bold">
            Analytics that transform your <br /> product inside-out
          </h2>
        </div>
        <div className="flex md:gap-4 gap-2 justify-center items-center md:py-4 ">
          <Link className="bg-primary_colour px-7 py-4 rounded-xl text-white text-center font-custom_primary_font">
            Request For Demo
          </Link>
          <Link className="font-semibold text-text_primary_colour px-7 py-4 font-custom_primary_font border-2 border-primary_colour border-r-4 border-b-4 rounded-xl text-center ">
            Download
          </Link>
        </div>
        <div className="mt-10">
          <div className="relative">
            <img
              className="w-[1009px] h-auto absolute left-1/2 top-1/3 -translate-x-1/2"
              src={laptop}
              alt="laptop"
            />
            <img
              className="absolute md:top-80 md:right-1/3 md:translate-x-1/4 top-10 right-1/3 translate-x-1/3 w-[250px] md:w-[325px] h-auto"
              src={mobile}
              alt="mobile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
