import bgimage from "../../../assets/images/landingpage/banner.png";
export default function LogIn() {
  return (
    <div className="">
      <img className="w-full h-[856px]" src={bgimage} />
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2  bg-white rounded-3xl">
        <div className="py-8 lg:px-20">
          <h2 className="text-2xl font-semibold font-custom_primary_font text-center">
            Welcome Back!
          </h2>
          <p className="text-center text-text_secondary_colour mt-4">
            Please login to your account{" "}
          </p>
          <form className="">
            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px] mt-4 md:px-0 px-4">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="  py-3"
              />
            </div>

            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px] mt-4 md:px-0 px-4">
              <input type="text" placeholder="Password" className="  py-3" />
            </div>

            <button className="text-white bg-primary_colour md:w-[608px] w-[450px] py-4 mt-8">
              Sign In
            </button>
          </form>

          <h2 className="text-center text-lg mt-10">
            Don't have any account?
            <span className="text-primary_colour">Sign Up</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
