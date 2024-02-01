import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoading,
  userAdded,
} from "../../../Redux/Features/AuthSlice/AuthSlice";
import bgimage from "../../../assets/images/landingpage/banner.png";
export default function SignUp() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeId: "",
    password: "",
    passwordConfirm: "",
    role: "",
    phoneNumber: "",
  });

  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...formData };
    newRegisterData[field] = value;

    setFormData(newRegisterData);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(isLoading(true));
    console.log("formData", formData);
    var requestOptions = {
      method: "POST",
      body: formData,
      /* mode: "no-cors", */
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "https://staging-api.erpxbd.com/api/v1/users/signup",
        requestOptions
      );
      console.log("response", response);
      const data = await response.json();

      // Dispatch the userAdded action with the received data
      dispatch(userAdded(data));
    } catch (error) {
      console.error("Error:", error);
    } finally {
      dispatch(isLoading(false));
    }
  };

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
          <form onSubmit={handleSignUp} className="">
            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px] mt-4 md:px-0 px-4">
              <input
                type="text"
                name="name"
                onChange={handelOnChange}
                placeholder="Enter Your Full Name"
                className="md:w-[608px] w-[450px] py-3"
              />
            </div>
            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px] mt-4 md:px-0 px-4">
              <input
                type="text"
                name="email"
                onChange={handelOnChange}
                placeholder="Enter Your Email"
                className="md:w-[608px] w-[450px]  py-3"
              />
            </div>
            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px] mt-4 md:px-0 px-4">
              <input
                type="text"
                name="employeeId"
                onChange={handelOnChange}
                placeholder="Enter Your ID"
                className="md:w-[608px] w-[450px]  py-3"
              />
            </div>
            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px]mt-4 md:px-0 px-4">
              <input
                type="text"
                name="phoneNumber"
                onChange={handelOnChange}
                placeholder="Your Mobile Number"
                className="md:w-[608px] w-[450px]  py-3"
              />
            </div>
            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px] mt-4 md:px-0 px-4">
              <input
                type="password"
                name="password"
                onChange={handelOnChange}
                placeholder="Password"
                className="md:w-[608px] w-[450px]  py-3"
              />
            </div>
            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px] mt-4 md:px-0 px-4">
              <input
                type="password"
                name="passwordConfirm"
                onChange={handelOnChange}
                placeholder="Confirm Password"
                className="md:w-[608px] w-[450px]  py-3"
              />
            </div>

            <select
              className="md:w-[608px] w-[450px] mt-8 bg-transparent md:px-0 px-4 border-2 border-gray-200 py-4"
              name="role"
              onChange={handelOnChange}
              id="cars"
            >
              <option value="HUB">HUB</option>
              <option value="MANAGER">MANAGER</option>
            </select>

            <div className="flex gap-2 mt-4 md:px-0 px-4">
              <input type="checkbox" name="vehicle1" value="Bike" />
              <h2>
                I read and agree to the{" "}
                <span className="text-primary_colour">Terms & Conditions</span>
              </h2>
            </div>
            <button
              className="text-white bg-primary_colour md:w-[608px] w-[450px] py-4 mt-8"
              type="submit"
              disabled={authState.isLoading}
            >
              {authState.isLoading ? "Creating Account..." : "Create Account"}
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
