import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import DashboardEmptyComponent from "../../components/Dashboard/DashboardEmptyComponnet";
import AddRegion from "../../components/Dashboard/popup/AddRegion";

export default function DashboardHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="px-6 py-4 flex justify-between">
        <div className="flex flex-col">
          <h2>Region List</h2>
          <div className="flex mt-2 items-center gap-2">
            <h2 className="text-text_secondary_colour">GEO</h2>
            <IoIosArrowForward />

            <h2 className="text-primary_colour">List</h2>
          </div>
        </div>

        <button
          onClick={() => openModal()}
          className="bg-[#0B2E4E] flex px-4 py-3 justify-center items-center text-white rounded-2xl"
        >
          {" "}
          <LuPlus />
          Create New
        </button>
      </div>
      <DashboardEmptyComponent />
      <AddRegion isOpen={isModalOpen} onClose={closeModal}></AddRegion>
    </div>
  );
}
