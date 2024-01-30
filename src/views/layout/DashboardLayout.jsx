import { Outlet } from "react-router-dom";
import DashboardNavbar from "../shared/DashboardNavbar";

export default function DashboardLayout() {
  return (
    <>
      <DashboardNavbar />
      <Outlet></Outlet>
    </>
  );
}
