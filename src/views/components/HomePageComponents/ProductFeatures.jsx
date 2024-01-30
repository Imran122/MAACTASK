import icon from "../../../assets/images/landingpage/box.png";
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
        <div className="md:col-span-3 border border-red-400">
          <div className="">
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
          <div className="">
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
          <div className="">
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
        </div>

        {/*   middle div */}
        <div className="md:col-span-4 border">
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2  w-[400px] h-[400px] bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* right div */}
        <div className="md:col-span-3 border border-green-800">
          <div className="">
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
        </div>
      </div>
    </div>
  );
}
