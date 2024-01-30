import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function MainLayout() {
  return (
    <>
      <div className="">
        <Navbar />
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
