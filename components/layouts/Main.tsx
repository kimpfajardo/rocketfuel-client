import Image from "next/image";
import Sidebar from "./Sidebar";
import { inter } from "../../helpers/constants/font/inter";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  
  return (
    <div className={`flex h-screen ${inter.className}`}>
      <Sidebar />
      <div className="min-h-screen max-h-screen w-full flex flex-col">
        <div className="h-16 w-full flex items-center bg-white px-6 border-b border-gray">
          <div className="flex gap-x-5">
            <Image
              src="/images/sidebar/map.svg"
              width={24}
              height={24}
              alt="plan"
            />
            <h1 className="text-2xl font-semibold">Plan</h1>
          </div>
        </div>
        <main className="bg-lightgray flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
