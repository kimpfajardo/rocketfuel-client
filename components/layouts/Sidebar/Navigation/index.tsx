import { sidebarNavigation } from "@helpers/constants/navigation/sidebar";
import Image from "next/image";
import SidebarItem from "../SideBarItem";
import Avatar from "../Avatar";

const Navigation = () => {
    return (
      <nav className="py-5 w-full h-full flex flex-col justify-between">
        <ul>
          {sidebarNavigation.map((item) => (
            <SidebarItem {...item} key={item.url} />
          ))}
        </ul>
        <Avatar />
      </nav>
    );
}

export default Navigation