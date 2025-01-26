import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";

const RootLayout = () => {
  return (
    <div className="d_flex just_center flex_wrap">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
