import icon from "../../../assets/images/landingpage/box.png";
import middleimg from "../../../assets/images/landingpage/Centralphone2.png";
export default function ProductFeatures() {
  return (
    <div className="lg:px-32 md:px-10 mt-14">
      <div className="text-center mb-2">
        <p className="text-primary_colour mb-4 text-center">product features</p>
        <h2 className="md:text-4xl text-xl font-custom_primary_font md:font-extrabold font-bold mb-12">
          Make more out of your data
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-10 md:gap-6 lg:gap-2">
        {/*   left div */}
        <div className="md:col-span-3 ">
          <div className="mb-5">
            <div className="flex items-end justify-end py-2">
              <img className="" src={icon} />
            </div>
            <h2 className="text-right font-custom_primary_font text-2xl font-extrabold py-2">
              Real-time analytics
            </h2>
            <p className="text-text_secondary_colour text-right font-custom_primary_font font-normal py-2">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="mb-5">
            <div className="flex items-end justify-end py-2">
              <img className="" src={icon} />
            </div>
            <h2 className="text-right font-custom_primary_font text-2xl font-extrabold py-2">
              Intuitive dashboard
            </h2>
            <p className="text-text_secondary_colour text-right font-custom_primary_font font-normal py-2">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="mb-5">
            <div className="flex items-end justify-end py-2">
              <img className="" src={icon} />
            </div>
            <h2 className="text-right font-custom_primary_font text-2xl font-extrabold py-2">
              Smart suggestions
            </h2>
            <p className="text-text_secondary_colour text-right font-custom_primary_font font-normal py-2">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
        </div>

        {/*   middle div */}
        <div className="md:col-span-4  relative">
          <div className="flex justify-center items-center z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-primary_colour rounded-full"></div>
            <img
              className="z-50 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-3xl"
              src={middleimg}
              alt="middleimg"
            />
          </div>
        </div>

        {/* right div */}
        <div className="md:col-span-3 ">
          <div className="mb-5">
            <div className="flex items-end justify-start py-2">
              <img className="" src={icon} />
            </div>
            <h2 className="text-left font-custom_primary_font text-2xl font-extrabold py-2">
              Multiple views
            </h2>
            <p className="text-text_secondary_colour text-left font-custom_primary_font font-normal py-2">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="mb-5">
            <div className="flex items-end justify-start py-2">
              <img className="" src={icon} />
            </div>
            <h2 className="text-left font-custom_primary_font text-2xl font-extrabold py-2">
              AI-led diagnoses
            </h2>
            <p className="text-text_secondary_colour text-left font-custom_primary_font font-normal py-2">
              See product usage, sign-ins, feature metrics change as users work
              on you.
            </p>
          </div>
          <div className="mb-5">
            <div className="flex items-end justify-start py-2">
              <img className="" src={icon} />
            </div>
            <h2 className="text-left font-custom_primary_font text-2xl font-extrabold py-2">
              Responsive
            </h2>
            <p className="text-text_secondary_colour text-left font-custom_primary_font font-normal py-2">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
