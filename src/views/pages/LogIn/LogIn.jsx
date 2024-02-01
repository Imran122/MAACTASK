import { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  isLoading,
  userAdded,
} from "../../../Redux/Features/AuthSlice/AuthSlice";
import bgimage from "../../../assets/images/landingpage/banner.png";
export default function LogIn() {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["token"]);
  const [formData, setFormData] = useState({
    employeeId: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    dispatch(isLoading(true));

    try {
      const response = await fetch(
        "https://staging-api.erpxbd.com/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            employeeId: formData.employeeId,
            password: formData.password,
          }),
        }
      );

      const responseData = await response.json();
      console.log("ormData", responseData);
      if (response.ok) {
        // Assuming the API returns a token and user data in response
        const { token, user } = responseData;

        // Save the token in cookies
        setCookie("token", token, { path: "/" });

        // Dispatch the userAdded action with the received user data
        dispatch(userAdded(user));
        navigate("/dashboard");
      } else {
        console.log("Error:", responseData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      dispatch(isLoading(false));
    }
  };
  /*  useEffect(() => {
    // Redirect to the login page after successful login
    if (cookies.token) {
      navigate("/dashboard");
    }
  }, [cookies.token, navigate]); */
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
          <form onSubmit={handleSignIn} className="">
            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px] mt-4 md:px-0 px-4">
              <input
                type="text"
                name="employeeId"
                placeholder="Enter Your employeeId"
                onChange={handleOnChange}
                className=" md:w-[608px] w-[450px] py-3"
              />
            </div>

            <div className="border-b-2 border-gray-200 md:w-[608px] w-[450px] mt-4 md:px-0 px-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleOnChange}
                className="md:w-[608px] w-[450px]  py-3"
              />
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
