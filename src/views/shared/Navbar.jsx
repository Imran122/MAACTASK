import { Link } from "react-router-dom";
import logo from "../../assets/images/landingpage/FieldX.png";
export default function Navbar() {
  return (
    <div className="flex justify-between md:px-32 px-6 py-4 border-b-2 bg-transparent absolute top-0 w-full">
      <div className="w-24 h-8">
        <img className="w-full h-auto" src={logo} alt="logo" />
      </div>
      <div className="flex gap-4">
        <Link className="bg-primary_colour px-7 py-3 rounded-xl text-white">
          Login
        </Link>
        <Link className=" text-text_primary_colour px-7 py-3 font-custom_primary_font border-2 border-primary_colour border-r-4 border-b-4 rounded-xl text-center ">
          Registration
        </Link>
      </div>
    </div>
  );
}
