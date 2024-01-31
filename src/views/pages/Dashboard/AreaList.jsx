import { IoIosArrowForward } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import DashBoardTable from "../../components/Dashboard/DashboardTable/DashBoardTable";

export default function AreaList() {
  return (
    <div>
      <div className="px-6 py-4 flex justify-between">
        <div className="flex flex-col">
          <h2>Area List</h2>
          <div className="flex mt-2 items-center gap-2">
            <h2 className="text-text_secondary_colour">GEO</h2>
            <IoIosArrowForward />

            <h2 className="text-primary_colour">List</h2>
          </div>
        </div>

        <button className="bg-[#0B2E4E] flex px-4 py-3 justify-center items-center text-white rounded-2xl">
          {" "}
          <LuPlus />
          Create New
        </button>
      </div>
      <DashBoardTable />
    </div>
  );
}
