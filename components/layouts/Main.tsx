import Image from "next/image";
import Sidebar from "./Sidebar";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  
  return (
    <div className={"flex h-screen inter"}>
      <Sidebar />
      <div className="w-full flex flex-col">
        <div className="h-[64px] w-full flex items-center bg-white px-6 border-b border-gray">
          <div className="flex gap-x-5">
            <Image
              src="/images/sidebar/map.svg"
              width={24}
              height={24}
              alt="plan"
            />
            <h1 className="text-xl inter font-semibold text-l-label-primary">
              Plan
            </h1>
          </div>
        </div>
        <main className="h-[calc(100vh-64px)] bg-lightgray overflow-y-scroll">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
