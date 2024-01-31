import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../../assets/images/landingpage/logofooter.png";
import person from "../../assets/images/landingpage/person.png";
export default function DashboardNavbar() {
  return (
    <div className="flex justify-between px-5 py-5 shadow-lg">
      <img src={logo} />
      <div className="flex gap-2 justify-center items-center">
        <img className="w-9 h-9 rounded-full" src={person} />
        <div className="flex gap-2 justify-center items-center">
          <h2>Henry</h2>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
}
