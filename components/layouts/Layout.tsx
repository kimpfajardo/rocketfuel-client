import Sidebar from "./Sidebar";
import { LayoutProps } from "@helpers/types/layout";
import Content from "./Content";

const Layout = (props: LayoutProps) => {
  const { children, headerContent } = props;

  return (
    <div className={"grid grid-cols-[64px_1fr] h-screen inter"}>
      <Sidebar />
      <Content headerContent={headerContent}>{children}</Content>
    </div>
  );
};

export default Layout;
