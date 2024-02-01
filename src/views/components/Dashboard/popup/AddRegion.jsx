import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addRegion } from "../../../../Redux/Features/RegionSlice/RegionSlice";

export default function AddRegion({ isOpen, onClose }) {
  const modalClass = isOpen
    ? "fixed z-50 py-8 top-1/2 w-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-700 opacity-100 scale-100 w-[475px] bg-slate-200 rounded-md"
    : " opacity-0 py-8 absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50  duration-700 w-[475px] bg-slate-200";
  useEffect(() => {
    // Add a class to the body when the modal is open
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup: Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);
  const dispatch = useDispatch();
  const [regionName, setRegionName] = useState("");

  const handleAddRegion = () => {
    dispatch(addRegion(regionName));
    onClose();
  };

  return (
    <div className={modalClass}>
      <h2 className="px-4">Region</h2>
      <div className="flex flex-col px-4 justify-end">
        <input
          type="text"
          placeholder="Enter Region"
          value={regionName}
          onChange={(e) => setRegionName(e.target.value)}
          className="border-2 outline-none mt-2 py-3 px-2  mb-4"
        />
        <button
          onClick={handleAddRegion}
          className="bg-[#0B2E4E] text-white px-5 py-3 mb-8"
        >
          Add Region
        </button>
      </div>
    </div>
  );
}
