import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function DashboardSidebar() {
  const [toggle, setToggle] = useState(true);
  const toggleAddCustomer = () => {
    console.log("hhh");
    setToggle(!toggle);
  };
  return (
    <div
      className={`${
        toggle ? "w-[130px]" : "w-[280px]"
      } duration-300 lg:block h-screen  px-3  bg-white relative`}
    >
      <h2 className="text-start uppercase text-lg text-text_secondary_colour">
        Menu
      </h2>

      <div className="flex flex-col">
        <div className="flex gap-4 mt-5">
          {toggle ? (
            <span className="text-2xl font-medium"> </span>
          ) : (
            <span className="text-2xl font-medium">
              {" "}
              <IoLocationOutline />
            </span>
          )}

          <h2 className="text-text_secondary_colour">Geo Information</h2>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <Link className="text-center text-text_secondary_colour">Region</Link>
          <Link className="text-center text-text_secondary_colour">Area</Link>
        </div>
      </div>
      <span
        onClick={toggleAddCustomer}
        className="absolute -right-4 top-5 border bg-[#0B2E4E] rounded-full text-center text-white p-2 justify-center items-center"
      >
        <IoIosArrowBack />
      </span>
    </div>
  );
}
