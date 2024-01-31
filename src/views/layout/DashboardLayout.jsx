import { Outlet } from "react-router-dom";
import DashboardFooter from "../shared/DashboardFooter";
import DashboardNavbar from "../shared/DashboardNavbar";
import DashboardSidebar from "../shared/DashboardSidebar";

export default function DashboardLayout() {
  return (
    <div>
      <DashboardNavbar />
      <div className="flex">
        <div>
          <DashboardSidebar />
        </div>
        <div className="bg-[#F5F5F5] w-full">
          <Outlet></Outlet>

          <DashboardFooter />
        </div>
      </div>
    </div>
  );
}
