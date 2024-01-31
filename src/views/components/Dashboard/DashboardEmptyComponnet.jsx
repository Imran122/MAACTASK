import empty from "../../../assets/images/dashboard/empty.png";
export default function DashboardEmptyComponent() {
  return (
    <div className="px-4 ">
      <div className="h-[706px] bg-white flex justify-center items-center flex-col rounded-md">
        <img src={empty} />
        <h2>
          Currently you have no Data. For next step first{" "}
          <span className="text-primary_colour">Create Region</span>
        </h2>
      </div>
    </div>
  );
}
