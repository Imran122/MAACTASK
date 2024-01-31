import bgimage from "../../../assets/images/landingpage/banner.png";
export default function SignUp() {
  return (
    <div className="">
      <img className="w-full h-[1156px]" src={bgimage} />
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2  bg-white rounded-3xl">
        <div className="py-8 lg:px-20">
          <h2 className="text-2xl font-semibold font-custom_primary_font text-center">
            Create Account
          </h2>
          <p className="text-center text-text_secondary_colour mt-4">
            Fill in the details below to create an account
          </p>
          <form className="">
            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px] mt-4 md:px-0 px-4">
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className=" py-3"
              />
            </div>
            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px] mt-4 md:px-0 px-4">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="  py-3"
              />
            </div>
            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px] mt-4 md:px-0 px-4">
              <input
                type="text"
                placeholder="Enter Your ID"
                className="  py-3"
              />
            </div>
            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px]mt-4 md:px-0 px-4">
              <input
                type="text"
                placeholder="Your Mobile Number"
                className="  py-3"
              />
            </div>
            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px] mt-4 md:px-0 px-4">
              <input type="text" placeholder="Password" className="  py-3" />
            </div>
            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px] mt-4 md:px-0 px-4">
              <input
                type="text"
                placeholder="Confirm Password"
                className="  py-3"
              />
            </div>

            <select
              className="md:w-[608px] w-[450px] mt-8 bg-transparent md:px-0 px-4 border-2 border-gray-200 py-4"
              name="cars"
              id="cars"
            >
              <option
                value="volvo"
                className="text-text_secondary_colour "
                selected
              >
                Select Your Role
              </option>
              <option value="saab">HUB</option>
              <option value="mercedes">STORE</option>
            </select>

            <div className="flex gap-2 mt-4 md:px-0 px-4">
              <input type="checkbox" name="vehicle1" value="Bike" />
              <h2>
                I read and agree to the{" "}
                <span className="text-primary_colour">Terms & Conditions</span>
              </h2>
            </div>
            <button className="text-white bg-primary_colour md:w-[608px] w-[450px] py-4 mt-8">
              Create Account
            </button>
          </form>

          <h2 className="text-center text-lg mt-10">
            Already have an account?{" "}
            <span className="text-primary_colour">Sign In</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
