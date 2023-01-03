import Image from "next/image";
import Sidebar from "./Sidebar";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  
  return (
    <div className={`flex h-screen inter`}>
      <Sidebar />
      <div className="min-h-screen max-h-screen w-full flex flex-col flex-1">
        <div className="h-16 min-h-[64px] w-full flex items-center sticky top-0 z-10 bg-white px-6 border-b border-gray">
          <div className="flex gap-x-5">
            <Image
              src="/images/sidebar/map.svg"
              width={24}
              height={24}
              alt="plan"
            />
            <h1 className="text-xl inter font-semibold text-l-label-primary">Plan</h1>
          </div>
        </div>
        <main className="h-full bg-lightgray flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
