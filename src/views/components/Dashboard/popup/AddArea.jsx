import { useEffect } from "react";

export default function AddArea({ isOpen, onClose }) {
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

  return (
    <div className={modalClass}>
      <div className="px-4">
        <select
          className="w-full mt-8 px-4 bg-white  border-2 border-gray-200 py-4 rounded-lg"
          name="cars"
          id="cars"
        >
          <option
            value="volvo"
            className="text-text_secondary_colour "
            selected
          >
            Select Region
          </option>
          <option value="saab">HUB</option>
          <option value="mercedes">STORE</option>
        </select>
      </div>

      <h2 className="px-4">Area</h2>
      <div className="flex flex-col px-4 justify-end">
        <input
          type="text"
          placeholder="Enter Region"
          className="border-2 outline-none mt-2 py-3 px-2  mb-4 rounded-lg"
        />
        <button
          onClick={onClose}
          className="bg-[#0B2E4E] text-white px-5 py-3 mb-8 rounded-lg"
        >
          Add Area
        </button>
      </div>
    </div>
  );
}
