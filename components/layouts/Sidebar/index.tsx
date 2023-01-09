import Image from "next/image";
import SidebarItem from "./SideBarItem";
import { sidebarNavigation } from "@helpers/constants/navigation/sidebar";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <div className="w-full h-screen border-r border-gray grid grid-cols-1 grid-rows-[64px_1fr]">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Sidebar;
