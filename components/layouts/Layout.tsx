import Sidebar from "./Sidebar";
import { LayoutProps } from "@helpers/types/layout";
import Content from "./Content";

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className={"grid grid-cols-[64px_1fr] h-screen inter"}>
      <Sidebar />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
