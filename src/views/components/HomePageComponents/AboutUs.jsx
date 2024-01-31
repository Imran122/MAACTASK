import topimg from "../../../assets/images/landingpage/about1.png";
import rightimg from "../../../assets/images/landingpage/about2.png";
import leftimg from "../../../assets/images/landingpage/about3.png";
import dotimg from "../../../assets/images/landingpage/dot.png";
import cup from "../../../assets/images/landingpage/icon/cup.png";
import laptopicon from "../../../assets/images/landingpage/icon/monitor-mobbile.png";
import people from "../../../assets/images/landingpage/icon/people.png";
import personicon from "../../../assets/images/landingpage/icon/user.png";
import profile from "../../../assets/images/landingpage/person.png";
export default function AboutUs() {
  return (
    <div className="bg-banner_bg bg-no-repeat bg-cover mt-10 py-8 lg:px-32 md:px-20 px-8">
      <div className="grid lg:grid-cols-7  mt-20 content-center gap-16 ">
        <div className="col-span-3  flex items-center justify-center">
          <div className="bg-[#F1F6FF] md:w-[440px] md:h-[486px] w-[310px] h-[380px] flex justify-center items-center rounded-3xl relative ">
            <img src={dotimg} />
            <img
              className="absolute left-1/2 -top-20 md:w-[237px] md:h-[280px] w-[190px] h-[240px] -translate-x-1/2"
              src={topimg}
            />
            <img
              className="absolute md:-left-16 -left-5 -bottom-20 md:w-[230px] md:h-[270px] w-[160px] h-[190px]"
              src={leftimg}
            />
            <img
              className="absolute -right-14 bottom-5 md:w-[230px] md:h-[270px] w-[160px] h-[190px]"
              src={rightimg}
            />
          </div>
        </div>
        <div className="col-span-4">
          <div>
            <p className="text-primary_colour mt-2">about us</p>
            <h2 className="text-2xl font-bold mt-5 font-custom_primary_font">
              A dedicated solution for startups and enterprises
            </h2>
            <p className="mt-5 font-custom_primary_font text-justify w-2/3">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="border-b-2 py-5"></div>
          <div className="flex gap-5 mt-8">
            <img className="w-[88px] h-[88px] rounded-full" src={profile} />
            <div>
              <p>Fieldx is for teams that care about their product growth</p>
              <h2 className="text-xl font-bold font-custom_primary_font mt-2">
                CEO, FieldX
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* icon with achive */}
      <div className="grid md:grid-cols-8 gap-4 mt-20 px-20">
        <div className="col-span-2 flex flex-col justify-center items-center">
          <img className="" src={laptopicon} />
          <h3 className="text-primary_colour font-semibold text-3xl mt-4">
            10+
          </h3>
          <h2 className="text-text_secondary_colour mt-4">Platforms Created</h2>
        </div>
        <div className="col-span-2 flex flex-col justify-center items-center">
          <img className="" src={people} />
          <h3 className="text-primary_colour font-semibold text-3xl mt-4">
            1550+
          </h3>
          <h2 className="text-text_secondary_colour mt-4">Platforms Created</h2>
        </div>
        <div className="col-span-2 flex flex-col justify-center items-center">
          <img className="" src={personicon} />
          <h3 className="text-primary_colour font-semibold text-3xl mt-4">
            20+
          </h3>
          <h2 className="text-text_secondary_colour mt-4">Platforms Created</h2>
        </div>
        <div className="col-span-2 flex flex-col justify-center items-center">
          <img className="" src={cup} />
          <h3 className="text-primary_colour font-semibold text-3xl mt-4">
            10+
          </h3>
          <h2 className="text-text_secondary_colour mt-4">Platforms Created</h2>
        </div>
      </div>
    </div>
  );
}
