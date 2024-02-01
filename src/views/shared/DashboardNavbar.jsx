import { useState } from "react";
import { useCookies } from "react-cookie";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/landingpage/logofooter.png";
import person from "../../assets/images/landingpage/person.png";

export default function DashboardNavbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [cookies, removeCookie] = useCookies(["token"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const user = useSelector((state) => state.auth);
  const handleSettings = () => {
    setDropdownVisible(false);
  };
  const handleLogout = () => {
    // Clear token from cookies
    setDropdownVisible(false);
    removeCookie("token");

    navigate("/login");
  };
  return (
    <div className="flex justify-between px-5 py-5 shadow-lg">
      <img src={logo} alt="Logo" />
      <div className="flex gap-2 justify-center items-center">
        <div className="relative">
          <img
            className="w-9 h-9 rounded-full cursor-pointer"
            src={person}
            alt="Person"
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow">
              <div
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={handleSettings}
              >
                Settings
              </div>
              <div
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
        <div
          onClick={toggleDropdown}
          className="flex gap-2 justify-center items-center cursor-pointer"
        >
          <h2>{user.name}</h2>

          {dropdownVisible ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdKeyboardArrowDown onClick={toggleDropdown} />
          )}
        </div>
      </div>
    </div>
  );
}
