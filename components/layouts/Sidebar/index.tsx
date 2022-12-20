import { mockNavigation } from "../../../helpers/mocks/mockNavigation";
import SidebarItem from "./SideBarItem";

const Sidebar = () => {
  return (
    <nav className="w-24">
      <ul>
        {mockNavigation.map((item) => (
          <SidebarItem {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
