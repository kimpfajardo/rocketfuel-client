import Image from "next/image";
import { mockNavigation } from "../../../helpers/mocks/mockNavigation";
import SidebarItem from "./SideBarItem";
import { Vspacer } from "../../common/Spacer";

const Sidebar = () => {
  return (
    <div className="w-16 min-w-[64px] h-screen border-r border-gray">
      <div className="h-16 px-4 py-5 border-b border-gray">
        <Image
          alt="RocketFuel logo"
          src="/images/logo.svg"
          width={30}
          height={24}
        />
      </div>
      <nav className="py-4">
        <ul>
          {mockNavigation.map((item) => (
            <SidebarItem {...item} key={item.icon} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
